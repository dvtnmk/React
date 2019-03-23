import React from "react";
import TimelineHeader from "components/Timeline/Header";
import { Row, Col } from "antd";
import PostSection from "components/PostSection";
const cover = "http://tonkit360.com/wp-content/uploads/2017/05/039b-17-1.jpg";
const src = "https://ichef.bbci.co.uk/images/ic/720x405/p05q7332.jpg";

function TimelineContainer() {
  const data = {
    profileImagePath: src,
    coverImagePath: cover,
    name: "Prawit Naja"
  };
  return (
    <div>
      <TimelineHeader data={data} />
      <Row gutter={10}>
        <Col span={8}>col8</Col>
        <Col span={16}>
          <PostSection />
        </Col>
      </Row>
    </div>
  );
}

export default TimelineContainer;
