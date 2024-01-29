import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SidebarItems } from "./SideBarItems";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
  

    <Sider
    
      breakpoint="lg"
      collapsedWidth="0"
      style={{ backgroundColor: "#8ed1a3", color: "#fdd05e ",height:"100vh" }}
     
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
