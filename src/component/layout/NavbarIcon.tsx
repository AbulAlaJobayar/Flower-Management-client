import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons'
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/fetchurs/auth/authSlice";

const NavbarIcon = () => {
  const user=useAppSelector(selectCurrentUser)
  console.log(user)
  return (
    <div className="flex justify-center items-center  gap-5 pb-5">
      <BsCartCheck className="size-5 text-[#333333]"/>
      <IoIosNotificationsOutline className="size-6 text-[#333333]"/>
      <div className="size-12 border border-[#fbc8a4] rounded-full">
      {
        user?<img src={user.image} className="size-12  rounded-full" alt="" />: <Avatar size={45} className="mb-8" icon={<UserOutlined />} />
      }
      </div>
    </div>
  );
};

export default NavbarIcon;
