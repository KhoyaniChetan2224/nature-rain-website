import React from "react";
import HeaderHome from "../inside-page/headerHome";
import FooterHome from "../inside-page/footerHome";

const Home = () => {
  const reasons = [
    {
      icon: "🌿",
      title: "Nature Keeps Us Alive",
      points: [
        "Air: Trees absorb CO₂ and release oxygen—we breathe because of them.",
        "Water: Forests purify water. Wetlands prevent floods. Oceans regulate climate.",
      ],
    },
    {
      icon: "💊",
      title: "Nature Heals Us",
      points: [
        "Many medicines come from plants, fungi, and animals.",
        "Nature time reduces stress, anxiety, and depression.",
        "Green spaces boost mental health, focus, and child growth.",
      ],
    },
    {
      icon: "🌎",
      title: "Nature Protects Our Future",
      points: [
        "Forests, soils, and oceans store carbon and regulate climate.",
        "Ecosystems help us adapt to climate change and disasters.",
      ],
    },
    {
      icon: "💰",
      title: "Nature Supports the Economy",
      points: [
        "Farming, fishing, tourism—all rely on healthy nature.",
        "$44 trillion (50%+ of global GDP) depends on nature.",
      ],
    },
    {
      icon: "🦋",
      title: "Nature Inspires and Connects Us",
      points: [
        "Nature gives beauty, creativity, and spiritual meaning.",
        "It teaches how all life is interconnected.",
      ],
    },
  ];

  const IMAGES = [
    "https://i.pinimg.com/736x/31/06/dc/3106dcdbe3396e62b37f1a3ae806edce.jpg",
    "https://i.pinimg.com/736x/f3/c9/29/f3c929272aeda3f29a5a7277f323633e.jpg",
    "https://i.pinimg.com/736x/ad/e7/34/ade734e9c27fc700ed7b729ba78ce8df.jpg",
    "https://i.pinimg.com/736x/37/5f/6b/375f6b853be84fe3bc84678e71a86ad2.jpg",
    "https://i.pinimg.com/736x/59/94/9f/59949f47d8da22cdade53fedcc370070.jpg",
    "https://i.pinimg.com/736x/a1/bf/06/a1bf06e18fab69fdd593325bd355100d.jpg",
  ];

  const VIDEO = [
    "https://v1.pinimg.com/videos/mc/720p/7e/af/d7/7eafd703b0e487dfc1ac1343805bab85.mp4",
    "https://v1.pinimg.com/videos/iht/720p/ab/94/41/ab94416737cf61005d6a4dd3d402efd9.mp4",
    "https://v1.pinimg.com/videos/iht/720p/b4/1f/04/b41f04ea5e100493b20d64355051e596.mp4",
    "https://v1.pinimg.com/videos/iht/expMp4/ca/dd/bf/caddbf66c198e33dde2398f030699c37_720w.mp4",
    "https://v1.pinimg.com/videos/iht/720p/77/fd/9a/77fd9a0ad62631c4c9f3ca73f74124bb.mp4",
    "https://v1.pinimg.com/videos/iht/720p/ec/cb/f2/eccbf2d5fc52bec35b0a25505ec60fc1.mp4",
  ];

  const [isAtTop, setIsAtTop] = React.useState(true);

  const scrollToPosition = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsAtTop(!isAtTop);
  };

  return (
    <div className="overflow-hidden w-screen">
      {/* Header */}
      <HeaderHome />
      <div className=" min-h-screen flex flex-col">
        
        {/* Up/Down Button */}
        <button
          onClick={scrollToPosition}
          className="fixed bottom-2 right-3 z-50 p-3 hover:shadow-teal-50 rounded-full bg-rose-500 text-white shadow-lg hover:bg-rose-600 transition-all duration-300 hover:scale-110 transform active:scale-95"
        >
          {isAtTop ? <FaChevronDown /> : <FaChevronUp />}
        </button>
        
        {/* Main Content */}
        <main className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/b9/75/05/b975051ce74ad59f2d9bc15fcbfdcb30.jpg)] h-screen flex justify-between flex-col w-full">
          <div className="flex mt-12 flex-col items-center justify-center h-full">
            <img
              src="https://i.pinimg.com/736x/ae/8a/46/ae8a46da61d12fb7afbc244259cbfd7c.jpg"
              alt="Colorful Home"
              className="rounded-xl shadow-lg w-80 h-80 object-cover border-4"
            />

            <h2 className="mt-6 text-3xl font-bold text-white drop-shadow-lg">
              Welcome to Nature
            </h2>
            <p className="mt-2 text-lg text-white bg-black bg-opacity-30 px-4 py-2 rounded-lg">
              Discover inspiration for your dream space!
            </p>
          </div>
        </main>

        <section className="bg-green-50 overflow-hidden h-fit w-screen">
          <div className="font-sans text-gray-800">
            {/* About Section */}
            <section className="py-16 px-6 md:px-20 bg-green-50">
              <div className="min-h-screen bg-green-50 py-10 px-4 md:px-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
                  Why Nature Matters 🌍
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {reasons.map((reason, idx) => (
                    <div
                      key={idx}
                      className="bg-white border-l-4  border-green-800 rounded-2xl shadow-md p-6"
                    >
                      <h2 className="text-2xl font-semibold text-green-700 mb-3">
                        {reason.icon} {reason.title}
                      </h2>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {reason.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Threat Message */}
                  <div className="bg-white border-l-4 border-green-800 text-green-700 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">
                      🚨 Nature Is Under Threat
                    </h2>
                    <p>
                      Deforestation, pollution, climate change, and biodiversity
                      loss are pushing nature—and us—toward crisis. Protecting
                      nature isn’t a luxury. <strong>It’s a necessity.</strong>
                    </p>
                  </div>

                  {/* Final Thought */}
                  <div className="bg-white border-l-4 border-green-800 text-green-700 p-6 rounded-2xl shadow-inner">
                    <h2 className="text-2xl font-semibold mb-3">
                      🌱 Final Thought:
                    </h2>
                    <p>
                      Nature doesn’t need us.{" "}
                      <strong>But we need nature—more than ever.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Photo */}
            <section className="py-0 px-6 md:px-20 h-fit w-screen bg-green-50">
              <h2 className="text-4xl font-bold mb-10 text-center text-green-900">
                Nature Photo's Gallery
              </h2>
              <div className="grid grid-cols-1 -mb-24 min-h-screen sm:grid-cols-2 md:grid-cols-3 gap-6">
                {IMAGES.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Nature ${index + 1}`}
                    className="rounded-xl shadow-md w-full -mt-5 h-60 object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                    loading="lazy"
                  />
                ))}
              </div>
            </section>

            {/* Gallery Video */}
            <section className="py-28 px-6 md:px-20 h-fit w-screen bg-green-50">
              <h2 className="text-4xl font-bold mb-9 text-center text-green-900">
                Nature Video's Gallery
              </h2>
              <div className="grid grid-cols-1 -mb-24 min-h-screen sm:grid-cols-2 md:grid-cols-3 gap-6">
                {VIDEO.map((url, index) => (
                  <video
                    className="rounded-xl shadow-md w-full -mt-5 h-60 object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                    autoPlay
                    alt={`Nature ${index + 1}`}
                    key={index}
                    src={url}
                    type="video/mp4"
                    loop
                    muted
                  >

                  </video>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="py-16 px-6 md:px-20 bg-green-50">
              <div className="grid md:grid-cols-3 gap-10 text-center">
                {[
                  {
                    title: "Breathtaking Views",
                    icon: "🌄",
                    desc: "Explore stunning landscapes, from towering peaks to lush valleys.",
                  },
                  {
                    title: "Wildlife Wonders",
                    icon: "🦋",
                    desc: "Encounter diverse flora and fauna in their natural habitats.",
                  },
                  {
                    title: "Eco Adventures",
                    icon: "🏕️",
                    desc: "Reconnect with the Earth through hiking, camping, and more.",
                  },
                ].map(({ title, icon, desc }) => (
                  <div
                    key={title}
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                  >
                    <div className="text-5xl mb-4">{icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
        {/* Footer */}
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
