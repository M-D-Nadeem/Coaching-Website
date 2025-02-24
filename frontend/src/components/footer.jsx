import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importing Icons

const Footer = () => {
  const googleMapsURL = "https://www.google.com/maps/place/25.2677,82.9909";
  const googleMapsImageURL = `https://maps.googleapis.com/maps/api/staticmap?center=25.2677,82.9909&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C25.2677,82.9909&key=YOUR_GOOGLE_MAPS_API_KEY`;

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Vikas Gurukulam</h2>
            <p className="text-gray-400">
              Vikas Gurukulam, Naipura Kalan Dafi Bypass, Varanasi-221011, Uttar Pradesh, India.
            </p>
            {/* Google Maps Link */}
            <a 
              href={googleMapsURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-white mt-2 inline-block"
            >
              View on Google Maps
            </a>
            {/* Google Maps Image */}
            <a href={googleMapsURL} target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/map.jpg" 
                alt="Google Maps Location" 
                style={{ width: "150px", height: "100px" }} 
                className="mt-3 w-full rounded-lg shadow-md hover:opacity-80 transition"
              />
            </a>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">vikasgurukulam0702@gmail.com</p>
            <p className="text-gray-400">+91-7905532763</p>
            <p className="text-gray-400">+91-9415982239</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-white">Admin Login</a></li>
              <li><a href="#" className="hover:text-white">Online Fee Pay</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.instagram.com/vikas_gurukulam?igsh=dmFjYmtmcmpjZzg4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebookF />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; 2025 Vikas Gurukulam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
