import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Mengimpor elemen-elemen dari recharts untuk membuat grafik batang

// Data aktivitas pengguna per hari dan per rentang waktu (jam)
const userActivityData = [
  { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
  { name: "Tue", "0-4": 15, "4-8": 35, "8-12": 55, "12-16": 75, "16-20": 95, "20-24": 25 },
  { name: "Wed", "0-4": 10, "4-8": 30, "8-12": 50, "12-16": 70, "16-20": 90, "20-24": 20 },
  { name: "Thu", "0-4": 18, "4-8": 38, "8-12": 58, "12-16": 78, "16-20": 98, "20-24": 28 },
  { name: "Fri", "0-4": 22, "4-8": 42, "8-12": 62, "12-16": 82, "16-20": 102, "20-24": 32 },
  { name: "Sat", "0-4": 25, "4-8": 45, "8-12": 65, "12-16": 85, "16-20": 105, "20-24": 35 },
  { name: "Sun", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
];

const UserActivityHeatmap = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
      animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
      transition={{ delay: 0.4 }} // Penundaan animasi selama 0.4 detik
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Users Activity Heatmap</h2>

      <div style={{ width: "100%", height: 300 }}>
        {/* Container responsif untuk grafik */}
        <ResponsiveContainer style={{width: "100%", height: "100%"}}>
          <BarChart data={userActivityData}>
            {/* Grid kartesian untuk grafik */}
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            {/* Sumbu X (Hari dalam seminggu) */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* Sumbu Y (Jumlah pengguna) */}
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip yang muncul saat hover di atas batang */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Latar belakang tooltip
                borderColor: "#4B5563", // Border tooltip
              }}
              itemStyle={{ color: "#E5E7EB" }} // Warna teks item di tooltip
            />
            {/* Legend untuk menampilkan penjelasan warna yang digunakan */}
            <Legend />
            {/* Bar chart untuk setiap rentang waktu */}
            <Bar dataKey="0-4" stackId="a" fill="#6366f1" />
            <Bar dataKey="4-8" stackId="a" fill="#885CF6" />
            <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10B981" />
            <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
            <Bar dataKey="20-24" stackId="a" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
