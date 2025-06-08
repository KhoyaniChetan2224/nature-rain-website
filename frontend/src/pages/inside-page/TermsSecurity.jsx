import React from "react";

import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const TermsSecurity = () => {
  return (
    <div>
      <div className="bg-green-100 min-h-screen py-10 px-4 md:px-20">
        <div className="mb-4">
        <Link
          to="/Home"
          className="text-rose-600 text-3xl hover:text-rose-700 font-bold"
        >
          <IoReturnUpBack />
        </Link>
      </div>
        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
          Terms & Security
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
          {/* Terms Section */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Terms of Service
            </h2>
            <p className="text-gray-700">
              By using our Nature Platform, you agree to respect nature, protect
              wildlife, and not misuse any feature. We reserve the right to
              suspend access if our guidelines are violated. All content is
              meant for educational and inspiration purposes.
            </p>
          </section>

          {/* Security Section */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Data Security
            </h2>
            <p className="text-gray-700">
              We use secure protocols like HTTPS and JWT to protect your
              personal information. All user data is encrypted and stored safely
              using MongoDB. We never share your information with third parties.
            </p>
          </section>

          {/* User Responsibility */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              User Responsibility
            </h2>
            <p className="text-gray-700">
              Users are responsible for keeping their login information secure.
              Please report any suspicious activity or unauthorized access to
              our support team immediately.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions regarding our terms or security, feel
              free to contact us at:{" "}
              <span className="text-green-700 font-medium">
                support@natureweb.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsSecurity;
