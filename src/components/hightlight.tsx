import { Col, Row } from "antd";
import { FC } from "react";
import Detail from "./detail";

const Highlight: FC = () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
      <div className="highlights-left">
        <div className="highlights-left__location">New York</div>
        <div className="inline">
          <p className="highlights-left__temp">61</p>
          <span> Mostly Cloudy</span>
        </div>
      </div>
      </Col>
      <Col span={16}>
      <div className="highlights-right">
        <Row justify="start" gutter={[24, 24]}>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
          <Col span={6}>
            <Detail />
          </Col>
        </Row>
      </div>
      </Col>
    </Row>
  );
};

export default Highlight;
