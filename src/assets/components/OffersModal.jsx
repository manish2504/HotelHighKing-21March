// src/assets/components/OffersModal.jsx
import React from "react";
import { useModal } from "../contexts/ModalContext"; // Corrected import path

const OffersModal = () => {
  const { isModalOpen, closeModal, offers } = useModal();

  if (!isModalOpen) return null; // If modal is closed, return nothing

  return (
    <div className="fixed inset-0 backdrop-blur-lg z-50 flex justify-center items-center transition-all">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Our Exclusive Offers
        </h2>

        {/* Loop through the offers */}
        <ul className="space-y-6">
          {offers.map((offer) => (
            <li
              key={offer.id}
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold">{offer.title}</h3>
              <p className="text-lg mt-2">{offer.description}</p>
              <div className="flex justify-between mt-4 text-sm">
                <span className="text-gray-100 font-medium">Discount: {offer.discount}%</span>
                <span className="text-gray-100 font-medium">Valid Until: {offer.validUntil}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-6">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersModal;
