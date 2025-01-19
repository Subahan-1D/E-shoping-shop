import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";

const MainAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stars"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stars");
      return res.data;
    },
  });
  // const { data: chartData = [] } = useQuery({
  //   queryKey: ["order-stats"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/order-stats");
  //     return res.data;
  //   },
  // });


  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Hi, Welcome
          <span className="ml-2 text-yellow-500">
            {user?.displayName ? user.displayName : "Back"}
          </span>
        </h2>
        <p className="text-lg mt-2 text-gray-100">
          We're glad to have you here!
        </p>
      </div>
      <div className="stats shadow mt-4 bg-white rounded-lg p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6">
        <div className="stat bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl mt-3"></FaDollarSign>
          </div>
          <div className="stat-title text-gray-600">Revenue</div>
          <div className="stat-value text-gray-800 text-4xl font-bold">
            ${stats?.revenue}
          </div>
        </div>

        <div className="stat bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <div className="stat-figure text-secondary">
            <FaUserAlt className="text-3xl"></FaUserAlt>
          </div>
          <div className="stat-title text-gray-600">New Users</div>
          <div className="stat-value text-gray-800 text-4xl font-bold">
            {stats?.users}
          </div>
          <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-10 w-10 stroke-current text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-gray-600">New Orders</div>
          <div className="stat-value text-gray-800 text-4xl font-bold">
            {stats?.orders}
          </div>
          <div className="stat-desc text-red-500">↘︎ 90 (14%)</div>
        </div>
        <div className="stat bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-10 w-10 stroke-current text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7l9-4 9 4-9 4-9-4zm0 5v7a2 2 0 002 2h14a2 2 0 002-2v-7m-16 0l9 4 9-4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-gray-600"> New Product</div>
          <div className="stat-value text-gray-800 text-4xl font-bold">
            {stats?.menuItems}
          </div>
          <div className="stat-desc text-blue-500">↘︎ 70 (17%)</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default MainAdmin;
