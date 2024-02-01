import { useGetAllSellQuery } from "../../redux/fetchurs/getAllSaleApi";
import SaleCard from "./SaleCard";

const Order = () => {
const {data}=useGetAllSellQuery('')
console.log(data)
  return (
   <>
   <div className="overflow-x-auto overflow-y-auto overflow-scroll">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Size</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Quantity</th>
            <th>Total Price</th>
            
            
          </tr>
        </thead>
        
        <tbody>
          {data?.data.map((item:any, i:any) => (
            <SaleCard
              key={item._id}
              i={i}
              item={item}
             
            ></SaleCard>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
};

export default Order;