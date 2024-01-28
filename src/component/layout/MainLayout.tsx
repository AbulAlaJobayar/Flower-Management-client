import React from "react";
import { ConfigProvider, Layout} from "antd";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import HeaderFooter from "./HeaderFooter";
import { Outlet } from "react-router-dom";

const { Content} = Layout;



const MainLayout: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          
          colorPrimary: "#8edla3",
          colorLink:"blue",
          colorTextBase:"#8edla3",
          motion:false,
          
          

          //content area
          // colorBgBase:'#fff9f4',
          borderRadius: 5,
          // Alias Token
        },
      }}
    >
      <Layout style={{ height: "100vh" }}>
        <SideBar/>
        <Layout>
          <Navbar/>
          <Content style={{  backgroundColor: "#fff9f4",}}>
           <Outlet/>
          </Content>
          <HeaderFooter/>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
