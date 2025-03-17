import React, { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import axios from 'axios';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHotel, setNewHotel] = useState({
    title: "",
    desc: "",
    about: "",
    amenities: "",
    popularNearbyAttractions: "",
    price: "",
    longitude: "",
    latitude: "",
    location: "",
    bedrooms: "",
    guests: "",
    baths: "",
    link: "",
    img: "",
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
    setNewHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/hotels", {
        ...newHotel,
        amenities: newHotel.amenities.split(",").map((a) => a.trim()),
        popularNearbyAttractions: newHotel.popularNearbyAttractions.split(",").map((a) => a.trim()),
      });
      setHotels([...hotels, response.data]);
      setIsModalOpen(false);
      setNewHotel({
        title: "",
        desc: "",
        about: "",
        amenities: "",
        popularNearbyAttractions: "",
        price: "",
        longitude: "",
        latitude: "",
        location: "",
        bedrooms: "",
        guests: "",
        baths: "",
        link: "",
        img: "",
      });
    } catch (err) {
      console.error("Failed to add hotel", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Hotel Inventory</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add Hotel</span>
        </button>
      </div>

      {/* Hotel Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hotel Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotels.map((hotel) => (
              <tr key={hotel._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{hotel.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{hotel.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${hotel.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Hotel Modal with Scrollable Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
              <h3 className="text-xl font-semibold">Add New Hotel</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" placeholder="Hotel Name" value={newHotel.title} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="desc" placeholder="Description" value={newHotel.desc} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="about" placeholder="About" value={newHotel.about} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="location" placeholder="Location" value={newHotel.location} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="bedrooms" placeholder="Bedrooms" value={newHotel.bedrooms} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="guests" placeholder="Guests" value={newHotel.guests} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="baths" placeholder="Baths" value={newHotel.baths} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="amenities" placeholder="Amenities (comma-separated)" value={newHotel.amenities} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="popularNearbyAttractions" placeholder="Nearby Attractions (comma-separated)" value={newHotel.popularNearbyAttractions} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="price" placeholder="Price" value={newHotel.price} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="longitude" placeholder="Longitude" value={newHotel.longitude} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="number" name="latitude" placeholder="Latitude" value={newHotel.latitude} onChange={handleInputChange} className="w-full border p-2 rounded" required />
              <input type="text" name="link" placeholder="Route link" value={newHotel.link} onChange={handleInputChange} className="w-full border p-2 rounded" required />
            

              <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">Add Hotel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;
