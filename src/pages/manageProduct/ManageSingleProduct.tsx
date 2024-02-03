import { toast } from "sonner";
import { useRemoveProductMutation } from "../../redux/fetchurs/removeSingleProduct";
import EditModal from "./EditModal";
import { useState } from "react";
import DuplicateModal from "./duplicate/DuplicateModal";



const ManageSingleProduct: React.FC<any> = ({ i, item }) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId]=useState('')
  const [duplicate,setDuplicate]=useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [data]=useRemoveProductMutation()
  const handleRemove = (id: string) => {
    const toastId = toast.loading("product Deleting", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 5000,
    })
    data(id)
    toast.success("Deleted successfully", {
      id: toastId,
      duration: 2000,
      position: "top-center",
    })

}



const handleEdit=(id:any)=>{
  setEditId(id)
  showModal()
  };


 const  handleDuplicate=(id:any)=>{
  setEditId(id)
  setDuplicate(true)
 }
  return (
    <>
      <tr>
        <th>{i + 1} </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{item.name} </td>
        <td className="capitalize">{item.color}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <h1 className="capitalize">{item.category}</h1>
        </td>
        <td className="capitalize">{item.size}</td>
        <td className="capitalize">{item.fragrance}</td>
        <td>
          <button
            onClick={() => handleRemove(item._id)}
            className="  bg-primaryy py-2 px-4 rounded text-base hover:bg-[#4fedb1] "
          >
            Remove
          </button>
        </td>
        <td>
        
        <button
            onClick={() =>handleEdit(item._id)}
            className="  bg-primaryy py-2 px-4 rounded text-base hover:bg-[#4fedb1] "
          >
         Edit
        </button>
        </td>
        <td>
        
        <button
            onClick={() =>handleDuplicate(item._id)}
            className="  bg-primaryy py-2 px-4 rounded text-base hover:bg-[#4fedb1] "
          >
         Duplicate
        </button>
        </td>
      </tr>
      <EditModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      editId={editId}

      />
      <DuplicateModal
      isModalOpen={duplicate}
      setIsModalOpen={setDuplicate}
      editId={editId}

      />
    </>
  );
};

export default ManageSingleProduct;
