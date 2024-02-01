import { NavLink } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import { TbShoppingBagEdit } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
export const SidebarItems = [
  {
    key: "home",
    icon: <IoHomeOutline />,
    label: (
      <NavLink to="/">
        {" "}
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
    label: (
      <NavLink to="/">
        {" "}
        <span className="secondaryyFont text-base">Logout</span>
      </NavLink>
    ),
  },
];
// export const items=sidebarItems.map((item)=>SideBarItemsProp(item.key,item.icon))
