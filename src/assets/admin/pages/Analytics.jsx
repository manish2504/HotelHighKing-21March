import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '2024-01', bookings: 65, revenue: 19500 },
  { date: '2024-02', bookings: 59, revenue: 17700 },
  { date: '2024-03', bookings: 80, revenue: 24000 },
  { date: '2024-04', bookings: 81, revenue: 24300 },
  { date: '2024-05', bookings: 56, revenue: 16800 },
  { date: '2024-06', bookings: 95, revenue: 28500 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Revenue Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  fill="#D1FAE5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Popular Room Types</h3>
          <div className="space-y-4">
            {[
              { type: 'Deluxe Suite', bookings: 45, percentage: 35 },
              { type: 'Standard Room', bookings: 38, percentage: 30 },
              { type: 'Executive Suite', bookings: 25, percentage: 20 },
            ].map((room) => (
              <div key={room.type}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{room.type}</span>
                  <span>{room.bookings} bookings</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${room.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Booking Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'Direct', bookings: 52, percentage: 40 },
              { source: 'OTA', bookings: 39, percentage: 30 },
              { source: 'Travel Agents', bookings: 26, percentage: 20 },
            ].map((source) => (
              <div key={source.source}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{source.source}</span>
                  <span>{source.bookings} bookings</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <div className="space-y-4">
            {[
              { rating: '5 Stars', count: 156, percentage: 65 },
              { rating: '4 Stars', count: 89, percentage: 25 },
              { rating: '3 Stars', count: 34, percentage: 10 },
            ].map((rating) => (
              <div key={rating.rating}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{rating.rating}</span>
                  <span>{rating.count} reviews</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;