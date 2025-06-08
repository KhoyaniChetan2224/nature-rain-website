import React, { useState, useEffect } from "react";
import HeaderHome from "../inside-page/headerHome";
import FooterHome from "../inside-page/footerHome";
import axios from "axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    phoneNumber: "",
  });
  const [profileImage, setProfileImage] = useState(
    "https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg"
  );
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // First try to get data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setFormData({
        username: userData.username || "",
        email: userData.email || "",
        location: userData.location || "",
        phoneNumber: userData.phone || "",
      });
    }

    // Then fetch latest data from server
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { username, email, location, phone } = response.data.user;
        setFormData({
          username,
          email,
          location,
          phoneNumber: phone,
        });
        // Update localStorage with latest data
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      } catch (error) {
        console.error("Error fetching profile:", error);
        setMessage("Failed to load profile data");
      }
    };

    if (token) fetchUserData();
  }, [token]);

  useEffect(() => {
    const storedImage =
      localStorage.getItem("profileImage") ||
      JSON.parse(localStorage.getItem("userData"))?.profileImage ||
      "https://i.pinimg.com/736x/61/95/ff/6195ffcadbdb8bf6282645692817de64.jpg";
    setProfileImage(storedImage);
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage("File size too large. Maximum 5MB allowed.");
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setMessage("Invalid file type. Only JPG, PNG and GIF allowed.");
        return;
      }

      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // Update header preview immediately
        localStorage.setItem('tempProfileImage', reader.result);
        window.dispatchEvent(new Event('profileImageUpdate'));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formDataToSend = new FormData();
      
      if (imageFile) {
        formDataToSend.append('profileImage', imageFile);
      }
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.user.profileImage) {
        localStorage.setItem('profileImage', response.data.user.profileImage);
        localStorage.removeItem('tempProfileImage');
        window.dispatchEvent(new Event('profileImageUpdate'));
      }

      setMessage("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-100 min-h-screen">
      <HeaderHome />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="shadow-lg rounded-lg p-6 bg-green-50">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-800 underline">Your Profile</h2>

          {message && (
            <p className="text-center text-sm mb-4 text-red-600">{message}</p>
          )}

          <div className="flex flex-col md:flex-row gap-8">
            {/* Info Section */}
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Username:</span>{" "}
                {formData.username || "Not set"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span>{" "}
                {formData.email || "Not set"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Location:</span>{" "}
                {formData.location || "Not set"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">phoneNumber:</span>{" "}
                {formData.phoneNumber || "Not set"}
              </p>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border shadow"
                  />
                  <label className="absolute bottom-2 right-2 bg-green-800 p-2 rounded-full cursor-pointer hover:bg-green-700">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </label>
                </div>

                <form
                  className="w-full space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    id="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="phoneNumber Number"
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition"
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHome />
    </div>
  );
};

export default Profile;
