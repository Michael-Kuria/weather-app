import { FC } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Highlight from "./hightlight";
import Chart from "./chart";

const Main: FC = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Header />
      <Highlight />
      <Chart />
    </Layout>
  );
};

export default Main;
