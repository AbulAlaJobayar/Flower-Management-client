import React from "react";
import { Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useGetSingleProductQuery } from "../../redux/fetchurs/getSingleProduct";
import { useEditProductMutation } from "../../redux/fetchurs/editProductApi";
import { toast } from "sonner";

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

const EditModal: React.FC<any> = ({ isModalOpen, setIsModalOpen, editId }) => {
  //const product=singleProduct?.data
  const { data: singleProduct, isLoading } = useGetSingleProductQuery(editId);
  const [loading, setLoading] = useState(false);

  if (isLoading) {
    <div>Loading...</div>;
  }
  const [updateData] = useEditProductMutation();

  const { register, handleSubmit } = useForm<FormData>();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("product updating", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 5000,
    });
    try {
      setLoading(true);
      const productInfo = {
        name: data.name ? data.name : singleProduct?.data?.name,
        price: Number(data.price ? data.price : singleProduct?.data?.price),
        quantity: Number(
          data.quantity ? data.quantity : singleProduct?.data?.quantity
        ),
        bloomDate: singleProduct?.data?.bloomDate,
        color: data.color ? data.color : singleProduct?.data?.color,
        category: data.category ? data.category : singleProduct?.data?.category,
        size: data.size ? data.size : singleProduct?.data?.size,
        fragrance: data.fragrance
          ? data.fragrance
          : singleProduct?.data?.fragrance,
        image: singleProduct?.data?.image,
      };
      const id = singleProduct?.data?._id;
      updateData({ id, productInfo });
      toast.success("product Update successfully", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("something went wrong.", { id: toastId, duration: 2000 });
    }
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        <div className=" w-4/5 mx-auto my-auto">
          <div className=" text-center font-semibold  my-2">
            <h1 className="capitalize text-textColor text-2xl">
              Edit your Product
            </h1>
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
                    defaultValue={singleProduct?.data?.name}
                    required
                    {...register("name")}
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
                    defaultValue={Number(singleProduct?.data?.price)}
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
                    defaultValue={Number(singleProduct?.data?.quantity)}
                    {...register("quantity")}
                    required
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
                    defaultValue={singleProduct?.data?.color}
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
                    defaultValue={singleProduct?.data?.category}
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
                    defaultValue={singleProduct?.data?.size}
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
                    defaultValue={singleProduct?.data?.fragrance}
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
      </Modal>
    </>
  );
};

export default EditModal;
