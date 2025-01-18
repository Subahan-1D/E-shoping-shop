import React from "react";
import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Hi, Welcome
        <span className="ml-2 text-yellow-500">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
      <p className="text-lg mt-2 text-gray-100">We're glad to have you here!</p>
    </div>
  );
};

export default UserHome;
