import React, { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import axios from 'axios';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);
  const [newHotel, setNewHotel] = useState({
    title: "",
    desc: "",
    about: "",
    location: "",
    bedrooms: "",
    guests: "",
    baths: "",
    amenities: "",
    popularNearbyAttractions: "",
    price: "",
    longitude: "",
    latitude: "",
    link: "",
  });

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hotels");
        setHotels(response.data);
      } catch (err) {
        console.error("Failed to fetch Hotels", err);
      }
    };
    fetchHotels();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingHotel) {
        await axios.put(`http://localhost:5000/api/hotels/${editingHotel._id}`, newHotel);
        setHotels(hotels.map(hotel => hotel._id === editingHotel._id ? { ...hotel, ...newHotel } : hotel));
      } else {
        const response = await axios.post("http://localhost:5000/api/hotels", newHotel);
        setHotels([...hotels, response.data]);
      }
      closeModal();
    } catch (err) {
      console.error("Failed to save hotel", err);
    }
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
    setNewHotel(hotel);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/hotels/${id}`);
      setHotels(hotels.filter(hotel => hotel._id !== id));
    } catch (err) {
      console.error("Failed to delete hotel", err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingHotel(null);
    setNewHotel({
      title: "",
      desc: "",
      about: "",
      location: "",
      bedrooms: "",
      guests: "",
      baths: "",
      amenities: "",
      popularNearbyAttractions: "",
      price: "",
      longitude: "",
      latitude: "",
      link: "",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Hotel Inventory</h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>Add Hotel</span>
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hotel Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel._id}>
              <td className="px-6 py-4">{hotel.title}</td>
              <td className="px-6 py-4">{hotel.location}</td>
              <td className="px-6 py-4">${hotel.price}</td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => handleEdit(hotel)} className="text-blue-600 hover:text-blue-900 mr-3">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDelete(hotel._id)} className="text-red-600 hover:text-red-900">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{editingHotel ? "Edit Hotel" : "Add New Hotel"}</h3>
              <button onClick={closeModal}><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(newHotel).map((key) => (
                <input key={key} type="text" name={key} placeholder={key} value={newHotel[key]} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              ))}
              <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">{editingHotel ? "Update" : "Add"} Hotel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;
