import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
// import { SidebarItems } from "./SideBarItems";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import { TbShoppingBagEdit } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/fetchurs/auth/authSlice";

const SideBar = () => {
  const dispatch:any=useAppDispatch()
  const handleLogout = () => {
    dispatch(logout());

  };



  const SidebarItems = [
    {
      key: "home",
      icon: <IoHomeOutline />,
      label: (
        <NavLink to="/">
          <span className="secondaryyFont text-base">Home</span>
        </NavLink>
      ),
    },
    {
      key: "dashboard",
      icon: <HiOutlineViewGrid />,
      label: (
        <NavLink to="/dashboard">
          {" "}
          <span className="secondaryyFont text-base">Dashboard</span>
        </NavLink>
      ),
    },
    {
      key: "addProduct",
      icon: <MdAddShoppingCart />,
      label: (
        <NavLink to="/addProduct">
          {" "}
          <span className="secondaryyFont text-base">Add Product</span>
        </NavLink>
      ),
    },
    {
      key: "manageProduct",
      icon: <TbShoppingBagEdit />,
      label: (
        <NavLink to="/manageProduct">
          {" "}
          <span className="secondaryyFont text-base">Manage Product</span>
        </NavLink>
      ),
    },
    {
      key: "order",
      icon: <AiOutlineShoppingCart />,
      label: (
        <NavLink to="/order">
          {" "}
          <span className="secondaryyFont text-base">Order</span>
        </NavLink>
      ),
    },
    {
      key: "profile",
      icon: <FaRegUser />,
      label: (
        <NavLink to="/profile">
          {" "}
          <span className="secondaryyFont text-base">Profile</span>
        </NavLink>
      ),
    },
    {
      key: "logOut",
      icon: <IoIosLogOut />,
      label:<button className="secondaryyFont text-base" onClick={handleLogout}>LogOut</button>
    },
  ];



  return (
  

    <Sider
    
      breakpoint="lg"
      collapsedWidth="0"
      style={{ backgroundColor: "#8ed1a3", color: "#fdd05e ", minHeight: "100vh" }}
     
    >
        <NavLink to="/">
      <div className="mx-auto text-center  flex justify-center items-center">
        <img
          src="https://i.ibb.co/nwWZjcV/Pngtree-mbe-plant-icon-rose-4047324.png"
          alt="logo"
          className="size-20"
        />
        <span className="text-textColor font-extrabold text-4xl -ml-5 accentFont ">
          Florist
        </span>
      </div>
     
        </NavLink>
        
      <Menu
        mode="inline"
        defaultSelectedKeys={["5"]}
        items={SidebarItems}
        style={{ backgroundColor: "#8ed1a3",  }}
      />
        
      
    </Sider>
  );
};

export default SideBar;
