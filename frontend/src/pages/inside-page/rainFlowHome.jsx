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
