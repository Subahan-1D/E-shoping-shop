import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_Pk);
const Payment = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg border border-gray-200 sm:p-8 md:p-10 lg:p-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl md:text-4xl mb-8">
        Secure Payment
      </h2>
      <Elements stripe={stripePromise}>
        <div className="">
          <CheckoutForm />
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
