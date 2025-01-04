import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
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
        axiosSecure.delete(`carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          TOTAL ORDER: {cart.length}
        </h2>
        <h2 className="text-2xl font-semibold text-gray-700">
          TOTAL PRICE: ${totalPrice.toFixed(2)}
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md hover:shadow-lg transition-all duration-300">
              Pay Now
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md hover:shadow-lg transition-all duration-300">
            Pay Now
          </button>
        )}
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
                Image
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Name
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Price
              </th>
              <th className="px-4 py-3 border-b text-gray-700 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {cart.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-4 border-b text-gray-600">
                  {index + 1}
                </td>
                <td className="px-4 py-4 border-b">
                  <div className="flex items-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 border-b text-gray-600">
                  {item.name}
                </td>
                <td className="px-4 py-4 border-b text-gray-600">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-4 border-b">
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
