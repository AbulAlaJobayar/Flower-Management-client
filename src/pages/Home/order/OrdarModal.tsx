import React, { useState } from "react";
import { InputNumber, Modal } from "antd";
import { useSaleProductMutation } from "../../../redux/fetchurs/addSale";
import { toast } from "sonner";

const OrderModal: React.FC<any> = ({ isModalOpen, setIsModalOpen, item }) => {
  const [productQuantity, setProductQuantity] = useState("");
  const onChange = (value: any) => {
    setProductQuantity(value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   create Order
  const [crateSale, error] = useSaleProductMutation();

  console.log(error);
  const handleOrder = (id: any) => {
    const toastId = toast.success("order Creating", {
      duration: 5000,
      position:"top-center"
    });
    const saleInfo = {
      productId: id,
      purchase: Number(productQuantity || 1),
    };
    crateSale(saleInfo);
    toast.success("Order completed", {
      id: toastId,
      duration: 2000,
      position:"top-center"
    });
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="hero border border-1 rounded p-3  border-primaryy bg-backgroundColor">
          <div className="hero-content flex-col lg:flex-col">
            <img src={item.image} className="max-w-sm rounded-lg  shadow-2xl" />
            <div>
              <h1 className="text-2xl text-center mb-4 font-bold">
                {item.name}
              </h1>
              <div className="grid grid-cols-2">
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  {" "}
                  price: ${item.price}
                </p>
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  Available: {item.quantity}
                </p>
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  color: {item.color}
                </p>
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  Category: {item.category}
                </p>
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  Size: {item.size}
                </p>
                <p className=" text-base font-semibold capitalize secondaryFont text-textColor">
                  Fragrance: {item.fragrance}
                </p>
              </div>
              <div className="mt-6 flex justify-between">
                <InputNumber
                  className="border-primary font-semibold border-2"
                  min={1}
                  max={Number(item.quantity)}
                  defaultValue={1}
                  onChange={onChange}
                />
                <button
                  onClick={() => handleOrder(item._id)}
                  className=" py-2 px-4 bg-primaryy rounded text-base font-semibold text-textColor"
                >
                  ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderModal;
