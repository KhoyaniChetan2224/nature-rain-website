import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import axios from "axios";

const Farm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    farmerName: "",
    farmerEmail: "",
    farmerPhone: "",
    farmerLocation: "",
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  if (!state) return <div className="p-6">No farm data found.</div>;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/farmer/farm`, formData);
     if (response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        navigate('/farminfo');
        console.log("Signup successful:", data);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      {/* Back Button */}
      <div className="mb-5">
        <Link
          to="/farmerHome"
          className="text-rose-600 text-3xl hover:text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 p-0 rounded-lg inline-block shadow-md"
        >
          <IoReturnUpBack />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-green-700 underline mb-6">
        {state.title}
      </h1>

      {/* Content Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Media + Description */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
            {state.type === "video" ? (
              <video
                src={state.src}
                loop
                muted
                autoPlay
                className="w-full h-[350px] object-cover"
              />
            ) : (
              <img
                src={state.src}
                alt={state.title}
                className="w-full h-[350px] object-cover"
              />
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-gray-800">
            <p className="whitespace-pre-line text-sm sm:text-base">{state.desc}</p>
          </div>
        </div>

        {/* Right: Farmer Info Form */}
        <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold mb-6 text-green-700 underline decoration-wavy">
            Farmer Information
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold text-purple-700 mb-1">Farmer Name</label>
              <input
                type="text"
                name="farmerName"
                placeholder="Enter Farmer Name"
                value={formData.farmerName}
                onChange={handleChange}
                required
                className="w-full rounded-md px-4 py-2 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-pink-700 mb-1">Farmer Email</label>
              <input
                type="farmeremail"
                name="farmerEmail"
                placeholder="Enter Farmer Email"
                value={formData.farmerEmail}
                onChange={handleChange}
                required
                className="w-full rounded-md px-4 py-2 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm transition-all duration-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-blue-700 mb-1">Farmer Phone</label>
              <input
                type="tel"
                name="farmerPhone"
                placeholder="Enter Farmer Phone Number"
                value={formData.farmerPhone}
                onChange={handleChange}
                required
                className="w-full rounded-md px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-yellow-700 mb-1">Farmer Location</label>
              <input
                type="text"
                name="farmerLocation"
                placeholder="Enter Farmer Location"
                value={formData.farmerLocation}
                onChange={handleChange}
                required
                className="w-full rounded-md px-4 py-2 border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all duration-300"
              />
            </div>

            
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300"
              >
                🌿 Submit Farmer Information
              </button>
          </form>

        </div>
      </div>
          {/* Show submitted data */}
          {submittedData && (
            <div className="mt-8 bg-green-100 p-4 rounded-lg shadow-inner text-green-900">
              <h3 className="text-xl font-semibold mb-3">Submitted Farmer Info:</h3>
              <p><strong>Farmer Name:</strong> {submittedData.farmerName}</p>
              <p><strong>Farmer Email:</strong> {submittedData.farmeremail}</p>
              <p><strong>Farmer Phone:</strong> {submittedData.farmerphone}</p>
              <p><strong>Farmer Location:</strong> {submittedData.farmerlocation}</p>
            </div>
          )}
    </div>
  );
};

export default Farm;
