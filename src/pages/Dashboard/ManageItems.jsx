import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };
  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="divider"></div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="min-w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    #
                  </th>
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    Image
                  </th>
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    Product Name
                  </th>
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    Update
                  </th>
                  <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {menu.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4 border-b text-gray-600">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 border-b">
                      <div className="flex items-center">
                        <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-300">
                          <img
                            src={item.image}
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b text-gray-600">
                      {item.name}
                    </td>
                    <td className="px-4 py-4 border-b text-gray-600">
                      ${item.price}
                    </td>
                    <td className="px-4 py-4 border-b">
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="flex items-center gap-2 btn bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-all">
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                    <td className="px-4 py-4 border-b">
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="flex items-center gap-2 btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-all"
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
      </div>
    </div>
  );
};

export default ManageItems;
