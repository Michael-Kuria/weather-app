import { Input } from "antd";
import React, { FC } from "react";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

interface Props {
  locations: Location[];
}

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const Header: FC = ({}) => {
  return (
    <header className="header">
      <div className="header-title">KushWeather</div>
      <div className="header-searchbar">
        <Search
          placeholder="input location, city"
          onSearch={onSearch}
          enterButton
          style={{}}
          size="large"
        />
      </div>
    </header>
  );
};

export default Header;
