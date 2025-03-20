// src/assets/admin/Admin.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Offers from "./pages/Offers";
import EditOffer from "./pages/EditOffer";
import OfferForm from "./pages/OfferForm";
import Analytics from "./pages/Analytics";
import Queries from "./pages/Queries";
import Blogs from "./pages/Blogs";  // Correctly import the Blogs component
import EditBlog from './pages/EditBlog';  // Edit Blog component
import BlogForm from './pages/BlogForm';  // Add Blog component
import Settings from "./pages/Settings";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";

function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {(localStorage.getItem("authToken"))?
      <Sidebar />:null}
      <div className="flex-1">
      {(localStorage.getItem("authToken"))?
        <Header />:null}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/add-offer" element={<OfferForm />} />
            <Route path="/edit-offer/:id" element={<EditOffer />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
