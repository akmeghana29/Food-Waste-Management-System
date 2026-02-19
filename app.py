from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

model         = joblib.load(os.path.join("models", "final_model_FWMS.pkl"))
feature_names = joblib.load(os.path.join("models", "feature_names_FWMS.pkl"))

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "features": feature_names})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data     = request.get_json(force=True)
        features = [float(data[f]) for f in feature_names]
        X        = np.array(features).reshape(1, -1)
        result   = float(model.predict(X)[0])
        result   = round(max(0, result), 2)
        return jsonify({"predicted_quantity_kg": result, "status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)