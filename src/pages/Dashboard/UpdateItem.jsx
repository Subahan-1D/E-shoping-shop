import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, category, price, quality, size, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const productItem = {
        name: data.name,
        category: data.category,
        size: data.size,
        quality: data.quality,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const productResponse = await axiosSecure.patch(
        `/menu/${_id}`,
        productItem
      );
      console.log(productResponse.data);
      if (productResponse.data.modifiedCount > 0) {
        //show toast popup
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name}  update by product`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    console.log("with imagebbb url", res.data);
  };
  return (
    <div className="p-6 md:p-12 border bg-slate-100">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-semibold">Product Name *</span>
            </label>
            <input
              type="text"
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
                placeholder="Enter price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex gap-6">
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Quality *
                </span>
              </label>
              <input
                type="text"
                defaultValue={quality}
                placeholder="Enter product quality"
                {...register("quality", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-semibold">Product size*</span>
              </label>
              <input
                type="text"
                defaultValue={size}
                placeholder="Enter product size"
                {...register("size", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
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
            Update Product Item <FaShoppingCart className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;