import { Header } from "antd/es/layout/layout";
import NavBarSearch from "./NavBarSearch";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: "#8ed1a3", margin: "0", padding: "0" }}>
      <div className=" flex justify-between items-center mx-4 ">
        <NavBarSearch />
        <NavbarIcon />
      </div>
    </Header>
  );
};

export default Navbar;
