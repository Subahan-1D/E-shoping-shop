import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          ALL USER: {user.length}
        </h2>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                #
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Name
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Email
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Roll
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {user.map((user, index) => (
              <tr key={user._id}>
                <th className="px-4 py-4 border-b text-gray-600">
                  {index + 1}
                </th>
                <td className="px-4 py-4 border-b text-gray-600">
                  {user.name}
                </td>
                <td className="px-4 py-4 border-b text-gray-600">
                  {user.email}
                </td>
                <td className="px-4 py-4 border-b">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-black transition-all"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td className="px-4 py-4 border-b">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-all"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
