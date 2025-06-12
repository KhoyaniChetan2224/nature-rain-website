import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderHome from "../inside-page/headerHome";

const RainFlowHome = () => {
  const navigate = useNavigate();

  const data = [
    {
      type: "video",
      src: "https://v1.pinimg.com/videos/iht/720p/ec/cb/f2/eccbf2d5fc52bec35b0a25505ec60fc1.mp4",
      title: "Forest Stream",
      desc: "Experience the peaceful sound of flowing water through a sunlit forest.",
    },
    {
      type: "video",
      src: "https://v1.pinimg.com/videos/iht/720p/86/6d/0f/866d0fa541944db4f59ff0d7282830d7.mp4",
      title: "Forest Stream",
      desc: "Experience the peaceful sound of flowing water through a sunlit forest.",
    },
    {
      type: "video",
      src: "https://v1.pinimg.com/videos/iht/720p/13/28/cb/1328cb29a545891bc39e27d23cea0cde.mp4",
      title: "Forest Stream",
      desc: "Experience the peaceful sound of flowing water through a sunlit forest.",
    },
    {
      type: "video",
      src: "https://v1.pinimg.com/videos/iht/720p/d1/43/28/d143284219cf3b287d3215c0e7130d95.mp4",
      title: "Lush Forests",
      desc: "Immerse yourself in the tranquil beauty of rain-soaked lush forests.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/ba/f0/65/baf065affdfad024a1ca3bfbe7dddee2.jpg",
      title: "Rain Sparrow",
      desc: "Rain Sparrow captures the delicate beauty of a sparrow braving the rain.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/57/fc/fc/57fcfcb87257f9d508b4c6dbf2005890.jpg",
      title: "Lush Forests",
      desc: "Immerse yourself in the tranquil beauty of rain-soaked lush forests.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/5d/83/6f/5d836f481fbeef1b92eb1cfbaf0ccadf.jpg",
      title: "Rainstorm",
      desc: "A powerful capture of rainstorms, lightning, and pouring rain.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/da/fc/18/dafc18c6eb4aeb1d62697a1d4bdb211e.jpg",
      title: "Rain Farmer",
      desc: "A serene farm landscape drenched in gentle rain.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/ff/fc/96/fffc9685318a539f5eb27fa716ca70b1.jpg",
      title: "Rain Lightning 🌩⚡",
      desc: "Heavy rain illuminated by lightning—nature’s power on display.",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/89/58/24/89582482b2ab825b1793ab5658fea3be.jpg",
      title: "Rain Farmer",
      desc: "Lush green fields shimmering under the soft rain droplets.",
    },
  ];

  const handleClick = (item) => {
    navigate("/rain", { state: item });
  };

  const [Title, setTitle] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Media, setMedia] = React.useState(null);
  const [DescriptionText, setDescriptionText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = {
      type: Type,
      src: Media.preview,
      title: Title,
      desc: DescriptionText
    };
    navigate("/rain", { state: uploadData });
    
    // Reset form
    setTitle("");
    setType("");
    setMedia(null);
    setDescriptionText("");
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <HeaderHome />
      <section className="py-10 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl text-green-800 font-bold text-center underline mb-6">
            Explore the Beauty of Rain Flow
          </h1>
          <p className="text-green-700 text-base md:text-lg text-center mb-10 max-w-3xl mx-auto">
            Welcome to Rain Flow – where nature meets tranquility. Discover
            breathtaking landscapes and curated visuals of forests, rainstorms,
            and more. Whether you’re an adventurer or nature lover, this is your
            serene escape.
          </p>

          {/* Upload Section */}
      <section className="py-2 px-4 md:px-20 bg-green-100">
        <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">Share Your Rain Flow Moments</h2>
        <div className="max-w-full mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 border border-green-300 p-5 rounded-lg bg-green-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-green-700 mb-2">Title</label>
                <input 
                  type="text"
                  value={Title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-2 border border-green-300 rounded "
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-green-700 mb-2">Media Type</label>
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
            </div>

            <div>
              <label className="block text-green-700 mb-2">Upload Media</label>
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
                        type: file.type.startsWith('video/') ? 'video' : 'image'
                      });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                accept={Type === 'video' ? 'video/*' : 'image/*'}
                required
                className="w-full p-2 border border-green-300 rounded"
              />
            </div>

            <div>
              <label className="block text-green-700 mb-2">Description</label>
              <textarea
                value={DescriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                required
                className="w-full p-2 border border-green-300 rounded"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleClick(item)}
              >
                {item.type === "video" ? (
                  <video
                    className="w-full h-48 object-cover"
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    controls
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-green-700 mb-1 capitalize">
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

export default RainFlowHome;
