import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-primary">
            SkillSwap
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            SkillSwap is a local skill exchange platform where people learn,
            teach, and grow together by sharing real-world skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">Popular Skills</a></li>
            <li><a className="link link-hover">My Profile</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a className="link link-hover">Help Center</a></li>
            <li><a className="link link-hover">Privacy Policy</a></li>
            <li><a className="link link-hover">Terms & Conditions</a></li>
            <li><a className="link link-hover">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@skillswap.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +880 1234 567 890
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a className="btn btn-circle btn-sm hover:bg-primary hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="btn btn-circle btn-sm hover:bg-primary hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="btn btn-circle btn-sm hover:bg-primary hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} SkillSwap. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Privacy Policy • Terms & Conditions
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
