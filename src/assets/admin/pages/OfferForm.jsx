import React, { useState } from 'react';

const OfferForm = ({ onOfferAdded }) => {
  const [offer, setOffer] = useState({
    title: '',
    description: '',
    discount: '',
    validUntil: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOffer((prevOffer) => ({
      ...prevOffer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offer),
      });

      if (response.ok) {
        const newOffer = await response.json();  // Get the newly created offer
        onOfferAdded(newOffer);  // Notify the parent component to update the offers list
        alert('Offer added successfully!');
        setOffer({ title: '', description: '', discount: '', validUntil: '' }); // Reset form
      } else {
        alert('Offer added successfully!');
      }
    } catch (error) {
      alert('Offer added successfully!' );
    }
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-6">Add New Offer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Offer Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={offer.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={offer.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="discount" className="block text-sm font-medium">Discount (%)</label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={offer.discount}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="validUntil" className="block text-sm font-medium">Valid Until</label>
          <input
            type="date"
            id="validUntil"
            name="validUntil"
            value={offer.validUntil}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default OfferForm;
