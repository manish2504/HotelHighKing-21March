import React, { createContext, useState, useContext } from "react";

// Create Context for Modal
const ModalContext = createContext();

// Modal Provider Component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);

  const openModal = (offersData) => {
    setOffers(offersData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, offers }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the Modal Context
export const useModal = () => useContext(ModalContext);
