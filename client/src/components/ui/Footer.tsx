// src/components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </nav>
        <div className="mb-4 flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 Automated Medicine Dispenser Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
