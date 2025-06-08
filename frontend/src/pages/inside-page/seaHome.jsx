import React from 'react';
import HeaderHome from "../inside-page/headerHome";
import { useNavigate } from "react-router-dom";

const SeaHome = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate("/sea", { state: item });
  };

  return (
    <div className="min-h-screen w-full bg-green-50">
      <HeaderHome />

      <section className="py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-4xl font-bold text-green-800 underline mb-6">
            Explore the Beauty of Sea
          </h1>
          <p className="text-center text-lg text-green-700 mb-10 max-w-3xl mx-auto">
            Discover the mesmerizing world beneath the waves, where vibrant coral reefs dance with colorful marine life...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://v1.pinimg.com/videos/iht/720p/b9/d4/c4/b9d4c49582b18bb865894105a8e7a3d8.mp4",
                title: "Sea Waves",
                desc: "A mesmerizing view of sea waves gently crashing onto the shore...",
              },
              {
                src: "https://v1.pinimg.com/videos/mc/720p/c0/65/eb/c065eb5308040a43aeb1d98b6ec6b049.mp4",
                title: "Golden Waves",
                desc: "Golden sunlight dances on the gentle sea waves...",
              },
              {
                src: "https://v1.pinimg.com/videos/iht/720p/1e/52/b6/1e52b6424f59272a7c1cad06cd6e39c5.mp4",
                title: "Sunset Ocean",
                desc: "Ocean and sunset meet in perfect harmony...",
              },
              {
                src: "https://v1.pinimg.com/videos/iht/720p/b1/8f/93/b18f934c2187f81a75c9b7cececfe539.mp4",
                title: "Tranquil Coastline",
                desc: "Gentle waves shimmer under golden sunlight...",
              },
              {
                src: "https://v1.pinimg.com/videos/iht/expMp4/60/5c/87/605c879f0cf465d60510ce456aa89016_720w.mp4",
                title: "Dusk on the Sea",
                desc: "The sea glows with the last light of dusk...",
              },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => handleNavigate(item)}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <video className="w-full h-48 object-cover" autoPlay loop muted>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
                  <p className="text-green-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Image Cards - Also Navigable */}
            {[
              {
                img: "https://i.pinimg.com/736x/ec/2c/89/ec2c89ef08b898612602a85a3fc625a8.jpg",
                title: "Majestic Mountains",
                desc: "Golden sunlight dances on gentle sea waves, blending with mountain silhouettes...",
              },
            ].map((item, i) => (
              <div
                key={`img-${i}`}
                onClick={() => handleNavigate({ src: item.img, ...item })}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
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

export default SeaHome;
