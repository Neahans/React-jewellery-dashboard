import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

function Charts() {

  const data = [
    { month: 'Jan', customers: 40 },
    { month: 'Feb', customers: 65 },
    { month: 'Mar', customers: 50 },
    { month: 'Apr', customers: 80 },
    { month: 'May', customers: 60 },
    { month: 'Jun', customers: 100 }
  ];

  return (
    <div className="chart-box">
      <h3>Monthly Customer Registrations</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="customers" fill="#c69b52" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;