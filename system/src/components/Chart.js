import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66530fe0813d78e6d6d71125.mockapi.io/api/dashboard"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for chart
  const totalSold = data.reduce((acc, item) => acc + item.price, 0);
  const mostProfitable = data.reduce(
    (prev, current) => (prev.profit > current.profit ? prev : current),
    {}
  );

  return (
    <div>
      <h2>Total Sold: ${totalSold}</h2>
      <h2>
        Most Profitable Product: {mostProfitable.name} (${mostProfitable.profit}
        )
      </h2>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Chart;
