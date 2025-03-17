import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HotelHighwayKingCareers = () => {
  // Sample data (this would come from MongoDB in a real application)
  const [jobs, setJobs] = useState([
    {
      title: "Front Desk Manager",
      location: "New York City, NY",
      department: "Front Office",
      experience: "3+ years",
      jobType: "Full-time",
      description: "We are looking for an experienced Front Desk Manager to oversee our reception operations and ensure exceptional guest service at our luxury hotel."
    },
    {
      title: "Executive Chef",
      location: "Los Angeles, CA",
      department: "Food & Beverage",
      experience: "5+ years",
      jobType: "Full-time",
      description: "Join our team as an Executive Chef and create extraordinary culinary experiences that delight our guests with innovative and exquisite dishes."
    },
    {
      title: "Housekeeping Supervisor",
      location: "Chicago, IL",
      department: "Housekeeping",
      experience: "2+ years",
      jobType: "Full-time",
      description: "We're seeking a detail-oriented Housekeeping Supervisor to ensure our rooms and public areas are maintained to the highest standards of cleanliness."
    },
    {
      title: "Bartender",
      location: "Miami, FL",
      department: "Food & Beverage",
      experience: "1+ years",
      jobType: "Part-time",
      description: "Create amazing cocktails and provide exceptional service to our guests as a Bartender at our vibrant hotel bar."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'All' || job.jobType === filterType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Careers at Hotel Highway King</h1>
          <p className="text-xl opacity-90">Join our team and be part of an extraordinary hospitality experience</p>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for jobs by title, department, or location"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Positions</h2>
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-lg text-gray-600">No jobs match your search criteria. Please try a different search.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.jobType === 'Full-time' ? 'bg-red-100 text-red-800' :
                      job.jobType === 'Part-time' ? 'bg-yellow-100 text-yellow-800' :
                      job.jobType === 'Contract' ? 'bg-amber-100 text-amber-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {job.jobType}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="font-medium text-gray-700 w-24">Location:</span>
                      <span className="text-gray-600">{job.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="font-medium text-gray-700 w-24">Department:</span>
                      <span className="text-gray-600">{job.department}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Experience:</span>
                      <span className="text-gray-600">{job.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <button className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 shadow-md">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelHighwayKingCareers;