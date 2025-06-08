import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const singup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [profileImage, setProfileImage] = useState(null);
  
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      location,
      phone: phoneNumber,
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, userData);
      if (response.status === 201) {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user)); // Store user data
        navigate('/home');
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
    setUsername('');
    setEmail('');
    setPassword('');
    setLocation('');
    setPhoneNumber('');
    // setProfileImage(null); // Reset profile image state if applicable
  };

  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/fa/44/44/fa44445ae6aa34e0a4ef11d91c9cfbd9.jpg)] flex flex-col min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6 rounded-xl shadow-lg p-4 sm:p-10">
          <div>
            <h2 className="mt-2 text-center text-2xl sm:text-3xl font-extrabold text-green-800">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-green-800">
              Sign up to get started!
            </p>
          </div>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="mt-4 space-y-4"
          >
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-800">
                  User Name
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="username"
                  name="username"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-pink-300 placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 text-sm"
                  placeholder="Your User Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-green-800">
                  Email address
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-green-800">
                  Location
                </label>
                <input
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  autoComplete="location"
                  type="text"
                  id="location"
                  name="location"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-green-300 placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm"
                  placeholder="Your Location"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-green-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  pattern="[0-9]{10}"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-orange-300 placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 text-sm"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-800">
                  Password
                </label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  autoComplete="current-password"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-red-300 placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-t from-green-700 via-75% to-green-900 transition"
            >
              Sign Up
            </button>
            <div className="text-center mt-4">
              <span className="text-sm text-white">Already have an account? </span>
              <Link to='/'><span className="text-blue-500 font-semibold hover:underline">
                Log in
              </span></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default singup