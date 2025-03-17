import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditOffer = () => {
  const [offer, setOffer] = useState({ title: '', description: '', discount: '', validUntil: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/offers/${id}`);
        if (!response.ok) throw new Error('Offer not found');
        const data = await response.json();
        setOffer(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchOffer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/offers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offer),
      });

      if (response.ok) {
        alert('Offer updated successfully!');
        navigate('/admin/offers');
      } else {
        alert('Error updating offer!');
      }
    } catch (error) {
      alert('Error occurred while updating the offer!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Edit Offer</h2>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Offer Title</label>
          <input type="text" id="title" name="title" value={offer.title} onChange={handleInputChange} className="mt-1 p-2 border rounded w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea id="description" name="description" value={offer.description} onChange={handleInputChange} className="mt-1 p-2 border rounded w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="discount" className="block text-sm font-medium">Discount (%)</label>
          <input type="number" id="discount" name="discount" value={offer.discount} onChange={handleInputChange} className="mt-1 p-2 border rounded w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="validUntil" className="block text-sm font-medium">Valid Until</label>
          <input type="date" id="validUntil" name="validUntil" value={offer.validUntil} onChange={handleInputChange} className="mt-1 p-2 border rounded w-full" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Update Offer</button>
      </form>
    </div>
  );
};

export default EditOffer;
