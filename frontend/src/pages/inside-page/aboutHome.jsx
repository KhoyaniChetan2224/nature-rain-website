import React from 'react'
import HeaderHome from "../inside-page/headerHome";
import FooterHome from "../inside-page/footerHome";

const aboutHome = () => {
  return (
    <div className='bg-green-100 min-h-screen overflow-hidden'>
        <HeaderHome />
        <div className="max-w-3xl rounded-lg container mx-auto bg-green-50 mt-14 p-6 mb-[7rem] overflow-hidden">
            <h1 className="text-3xl font-bold mb-4 flex items-center text-green-800 underline gap-2">
                <span className="text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                </span>
                About Us
            </h1>
            <p className="text-gray-700 mb-6">
                Welcome to our website! We are passionate about building modern web applications using the MERN stack. Our team is dedicated to delivering high-quality solutions that help our users achieve their goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                    <span className="text-green-500 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <h2 className="font-semibold text-lg">Quality</h2>
                    <p className="text-center text-gray-600">We focus on writing clean, maintainable code and delivering robust features.</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-yellow-500 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </span>
                    <h2 className="font-semibold text-lg">Innovation</h2>
                    <p className="text-center text-gray-600">We embrace new technologies and creative solutions to stay ahead.</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-red-500 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
                        </svg>
                    </span>
                    <h2 className="font-semibold text-lg">Teamwork</h2>
                    <p className="text-center text-gray-600">Collaboration and communication are at the heart of our process.</p>
                </div>
            </div>
        </div>
        <FooterHome />
    </div>
  )
}

export default aboutHome