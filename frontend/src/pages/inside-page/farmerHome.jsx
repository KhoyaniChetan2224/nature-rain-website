import React from "react";
import HeaderHome from "../inside-page/headerHome";
import { useNavigate } from "react-router-dom";

const FarmerHome = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate("/farm", { state: item });
  };

  const [FarmerName, setFarmerName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Media, setMedia] = React.useState(null);
  const [Location, setLocation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = {
      farmerName: FarmerName,
      email: Email,
      phoneNumber: PhoneNumber,
      type: Type,
      media: Media,
      location: Location,
    };

    navigate("/farm", { state: uploadData });
    // Reset form
    setFarmerName("");
    setEmail("");
    setPhoneNumber("");
    setType("");
    setMedia(null);
    setLocation("");

    alert("Farmer information submitted successfully...!");
  };

  return (
    <div className="bg-green-50 min-h-screen w-full overflow-x-hidden">
      <HeaderHome />

      <section className="py-10 px-4 sm:px-6 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl font-bold text-green-800 underline mb-8">
            Explore the Beauty of Farmer
          </h1>

          <p className="text-base sm:text-lg text-green-700 mb-10 text-center max-w-3xl mx-auto">
            Welcome to our farming community! We're dedicated to sustainable
            agriculture, supporting local farmers, and promoting environmentally
            friendly practices. Discover innovations, connect with others, and
            grow your farm.
          </p>

          {/* Upload Section */}
          <section className="py-2 px-4 md:px-20 bg-green-100 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">
              Farmer Information
            </h2>
            <div className="max-w-full mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4 border border-green-300 p-5 rounded-lg bg-green-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-700 mb-2">
                      Farmer Name
                    </label>
                    <input
                      type="text"
                      required
                      value={FarmerName}
                      onChange={(e) => setFarmerName(e.target.value)}
                      className="w-full p-2 border border-green-300 rounded"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-green-300 rounded"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full p-2 border border-green-300 rounded"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-green-700 mb-2">
                      Media Type
                    </label>
                    <select
                      value={Type}
                      onChange={(e) => setType(e.target.value)}
                      required
                      className="w-full p-2 border border-green-300 rounded"
                    >
                      <option value="">Select type</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-green-700 mb-2">
                      Upload Media
                    </label>
                    <input
                      type="file"
                      value={null}
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
                      className="w-full p-2 border border-green-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-green-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      value={Location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full p-2 border border-green-300 rounded"
                      placeholder="Enter your location"
                    />
                  </div>
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
                    <h3 className="text-green-700 mb-2">Preview:</h3>
                    {Media.type === 'video' ? (
                      <video src={Media.preview} className="w-full h-48 object-cover" controls />
                    ) : (
                      <img src={Media.preview} alt="Preview" className="w-full h-48 object-cover" />
                    )}
                  </div>
                )}
              </form>
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/iht/720p/03/f4/43/03f443c1a21a9301707cbe5845b12a78.mp4",
                title: "Green Harvest Fields",
                desc: "Witness the bounty of nature through vast green farms.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/mc/720p/e7/fa/e8/e7fae82e6028efbcf05ab7693252af82.mp4",
                title: "Farm",
                desc: "A farm is a piece of land used to grow crops or raise animals. It provides food, raw materials, and supports rural life with sustainable practices and hard work.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/mc/720p/12/85/17/128517a3cbfefedeb134d2525bab8746.mp4",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "image",
                src: "https://i.pinimg.com/736x/e0/45/08/e045080ee6ba339cf22e999a787c0592.jpg",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/iht/720p/6f/17/cc/6f17cc64ed22167fafe602ef9b3d4c25.mp4",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/iht/expMp4/65/d1/2e/65d12e00c543ed958a93b98684667125_720w.mp4",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/mc/720p/5d/d4/87/5dd487d891095dd11590b1ee7a8d0eef.mp4",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/mc/720p/35/22/f8/3522f875a008924d2f809a5cf7707948.mp4",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "video",
                src: "https://v1.pinimg.com/videos/iht/720p/16/5f/35/165f35fc92253c363e85935d6da36ae8.mp4",
                title: "Village",
                desc: "A village is a small settlement typically found in rural areas, surrounded by nature, fields, and forests. It is known for its peaceful environment, close-knit community, and traditional way of life.",
              },
              {
                type: "image",
                src: "https://i.pinimg.com/736x/5d/fa/a9/5dfaa9a3b6b4408dfde98691b1fe3609.jpg",
                title: "Lush Forests",
                desc: "Walk among towering trees and vibrant greenery, breathing in the fresh forest air.",
              },
              {
                type: "image",
                src: "https://i.pinimg.com/736x/e0/45/08/e045080ee6ba339cf22e999a787c0592.jpg",
                title: "Majestic Mountains",
                desc: "Experience the awe of towering peaks and breathtaking vistas.",
              },
              {
                type: "image",
                src: "https://i.pinimg.com/736x/ec/80/53/ec80537417e275f7daa8e3a6713c64aa.jpg",
                title: "Serene Oceans",
                desc: "Relax by the calming waves and endless horizons of the sea.",
              },
              // Add more items here as needed...
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
                onClick={() => handleNavigate(item)}
              >
                {item.type === "video" ? (
                  <video
                    className="w-full h-48 object-cover"
                    autoPlay
                    loop
                    muted={
                      i === 0 ||
                      i === 1 ||
                      i === 2 ||
                      i === 3 ||
                      i === 4 ||
                      i === 5 ||
                      i === 6 ||
                      i === 7 ||
                      i === 8 ||
                      i === 9 ||
                      i === 10 ||
                      i === 11 ||
                      i === 12
                    }
                    controls={
                      !(
                        i === 1 ||
                        i === 2 ||
                        i === 3 ||
                        i === 4 ||
                        i === 5 ||
                        i === 6 ||
                        i === 8 ||
                        i === 9 ||
                        i === 10 ||
                        i === 11 ||
                        i === 12
                      )
                    }
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-green-700 mb-1">
                    {item.title}
                  </h2>
                  <p className="text-green-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerHome;
