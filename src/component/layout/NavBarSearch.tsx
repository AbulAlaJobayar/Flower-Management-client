import { ConfigProvider, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

const NavBarSearch = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "#fbc8a4",
          colorBgContainer: "#fff9f4",
          colorIcon: "#333333",
          colorText: "#333333",
        },
        components: {
          Input: {
            activeBg: "#fff9f4",
            activeBorderColor: "#fdd05e",
            activeShadow: "-1",
            hoverBg: "#fff9f4",
            hoverBorderColor: "#fdd05e",
          },
        },
      }}
    >
      <div className="my-4 ">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          className="xl:w-[400px] md:w-[300px] w-[100px]"
        />
      </div>
    </ConfigProvider>
  );
};

export default NavBarSearch;
