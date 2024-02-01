import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { imageHosting } from "../../utils/imageHosting";
import { useAddProductMutation } from "../../redux/fetchurs/addProductApi";
import { toast } from "sonner";
import { TbFidgetSpinner } from "react-icons/tb";
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
  const [loading, setLoading] = useState(false);
  const [productData, { error }] = useAddProductMutation();
  console.log(error);
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState("");
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("product adding", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 5000,
    });
    setLoading(true);
    try {
      const imageUrl = await imageHosting(image);
      const productInfo = {
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        bloomDate: new Date(startDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        color: data.color,
        category: data.category,
        size: data.size,
        fragrance: data.fragrance,
        image: imageUrl,
      };
      productData(productInfo);
      toast.success("product add successfully", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong.", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className=" w-4/5 mx-auto my-auto">
      <div className=" text-center font-semibold  my-2">
        <h1 className="capitalize text-textColor text-2xl">Add your Product</h1>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Name
              </label>
              <input
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
                type="text"
                placeholder="product name"
                required
                {...register("name")}
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-textColor text-base primaryyFont mb-2"
              >
                Select Image
              </label>
              <input
                className=" rounded-md border-secondaryy focus:outline-accent bg-gray-200 text-textColor"
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(event: any) => setImage(event.target.files[0])}
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Price
              </label>
              <input
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
                type="number"
                placeholder="product price"
                {...register("price")}
                required
              />
            </div>

            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Quantity
              </label>
              <input
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
                type="number"
                placeholder="product quantity"
                {...register("quantity")}
                required
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Bloom Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
              />
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Color
              </label>
              <select
                {...register("color")}
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
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
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower category
              </label>
              <select
                {...register("category")}
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
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
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Size
              </label>
              <select
                {...register("size")}
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
              >
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
            <div className="flex flex-col justify-start ">
              <label
                htmlFor="name"
                className=" text-textColor text-base primaryyFont mb-2"
              >
                Flower Fragrance
              </label>
              <input
                className="border w-full rounded border-primaryy active:border-secondaryy focus:outline-secondaryy px-2 py-1 text-textColor"
                type="text"
                placeholder="product Fragrance"
                {...register("fragrance")}
                required
              />
            </div>
          </div>
          {/* <button type="submit" className="bg-secondaryy py-2 w-full rounded mt-3 text-base text-textColor font-semibold text-center"> Add product</button> */}
          <button
            type="submit"
            className="bg-primaryy w-full rounded-md py-3 text-white mt-3 text-base text-textColor font-semibold text-center"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
