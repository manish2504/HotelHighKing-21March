import React, { useState } from 'react';
import { MessageSquare, CheckCircle, XCircle } from 'lucide-react';

const initialQueries = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    subject: 'Room Availability Question',
    message: 'Hi, I was wondering if you have any ocean view rooms available for next week?',
    status: 'pending',
    date: '2024-03-15',
  },
  {
    id: '2',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    subject: 'Special Dietary Requirements',
    message: 'I have some dietary restrictions and would like to know about your menu options.',
    status: 'resolved',
    date: '2024-03-14',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    subject: 'Late Check-out Request',
    message: 'Would it be possible to arrange a late check-out for my stay next month?',
    status: 'pending',
    date: '2024-03-13',
  },
];

const Queries = () => {
  const [queries, setQueries] = useState(initialQueries);
  const [activeTab, setActiveTab] = useState('pending');

  const filteredQueries = queries.filter(query => query.status === activeTab);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Customer Queries</h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'pending'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab('resolved')}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'resolved'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Resolved
        </button>
      </div>

      <div className="space-y-4">
        {filteredQueries.map((query) => (
          <div key={query.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{query.subject}</h3>
                <p className="text-sm text-gray-500">From: {query.name} ({query.email})</p>
              </div>
              <span className="text-sm text-gray-500">{query.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{query.message}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MessageSquare size={16} />
                <span>Query ID: {query.id}</span>
              </div>
              <div className="flex space-x-2">
                {query.status === 'pending' && (
                  <>
                    <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                      <CheckCircle size={16} />
                      <span>Mark as Resolved</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                      <XCircle size={16} />
                      <span>Dismiss</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;