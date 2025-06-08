import React from 'react'

const footerHome = () => {
  return (
    <div>

        <footer className="w-full py-2 px-10  bg-gradient-to-t from-green-800 via-75% to-green-700 bg-opacity-30 backdrop-blur-md shadow-inner flex justify-between items-center">
                <span className="text-sm text-white hover:text-yellow-300 font-semibold cursor-pointer">&copy; {new Date().getFullYear()} Nature Connect Creative For Khoyani Chetan, All Rights Reserved.</span>
                <div className="space-x-4">
                    <a href="./profile" className="text-white hover:text-yellow-300 transition">Privacy</a>
                    <a href="./TermsSecurity" className="text-white hover:text-yellow-300 transition">Terms</a>
                </div>
            </footer>
    </div>
  )
}

export default footerHome
