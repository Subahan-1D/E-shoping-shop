import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-4xl mt-40">
        Loading...
        <p className="text-red-600">
          <button><Link to='/'>Back To...</Link></button>
        </p>
      </h3>
    </div>
  );
};

export default Error;
