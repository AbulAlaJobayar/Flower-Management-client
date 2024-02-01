import { useGetAllProductQuery } from "../../redux/fetchurs/getAllproductApi";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = () => {
  const { data, isLoading } = useGetAllProductQuery("");
 console.log(isLoading)
  console.log(data)
 return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Flower Name</th>
            <th>color</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Size</th>
            <th>Fragrance</th>
          </tr>
        </thead>
        
        <tbody>
          {data?.data.map((item:any, i:any) => (
            <ManageSingleProduct
              key={item._id}
              i={i}
              item={item}
             
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;