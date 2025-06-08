import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoReturnUpBack } from "react-icons/io5";

const Farminfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cropName: "",
    cropType: "",
    season: "",
    quantity: "",
    unit: "",
    farmLocation: "",
    soilType: "",
    irrigationType: "",
    fertilizerUsed: "",
    pesticideUsed: "",
    pricePerUnit: "",
    marketName: "",
    harvestingDate: "",
    sowingDate: "",
    cropDuration: "",
    qualityGrade: "",
    storageType: "",
    weatherCondition: "",
    organicCertified: "",
    farmerNotes: "",
    cropImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, cropImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/farmcropdata/farminfo`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.status === 201) {
        alert("Submitted Successfully!");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Submission Failed");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 md:p-10">
      <Link
        to="/farmerHome"
        className="text-rose-600 text-3xl hover:text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 p-0 rounded-lg inline-block shadow-md"
      >
        <IoReturnUpBack />
      </Link>

      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-green-500">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-green-800 underline mb-8">
          🌾 Farmer's Crop Details Form 🌾
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Upload Image */}
          <div className="md:w-1/3 border-2 border-dashed border-green-400 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold mb-4 text-green-700">Upload Crop Image</h2>
            {formData.cropImage ? (
              <img
                src={URL.createObjectURL(formData.cropImage)}
                alt="Crop"
                className="rounded-lg w-full object-cover mb-4"
              />
            ) : (
              <div className="bg-green-100 py-12 text-green-700 rounded-lg mb-4">
                No Image Selected
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              id="cropImage"
              onChange={handleChange}
              className="hidden"
            />
            <label
              htmlFor="cropImage"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg cursor-pointer inline-block"
            >
              Choose Image
            </label>
          </div>

          {/* Right: Form */}
          <div className="md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { name: "cropName", label: "Crop Name" },
                { name: "cropType", label: "Crop Type" },
                { name: "season", label: "Season" },
                { name: "quantity", label: "Quantity", type: "number" },
                { name: "unit", label: "Unit (kg, tonne)" },
                { name: "farmLocation", label: "Farm Location" },
                { name: "soilType", label: "Soil Type" },
                { name: "irrigationType", label: "Irrigation Type" },
                { name: "fertilizerUsed", label: "Fertilizer Used" },
                { name: "pesticideUsed", label: "Pesticide Used" },
                { name: "pricePerUnit", label: "Price per Unit", type: "number" },
                { name: "marketName", label: "Market Name" },
                { name: "harvestingDate", label: "Harvesting Date", type: "date" },
                { name: "sowingDate", label: "Sowing Date", type: "date" },
                { name: "cropDuration", label: "Crop Duration (days)", type: "number" },
                { name: "qualityGrade", label: "Quality Grade" },
                { name: "storageType", label: "Storage Type" },
                { name: "weatherCondition", label: "Weather Condition" },
                { name: "organicCertified", label: "Organic Certified" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-1 font-medium text-green-900">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder={field.placeholder || ""}
                  />
                </div>
              ))}

              {/* Farmer Notes - Full Width */}
              <div className="col-span-1 sm:col-span-2">
                <label className="block mb-1 font-medium text-green-900">
                  Farmer Notes
                </label>
                <textarea
                  name="farmerNotes"
                  value={formData.farmerNotes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special notes..."
                  className="w-full px-4 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  ✅ Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farminfo;
