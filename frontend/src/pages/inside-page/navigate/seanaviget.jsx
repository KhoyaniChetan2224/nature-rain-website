import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const SeaNavigate = () => {
  const [formData, setFormData] = useState({
    observerName: "",
    date: "",
    time: "",
    location: "",
    temperature: "",
    windSpeed: "",
    waveHeight: "",
    cloudCover: "",
    waterColor: "",
    skyColor: "",
    mood: "",
    photographer: "",
    cameraUsed: "",
    email: "",
    description: "",
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Save form data to show it
    alert("Observation Submitted!");
  };

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-6">No media data found.</div>;

  const isVideo = state?.src?.endsWith(".mp4");

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-rose-600 text-3xl hover:text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 p-0 rounded-lg inline-block shadow-md"
      >
        <IoReturnUpBack className="mr-2" />
      </button>

      <h2 className="text-2xl text-center font-bold text-green-800 mb-2">
        {state.title}
      </h2>
      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Video + Description */}
        <div className="w-full lg:w-2/3">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
            {isVideo ? (
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
              >
                <source src={state.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={state.src}
                alt={state.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-gray-800">
            <p className="whitespace-pre-line text-sm sm:text-base text-green-700">
              {state.desc}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4">
              Sea Sunset Information Form
            </h2>
            <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {/* (Your form inputs here - same as you already have) */}
            {/* For brevity, I'm omitting the form inputs here since you already have them. */}
            {/* Just copy your inputs here as they are, they are unchanged */}

            {/* Observer Name */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Observer Name
                </label>
                <input
                type="text"
                name="observerName"
                value={formData.observerName}
                onChange={handleChange}
                placeholder="test name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Date */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Date
                </label>
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Time */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Time
                </label>
                <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Location */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Location
                </label>
                <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Goa Beach, India"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Temperature */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Temperature (°C)
                </label>
                <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="29"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Wind Speed */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Wind Speed
                </label>
                <input
                type="number"
                name="windSpeed"
                value={formData.windSpeed}
                onChange={handleChange}
                placeholder="12"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Wave Height */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Wave Height
                </label>
                <input
                type="text"
                name="waveHeight"
                value={formData.waveHeight}
                onChange={handleChange}
                placeholder="1.5 meters"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-teal-50"
                />
            </div>

            {/* Cloud Cover */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Cloud Cover
                </label>
                <select
                name="cloudCover"
                value={formData.cloudCover}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                <option value="">Select cloud cover</option>
                <option value="Clear">Clear</option>
                <option value="Partly Cloudy">Partly Cloudy</option>
                <option value="Overcast">Overcast</option>
                </select>
            </div>

            {/* Water Color */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Water Color
                </label>
                <select
                name="waterColor"
                value={formData.waterColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                <option value="">Select water color</option>
                <option value="Blue">Blue</option>
                <option value="Turquoise">Turquoise</option>
                <option value="Golden">Golden</option>
                <option value="Grey">Grey</option>
                </select>
            </div>

            {/* Sky Color */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Sky Color
                </label>
                <select
                name="skyColor"
                value={formData.skyColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                <option value="">Select sky color</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Red">Red</option>
                </select>
            </div>

            {/* Mood */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mood
                </label>
                <select
                name="mood"
                value={formData.mood}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                <option value="">Select mood</option>
                <option value="Peaceful">Peaceful</option>
                <option value="Romantic">Romantic</option>
                <option value="Melancholic">Melancholic</option>
                <option value="Joyful">Joyful</option>
                </select>
            </div>

            {/* Photographer Name */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Photographer Name
                </label>
                <input
                type="text"
                name="photographer"
                value={formData.photographer}
                onChange={handleChange}
                placeholder="test name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* Camera Used */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Camera Used
                </label>
                <input
                type="text"
                name="cameraUsed"
                value={formData.cameraUsed}
                onChange={handleChange}
                placeholder="Canon EOS R5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="test@test.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* Description */}
            <div className="sm:col-span-2 lg:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Observation Description
                </label>
                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe the atmosphere, sunset hues, sounds, and feelings..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-3 text-center">
                <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition"
                >
                Submit
                </button>
            </div> 
            </form>
        </div>
      </div>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md text-gray-800">
          <h3 className="text-xl font-bold mb-4 text-green-700">
            Submitted Observation Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(submittedData).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-2">
                <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}: </span>
                <span>{value || "-"}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeaNavigate;
