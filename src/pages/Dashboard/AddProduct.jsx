import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaShoppingCart } from "react-icons/fa";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-6 md:p-12 border bg-slate-100">
      <SectionTitle
        heading="Add Product Item"
        subHeading="New Collection"
      ></SectionTitle>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Product Name *</span>
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Selection */}
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">Category *</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            {/* Price Input */}
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">Price *</span>
              </label>
              <input
                type="number"
                placeholder="Enter price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text font-semibold">
                Product Quality *
              </span>
            </label>
            <textarea
              {...register("quality", { required: true })}
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Enter product quality"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text font-semibold">Upload Image *</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full md:w-auto mt-6 flex items-center justify-center text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500"
          >
            Add Product Item <FaShoppingCart className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
