import React from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import { Icon, Row, Col } from "antd";
import CapsuleButton from "components/CapsuleButton";
import CheckBox from "components/CheckBox";
import "./styles.scss";

const postOption = [
  {
    icon: <Icon type="user" />,
    label: "first user"
  },
  {
    icon: <Icon type="plus" />,
    label: "Tag friends"
  },
  {
    icon: <Icon type="minus" />,
    label: "Delete Tag friends"
  }
];
function renderPostOption(options) {
  return options.map(option => (
    <ViewFlex margin={false}>
      <CapsuleButton {...option} />
    </ViewFlex>
  ));
}
function FeedAction() {
  return (
    <div>
      <Row>
        <Col span="12">
          <CheckBox icon={<Icon type="notification" />} label="ฟีตข่าว" />
        </Col>
        <Col span="12">Dropdown</Col>
      </Row>
    </div>
  );
}
function StoriesAction() {
  return (
    <div>
      <Row>
        <Col span="12">
          <CheckBox label="เรื่องราวของฉัน" />
        </Col>
        <Col span="12">Dropdown</Col>
      </Row>
    </div>
  );
}
function PostSection() {
  return (
    <Segment title="โพสต์" actions={[<FeedAction />, <StoriesAction />]}>
      <ViewFlex column>
        <ViewFlex className="postSection">
          <ViewFlex>
            <ProfileImage
              size="x3"
              src="http://tnews.teenee.com/politic/img3/258036.jpg"
            />
          </ViewFlex>
          <ViewFlex fluid>
            <textarea
              className="postInputArea"
              placeholder="คุณกำลังคิดอะไรอยู่..."
            />
          </ViewFlex>
        </ViewFlex>
        <ViewFlex margin={false}>{renderPostOption(postOption)}</ViewFlex>
      </ViewFlex>
    </Segment>
  );
}

export default PostSection;
