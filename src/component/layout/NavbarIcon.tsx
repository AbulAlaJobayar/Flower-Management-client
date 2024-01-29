import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons'
const user=""
const NavbarIcon = () => {
  return (
    <div className="flex justify-center items-center  gap-5 pb-5">
      <BsCartCheck className="size-5 text-[#333333]"/>
      <IoIosNotificationsOutline className="size-6 text-[#333333]"/>
      <div className="size-12 border border-[#fbc8a4] rounded-full">
      {
        user?<img src="" className="size-10 ml-1" alt="" />: <Avatar size={45} className="mb-8" icon={<UserOutlined />} />
      }
      </div>
    </div>
  );
};

export default NavbarIcon;
