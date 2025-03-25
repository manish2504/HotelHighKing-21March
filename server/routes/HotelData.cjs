const express = require('express');
const Hotel = require('../models/Hotel.cjs'); // Import Hotel model
const router = express.Router();

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find(); // Fetch all hotels
    res.status(200).json(hotels);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ message: 'Error fetching hotels', error: error.message });
  }
});

router.post('/', async (req, res) => {
    try {
      const { title, desc, about, amenities, popularNearbyAttractions, price, longitude, latitude, location, bedrooms, guests, baths, link } = req.body;
  
      // Validate required fields
      if (!title || !desc || !about || !price || !longitude || !latitude) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      const newHotel = new Hotel({
        title,
        desc,
        about,
        amenities: amenities || [],
        popularNearbyAttractions: popularNearbyAttractions || [],
        price,
        longitude,
        latitude,
        location, 
        bedrooms, 
        guests, 
        baths, 
        link
      });
  
      await newHotel.save(); // Save to database
      res.status(201).json(newHotel); // Return the created hotel
    } catch (error) {
      console.error('Error creating hotel:', error);
      res.status(500).json({ message: 'Error creating hotel', error: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params; // Get hotel ID from URL
      const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Ensure validation rules are applied
      });
  
      if (!updatedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
  
      res.json(updatedHotel);
    } catch (error) {
      console.error("Error updating hotel:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedHotel = await Hotel.findByIdAndDelete(id);
  
      if (!deletedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
  
      res.json({ message: "Hotel deleted successfully", deletedHotel });
    } catch (error) {
      console.error("Error deleting hotel:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router;
