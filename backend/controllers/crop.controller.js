const Crop = require("../models/crop.model");

exports.createCrop = async (req, res) => {
  try {
    const {
      cropName,
      cropType,
      season,
      quantity,
      unit,
      farmLocation,
      soilType,
      irrigationType,
      fertilizerUsed,
      pesticideUsed,
      pricePerUnit,
      marketName,
      harvestingDate,
      sowingDate,
      cropDuration,
      qualityGrade,
      storageType,
      weatherCondition,
      organicCertified,
      farmerNotes
    } = req.body;

    const newCrop = new Crop({
      cropName,
      cropType,
      season,
      quantity,
      unit,
      farmLocation,
      soilType,
      irrigationType,
      fertilizerUsed,
      pesticideUsed,
      pricePerUnit,
      marketName,
      harvestingDate,
      sowingDate,
      cropDuration,
      qualityGrade,
      storageType,
      weatherCondition,
      organicCertified,
      farmerNotes
    });

    await newCrop.save();
    res.status(201).json({ message: "Crop data submitted successfully", crop: newCrop });
  } catch (error) {
    console.error("Error saving crop data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
