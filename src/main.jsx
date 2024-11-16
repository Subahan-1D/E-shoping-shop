import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import toast, { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
