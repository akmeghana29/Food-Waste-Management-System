const mongoose = require("mongoose");

const MealRecordSchema = new mongoose.Schema({
  date:               { type: Date,   required: true },
  week_number:        { type: Number, required: true },
  month:              { type: Number, required: true },
  day_of_week_encoded:{ type: Number, required: true },
  is_weekend:         { type: Number, default: 0 },
  is_holiday:         { type: Number, default: 0 },
  is_vacation_period: { type: Number, default: 0 },
  is_event_day:       { type: Number, default: 0 },
  meal_Breakfast:     { type: Number, default: 0 },
  meal_Brunch:        { type: Number, default: 0 },
  meal_Dinner:        { type: Number, default: 0 },
  meal_Lunch:         { type: Number, default: 0 },
  meal_Snacks:        { type: Number, default: 0 },
  menu_category_encoded:  { type: Number, default: 0 },
  event_College_Event:    { type: Number, default: 0 },
  event_Festival:         { type: Number, default: 0 },
  hostel_capacity:        { type: Number, required: true },
  students_present:       { type: Number, required: true },
  prev_day_same_meal_consumed_kg: { type: Number, required: true },
  last_7_days_avg_consumed_kg:    { type: Number, required: true },
  last_7_days_avg_wasted_kg:      { type: Number, required: true },
  predicted_quantity_kg:  { type: Number },
  actual_consumed_kg:     { type: Number, default: null },
  actual_wasted_kg:       { type: Number, default: null },
  actual_prepared_kg:     { type: Number, default: null },
  actuals_logged:         { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("MealRecord", MealRecordSchema);