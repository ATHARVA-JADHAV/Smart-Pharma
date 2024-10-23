import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="  border rounded-lg shadow-lg bg-white w-full  p-5 h-20 mt-6 mx-auto flex flex-col md:flex-row items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/src/assets/logo.png" // Replace with your logo image path
          alt="Logo"
          className="h-10" // Adjust the height as needed
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex text-sm justify-center">
        <ul
          className={`flex flex-col md:flex-row gap-7 items-center ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a href="https://example.com" className="text-decoration: underline;">
            Home
          </a>
          <a href="https://example.com" className="text-decoration: underline;">
            Dashboard
          </a>
          <a href="https://example.com" className="text-decoration: underline;">
            FAQ
          </a>
          <a href="https://example.com" className="text-decoration: underline;">
            Contacts
          </a>
        </ul>
      </div>

      <div className="flex flex-row gap-4 items-center text-#262D3E">
        <ul>demo@gmail.com</ul>
        <img src="/src/assets/cart.fill.png" />
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-2xl ml-auto"
        onClick={() => setMenuOpen(!isMenuOpen)}
      ></button>
    </div>
  );
}

export default Navbar;
