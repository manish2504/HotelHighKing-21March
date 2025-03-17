import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/offers');
        if (!response.ok) throw new Error('Failed to fetch offers');
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setErrorMessage(error.message);
      }
    };

    fetchOffers();
  }, []);

  const handleAddOffer = () => {
    navigate('/admin/add-offer');
  };

  const handleEditOffer = (offerId) => {
    navigate(`/admin/edit-offer/${offerId}`);
  };

  const handleDeleteOffer = async (offerId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/offers/${offerId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setOffers((prevOffers) => prevOffers.filter((offer) => offer._id !== offerId));
        alert('Offer deleted successfully!');
      } else {
        alert('Error deleting offer!');
      }
    } catch (error) {
      console.error('Error deleting offer:', error);
      alert('Error deleting offer!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Special Offers</h2>
      <div className="flex justify-end mb-4">
        <button onClick={handleAddOffer} className="p-2 bg-blue-500 text-white rounded">Add Offer</button>
      </div>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {offers.map((offer) => (
          <div key={offer._id} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p>{offer.description}</p>
            <span>Discount: {offer.discount}%</span>
            <span>Valid until: {offer.validUntil}</span>
            <div className="mt-4">
              <button onClick={() => handleEditOffer(offer._id)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2">
                Edit Offer
              </button>
              <button onClick={() => handleDeleteOffer(offer._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
