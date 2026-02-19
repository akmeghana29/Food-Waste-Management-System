const axios      = require("axios");
const MealRecord = require("../models/MealRecord");

exports.predict = async (req, res) => {
  try {
    const payload = req.body;

    const flaskRes = await axios.post(
      `${process.env.FLASK_URL}/predict`,
      payload,
      { timeout: 10000 }
    );
    const { predicted_quantity_kg } = flaskRes.data;

    const record = new MealRecord({
      date: new Date(),
      ...payload,
      predicted_quantity_kg,
    });
    await record.save();

    return res.json({
      predicted_quantity_kg,
      record_id: record._id,
      status: "success",
    });

  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res.status(503).json({ error: "ML service unavailable. Is Flask running?" });
    }
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};

exports.logActuals = async (req, res) => {
  try {
    const { actual_consumed_kg, actual_wasted_kg, actual_prepared_kg } = req.body;
    const record = await MealRecord.findByIdAndUpdate(
      req.params.id,
      { actual_consumed_kg, actual_wasted_kg, actual_prepared_kg, actuals_logged: true },
      { new: true }
    );
    if (!record) return res.status(404).json({ error: "Record not found" });
    return res.json({ status: "logged", record });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 30;
    const records = await MealRecord.find({ actuals_logged: true })
      .sort({ date: -1 })
      .limit(limit)
      .lean();
    return res.json(records);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};