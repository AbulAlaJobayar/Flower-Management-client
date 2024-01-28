import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SidebarItems } from "./SideBarItems";

const SideBar = () => {
  return (
    <Sider
          breakpoint="lg"         
          collapsedWidth="0"
          style={{ backgroundColor: "#8ed1a3", color: "#fdd05e" }}
        >
          <div className="mx-auto text-center py-3"> 
          <span className="text-textColor font-extrabold text-4xl accentFont " >
            Florist
          </span>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["5"]}
            items={SidebarItems}
            style={{ backgroundColor: "#8ed1a3", color:'#333333' }}
          />
        </Sider>
  );
};

export default SideBar;