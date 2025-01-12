import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Total Payment History: {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border text-left">Total Price</th>
              <th className="px-4 py-2 border text-left">Transaction ID</th>
              <th className="px-4 py-2 border text-left">Status</th>
              <th className="px-4 py-2 border text-left">Payment Date</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="text-gray-700">
            {payments.map((payment, index) => (
              <tr
                key={payment.id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">${payment.price}</td>
                <td className="px-4 py-2 border">{payment.transitionId}</td>
                <td
                  className={`px-4 py-2 border ${
                    payment.status === "Success"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="px-4 py-2 border">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
