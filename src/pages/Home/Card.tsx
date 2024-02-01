import React from "react";
import { GiFragrance } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
//  type TItem={
//   category: string;
//   color: string
//   createdAt: Date;
//   fragrance: string;
//   name: string;
//   price: number;
// quantity: number;
//   size: string;
//   updatedAt:Date;
//   _id:string;
// }
type TCard={
  key:any;
  item:any
}
const Card: React.FC<TCard> = ({ item }: any) => {
 
 
 
 const handleOrder=(id)=>{
  console.log(id)
 }
  return (
    <div className="block mt-4 rounded-lg mb-4 shadow-sm shadow-primaryy bg-primaryy">
      <img
        alt="Home"
        src={item.image}
        className="h-56 w-full rounded-md object-cover"
      />
      <div className="mt-2 mx-4">
        <div className="flex justify-between items-center">
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-textColor">
            Price<span className="ml-1">${item.price}</span>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-around gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IoMdColorPalette />
            <div className="mt-1.5 sm:mt-0">
              <p className="font-medium capitalize">{item.color}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <GiFragrance />
            <div className="mt-1.5 sm:mt-0">
              <p className="font-medium">{item.fragrance}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <MdProductionQuantityLimits />

            <div className="mt-1.5 sm:mt-0">
              <p className="font-medium">{item.quantity}</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <SlSizeActual />

            <div className="mt-1.5 sm:mt-0">
              <p className="font-medium">{item.size}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>handleOrder(item._id)} className="w-full bg-secondaryy font-semibold text-textColor mt-4 py-3 rounded-md">
        Order Now
      </button>
    </div>
  );
};

export default Card;
