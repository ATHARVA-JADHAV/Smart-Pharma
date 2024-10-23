// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/ui/Dashboard";
import Footer from "../components/ui/Footer";
import DataTableDemo from "./ui/input-table";

export default function Home() {
  return (
    <div>
      <Dashboard />

      <Link to="/stock">
        <h1 className="font-bold text-5xl ml-24 mt-20">Add Stock</h1>

        <button className="mt-4 ml-24 mb-20 px-4 py-2 bg-blue-500 text-white rounded">
          Add Stock
        </button>
      </Link>
      <Footer />
    </div>
  );
}
