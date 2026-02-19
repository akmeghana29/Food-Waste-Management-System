const router = require("express").Router();
const ctrl   = require("../controllers/predictionController");

router.post("/predict",        ctrl.predict);
router.post("/actuals/:id",    ctrl.logActuals);
router.get("/history",         ctrl.getHistory);

module.exports = router;