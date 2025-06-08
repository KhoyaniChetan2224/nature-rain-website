import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(user)); // Store user data
        navigate("/Home");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    setUsername("");
    setPassword("");
  };


  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/fa/44/44/fa44445ae6aa34e0a4ef11d91c9cfbd9.jpg)] h-screen flex flex-col w-full min-h-screen  items-center justify-center">
        <div className=" rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Login to Your Account</h2>
          <form
            className="space-y-5"
            onSubmit = { (e) => 
              submitHandler(e)
            }>
            <div>
              <label className="block text-green-800 font-semibold mb-2" htmlFor="username">
                username
              </label>
              <input
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                type="username"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-green-800 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="group relative mt-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-t from-green-700 via-75% to-green-900 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-white">
            Don't have an account?{' '}
            <a href="signup" className="text-blue-500 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default login
