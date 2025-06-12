import React from 'react'
import HeaderHome from "../inside-page/headerHome";
import FooterHome from "../inside-page/footerHome";
import { IoAccessibility } from "react-icons/io5";

const AboutHome = () => {
  return (
    <div className="bg-green-100 min-h-screen overflow-hidden">
      <HeaderHome />
      <div className="container mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-green-300 via-lime-100 to-rose-300 rounded-lg shadow-md p-6 sm:p-8 lg:p-10 mb-28">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 flex justify-center items-center text-green-800 underline gap-2">
            <span className="text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </span>
            About Us
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 text-justify">
            Welcome to our nature sanctuary, where lush forests whisper ancient secrets and pristine hiking trails beckon adventurers. Experience the soothing rhythm of gentle rain falling through emerald canopies, creating a symphony of natural sounds. Watch in awe as golden sunsets paint the sky in vibrant hues, casting long shadows across peaceful meadows. Our coastal areas offer breathtaking views of the endless sea, where azure waves dance endlessly against sandy shores. Join us in celebrating and preserving these natural wonders for generations to come.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                iconColor: "text-green-500",
                title: "Quality",
                description: "We focus on writing clean, maintainable code and delivering robust features.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )
              },
              {
                iconColor: "text-yellow-500",
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to stay ahead.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                iconColor: "text-red-500",
                title: "Teamwork",
                description: "Collaboration and communication are at the heart of our process.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
                  </svg>
                )
              },
              {
                iconColor: "text-purple-500",
                title: "Sustainability",
                description: "We are committed to eco-friendly practices and sustainable development.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                )
              },
              {
                iconColor: "text-blue-500",
                title: "Community",
                description: "We value our users and strive to build a supportive community.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                iconColor: "text-teal-500 text-3xl",
                title: "Accessibility",
                description: "We aim to make our applications accessible to everyone.",
                icon: <IoAccessibility />
              }
            ].map((item, index) => (
              <div className="flex flex-col items-center text-center" key={index}>
                <span className={`${item.iconColor} mb-2`}>{item.icon}</span>
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default AboutHome;
