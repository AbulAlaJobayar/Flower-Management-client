import React from "react";

const SaleCard: React.FC<any> = ({ i, item }) => {
  return (
    <tr>
      <th>{i + 1} </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={item?.productId?.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{item?.productId?.name} </td>
      <td className="capitalize">{item?.productId?.size}</td>
      <td>{item?.buyerName}</td>
      <td>{item?.userId?.email}</td>
      <td>
        <h1 className="capitalize">{item?.purchase}</h1>
      </td>
      <td className="capitalize">{item?.totalPrice}</td>
      <td></td>
    </tr>
  );
};

export default SaleCard;
