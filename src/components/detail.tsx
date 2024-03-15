import { Space, Card } from "antd";
import { FC } from "react";

const Detail: FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Card title="Wind" size="small">
        <p>Card content</p>
      </Card>
    </Space>
  );
};

export default Detail;
