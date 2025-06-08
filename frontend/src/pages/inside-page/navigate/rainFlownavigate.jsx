import React, { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
// import audio from "../audio/nature.mp3";
import axios from "axios";

const Rain = () => {
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    title: state?.title || "",
    type: state?.type || "",
    description: state?.desc || "",
    src: state?.src || "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/rain/rain`, formData);
      setSubmittedData(res.data || formData); // Fallback to local data
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmittedData(formData);
    }
  };

  if (!state) return <div className="p-6 text-red-600">No media data found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 px-4 py-6 sm:px-6 md:px-10">
      {/* Back Button */}
      <div className="mb-5">
        <Link
          to="/rainFlowHome"
          className="text-rose-600 text-3xl hover:text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 p-0 rounded-lg inline-block shadow-md"
        >
          <IoReturnUpBack />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl -mt-6 sm:text-3xl md:text-4xl font-bold mb-6 text-green-700 text-center underline">
        {state.title}
      </h1>

      {/* Audio Player */}
      {/* <div className="fixed bottom-2 right-2 z-50">
        <audio src={audio} controls hidden autoPlay />
      </div> */}

      <div className="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto">
        {/* Media Section */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
            {state.type === "video" ? (
              <video
                src={state.src}
                controls
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

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-100 via-green-50 to-green-100 p-6 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-4">
              ⛈️ Rain Information Form 🌧️
            </h2>

            <div>
              <label className="block text-purple-700 font-semibold mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-purple-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-blue-700 font-semibold mb-1">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-green-600 font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-yellow-700 font-semibold mb-1">Media URL</label>
              <input
                type="text"
                name="src"
                value={formData.src}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300"
            >
              🌿 Submit Rain Info
            </button>
          </form>
        </div>
      </div>

      {/* Submitted Info Display */}
      {submittedData && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto text-gray-800">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">🌧️ Submitted Rain Information:-</h3>
          <p><strong>Title:</strong> {submittedData.title}</p>
          <p><strong>Type:</strong> {submittedData.type}</p>
          <p><strong>Description:</strong> {submittedData.description}</p>
          <p><strong>Media URL:</strong> {submittedData.src}</p>
        </div>
      )}
    </div>
  );
};

export default Rain;


