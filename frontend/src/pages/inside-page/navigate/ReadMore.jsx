import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import audio from "../audio/nature.mp3";
import axios from "axios";

const ReadMore = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-6">No media data found.</div>;

  const [formData, setFormData] = useState({
    animalname: "",
    age: "",
    type: "",
    location: "",
    description: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const animalTypes = ["Mammal", "Bird", "Reptile", "Amphibian", "Fish", "Insect", "Other"];
  const animalLocations = [
    "Gir Forest", "Sundarbans", "Kaziranga", "Western Ghats", "Himalayas",
    "Jim Corbett", "Bandipur", "Manas National Park", "Ranthambore", "Satpura",
  ];

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/forest/animal`, formData);
      setAnimals(res.data);
    } catch (error) {
      console.error("Failed to fetch animals:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/forest/animal`, formData);
      alert("Successfully Animal Data submitted!");
      setFormData({
        animalname: "",
        age: "",
        type: "",
        location: "",
        description: "",
      });
      fetchAnimals();
    } catch (error) {
      alert("Error submitting animal");
      console.error(error);
    } finally {
      setLoading(false);
    }
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6 sm:px-6 md:px-10">
      {/* Back Button */}
      <div className="mb-5">
        <Link to="/natureHome" className="text-rose-600 text-3xl hover:text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 p-1 rounded-lg inline-block shadow-md">
          <IoReturnUpBack />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-700 text-center underline">
        {state.title}
      </h1>

      {/* Audio Player */}
      <div className="fixed bottom-1 right-1 z-50">
        <audio src={audio} controls hidden autoPlay className="w-64 rounded-lg shadow-lg py-1" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto">
        {/* Media Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            {state.type === "video" ? (
              <video
                src={state.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            ) : (
              <img
                src={state.mediaUrl}
                alt={state.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <p className="text-gray-800 whitespace-pre-line text-sm sm:text-base">
              {state.description}
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-100 via-green-50 to-green-100 p-6 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4">
              🐾 Animal Information Form 🐾
            </h2>

            {/* Animal Name */}
            <div>
              <label className="block text-purple-700 font-semibold mb-1">Animal Name</label>
              <input
                type="text"
                name="animalname"
                value={formData.animalname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter animal name"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-blue-700 font-semibold mb-1">Animal Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter animal age"
                required
                min={0}
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-pink-700 font-semibold mb-1">Type of Animal</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              >
                <option value="">Select type</option>
                {animalTypes.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-yellow-700 font-semibold mb-1">Animal Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Select location</option>
                {animalLocations.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-red-700 font-semibold mb-1">Animal Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Describe the animal"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Submitted Data */}
      {submittedData && (
        <div className="mt-8 bg-white rounded-xl p-4 shadow-md text-gray-700 max-w-screen-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">🐾 Animal Information Data :-</h3>
          <p><strong>Animal Name:</strong> {submittedData.animalname}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Type:</strong> {submittedData.type}</p>
          <p><strong>Location:</strong> {submittedData.location}</p>
          <p><strong>Description:</strong> {submittedData.description}</p>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
