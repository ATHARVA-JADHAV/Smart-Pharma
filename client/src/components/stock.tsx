// src/pages/Stock.tsx
import React from "react";
import Dashboard from "../components/ui/Dashboard";
import Footer from "../components/ui/Footer";
import DataTableDemo from "../components/ui/input-table";

export default function Stock() {
  return (
    <div>
      <h1 className="font-bold text-5xl ml-24 mt-20">Add Stock</h1>
      <DataTableDemo />
      <Footer />
    </div>
  );
}
