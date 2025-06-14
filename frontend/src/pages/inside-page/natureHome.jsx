import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderHome from "../inside-page/headerHome";
import audio from "./audio/nature.mp3";

const NatureHome = () => {
  const navigate = useNavigate();

  const handleMediaClick = (media) => {
    navigate("/animal", { state: media });
  };

  const mediaItems = [
    {
      type: "video",
      title: "Forest Stream",
      mediaUrl:
        "https://v1.pinimg.com/videos/iht/expMp4/ea/d4/e3/ead4e31c85e7040d3d52edebd1f491b7_t4.mp4",
      description:
        "The forest deer is a graceful and gentle creature often found roaming dense woodlands.",
    },
    {
      type: "image",
      title: "Nature Deer",
      mediaUrl:
        "https://i.pinimg.com/736x/c7/1d/b3/c71db31eea0cc1a0f5614c73547b30f9.jpg",
      description: "Walk among towering trees and vibrant greenery.",
    },
    {
      type: "video",
      title: "Forest Stream Wolf",
      mediaUrl:
        "https://v1.pinimg.com/videos/mc/720p/5c/89/65/5c896501c851a83c7edf8d90650f1f45.mp4",
      description:
        "Peaceful sounds of running forest water surround the trees.",
    },
    {
      type: "image",
      title: "Forest Powerful Lions",
      mediaUrl:
        "https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg",
      description: "Majestic lions that dominate forest terrains.",
    },
    {
      type: "image",
      title: "Forest Wolf",
      mediaUrl:
        "https://i.pinimg.com/736x/dc/dd/2c/dcdd2c3ad4ef57691799874966317d8b.jpg",
      description: "Gray wolves are intelligent predators of the woods.",
    },
    {
      type: "video",
      title: "Forest Strong Leopard",
      mediaUrl:
        "https://v1.pinimg.com/videos/iht/expMp4/28/97/32/28973271e062a379d8d108c99ae52b3e_720w.mp4",
      description: "A narrow stream cuts through lush woodland.",
    },
    {
      type: "image",
      title: "Forest Elephant",
      mediaUrl:
        "https://i.pinimg.com/736x/6e/0a/85/6e0a8509f16ae5505e0b5b8ad4e602b8.jpg",
      description: "Smaller, elusive cousins of savanna elephants.",
    },
    {
      type: "video",
      title: "Forest Stream 2",
      mediaUrl:
        "https://v1.pinimg.com/videos/mc/720p/53/fe/68/53fe68dca78768b85bb182920dd33515.mp4",
      description:
        "Peaceful sounds of running forest water surround the trees.",
    },
    {
      type: "image",
      title: "Forest Bear",
      mediaUrl:
        "https://i.pinimg.com/736x/bf/9f/ba/bf9fba1fa947b3c0a3f5a4cb4e5922f2.jpg",
      description: "Strong and furry giants of the deep forest.",
    },
  ];

  const [Title, setTitle] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Media, setMedia] = React.useState(null);
  const [animalType, setAnimalType] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [DescriptionText, setDescriptionText] = React.useState("");
  const [Age, setAge] = React.useState("");

  const animalTypes = [
    "Mammal",
    "Bird",
    "Reptile",
    "Amphibian",
    "Fish",
    "Insect",
    "Other",
  ];
  const animalLocations = [
    "Gir Forest",
    "Sundarbans",
    "Kaziranga",
    "Western Ghats",
    "Himalayas",
    "Jim Corbett",
    "Bandipur",
    "Manas National Park",
    "Ranthambore",
    "Satpura",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const mediaData = {
      type: Type,
      title: Title,
      mediaUrl: Media.preview,
      description: DescriptionText,
      location: Location,
      age: Age,
    };
    navigate("/animal", { state: mediaData });
    setTitle("");
    setType("");
    setMedia(null);
    setAnimalType("");
    setLocation("");
    setDescriptionText("");
    setAge("");
  };

  return (
    <div className="min-h-screen w-full bg-green-50 overflow-x-hidden">
      <HeaderHome />

      {/* Audio Player */}
      <div className="fixed bottom-1 right-1 z-50">
        <audio
          src={audio}
          controls
          hidden
          autoPlay
          className="w-64 rounded-lg shadow-lg py-1"
        />
      </div>

      {/* Intro Section */}
      <section className="py-12 px-4 md:px-20">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-green-800 underline mb-6">
          Explore the Beauty of Nature
        </h1>
        <p className="text-green-700 text-base md:text-lg mb-4 text-justify">
          Welcome to a world of natural wonders. Experience the raw beauty and
          tranquility of Earth's most stunning landscapes.
        </p>
      </section>

      {/* Upload Section */}
      <section className="py-2 px-4 md:px-20 bg-green-100">
        <h2 className="text-2xl text-rose-700 font-semibold mb-1 text-center">
          Share Your Nature Moments
        </h2>
        <div className="max-w-full mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border border-fuchsia-600 p-5 rounded-lg bg-green-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-green-700 font-semibold mb-1">
                  Animal Name
                </label>
                <input
                  type="text"
                  value={Title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-green-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="Enter Animal Name"
                />
              </div>
              <div>
                <label className="block text-pink-700 font-semibold mb-1">
                  Animal Type image or video
                </label>
                <select
                  value={Type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full p-2 px-4 py-2 border border-pink-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-pink-600"
                >
                  <option value="">Select type</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div>
                <label className="block text-rose-700 font-semibold mb-1">
                  Type of Animal
                </label>
                <select
                  name="type"
                  value={animalType}
                  onChange={(e) => setAnimalType(e.target.value)}
                  className="w-full px-4 py-2 border border-pink-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-pink-700"
                  required
                >
                  <option value="">Select type</option>
                  {animalTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-yellow-700 font-semibold mb-1">
                  Animal Location
                </label>
                <select
                  name="location"
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select location</option>
                  {animalLocations.map((loc, idx) => (
                    <option key={idx} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Animal Age
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2 border border-rose-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-800"
                  placeholder="Enter animal age in years"
                />
              </div>
              <div>
                <label className="block text-orange-700 font-semibold mb-1">
                  Upload Animal image or video
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setMedia({
                          file: file,
                          preview: reader.result,
                          type: file.type.startsWith("video/")
                            ? "video"
                            : "image",
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  accept={Type === "video" ? "video/*" : "image/*"}
                  required
                  className="w-full px-4 py-2 border border-indigo-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-cyan-700 font-semibold mb-1">
                Animal Description
              </label>
              <textarea
                value={DescriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                required
                className="w-full px-4 py-2 border border-cyan-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-700"
                rows="2"
                placeholder="Enter description"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-200"
              >
                Upload & Continue
              </button>
            </div>

            {Media && (
              <div className="mt-4 border rounded p-2">
                <h3 className="text-green-700 font-semibold mb-1">Preview:</h3>
                {Media.type === "video" ? (
                  <video
                    src={Media.preview}
                    className="w-full h-48 object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={Media.preview}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="px-4 md:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleMediaClick(item)}
            >
              {item.type === "video" ? (
                <video className="w-full h-48 object-cover" autoPlay loop muted>
                  <source src={item.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.mediaUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-700 mb-1">
                  {item.title}
                </h2>
                <p className="text-green-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Section */}
      <section className="bg-green-100 py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Connect with Nature
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-700 text-base md:text-lg">
          <p>Nature provides endless opportunities for adventure...</p>
          <p>Join us in celebrating and preserving nature...</p>
        </div>
      </section>
    </div>
  );
};

export default NatureHome;
