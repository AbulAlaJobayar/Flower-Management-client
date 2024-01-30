import { FieldValues, useForm } from "react-hook-form";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
type FormData = {
  category: string;
  color: string;
  createdAt: Date;
  fragrance: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
};

const AddProduct = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className=" w-4/5 mx-auto my-auto">
      <div className=" text-center font-semibold  my-4">
        <h1 className="capitalize text-textColor text-2xl">Add your Product</h1>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Name
              </label>
              <input
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
                type="text"
                placeholder="product name"
                required
                {...register("name")}
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-textColor text-base primaryFont mb-2"
              >
                Select Image
              </label>
              <input
                className=" rounded-md border-secondary focus:outline-accent bg-gray-200 text-textColor"
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Price
              </label>
              <input
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
                type="number"
                placeholder="product price"
                {...register("price")}
                required
              />
            </div>

            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Quantity
              </label>
              <input
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
                type="number"
                placeholder="product quantity"
                {...register("quantity")}
                required
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Bloom Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Color
              </label>
              <select
                {...register("color")}
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="multiColor">MultiColor</option>
              </select>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower category
              </label>
              <select
                {...register("category")}
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
              >
                <option value="spring flowers">Spring flowers</option>
                <option value="summer flowers">Summer flowers</option>
                <option value="fall flowers">Fall flowers</option>
                <option value="winter flowers">Winter flowers</option>
              </select>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Size
              </label>
              <select
                {...register("size")}
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
              >
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryFont mb-2"
              >
                Flower Fragrance
              </label>
              <input
                className="border w-full rounded border-primary active:border-secondary focus:outline-secondary px-2 py-1 text-textColor"
                type="number"
                placeholder="product Fragrance"
                {...register("fragrance")}
                required
              />
            </div>
          </div>
          <button type="submit" className="bg-secondary py-2 w-full rounded mt-3 text-base text-textColor font-semibold text-center"> Add product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
