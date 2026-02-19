# Hostel-Food-Waste-Management-System
Food Waste Management System made for my own University's hostel mess, leveraging Machine Learning and Data Science. It is fully deployed and operational.

Please find the deployed webite here: https://fwms-frontend.vercel.app/

Development Stages
Stage 1: Data Collection
Acquired authentic hostel data from wardens.
Features: Date, total_strength, students_present, students_absent, Food_wasted_in_kg (obtained from mess manager with permission).
Span: Last 5 years (COVID periods excluded); missing values reasonably imputed.

Stage 2: Data Cleaning and Feature Extraction
Applied AI tools to academic calendars for features: is_holiday, is_event, is_vacation.
Derived: week_number, month, day_of_week, is_weekend, prev_day_same_meal_consumed_kg, last_7_days_avg_consumed_kg, last_7_days_avg_wasted_kg.
One-hot encoded meal types, resulting in 20 features (selectively pruned).

Stage 3: Exploratory Data Analysis (EDA)
Examined distributions, waste patterns, and data integrity.
Insights: Food waste by meal type, attendance vs. consumption, holiday effects, monthly trends, correlations.

Stage 4: Model Training
Utilized Gradient Boosting Regressor.
Performance:
R² Score: 0.9946
Mean Absolute Error: ±6.26 kg
Overall Accuracy: 96.27%

Stage 5: Full-Stack Development
Implemented with MERN stack and Flask microservice for ML inference.
Enables kitchen staff to input daily data for real-time predictions on food preparation (kg per meal).

Clean, intuitive frontend.

Stage 6: Deployment
Frontend (React): Vercel
Backend (Node/Express) + ML Service (Flask): Render
Database: MongoDB Atlas
Live and accessible.
