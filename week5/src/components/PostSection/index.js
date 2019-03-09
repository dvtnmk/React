import React from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import { Icon, Row, Col, Dropdown, Menu } from "antd";
import Button from "components/Button";
import CapsuleButton from "components/CapsuleButton";
import CheckBox from "components/CheckBox";
import "./styles.scss";

const privacyMenu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="public">
      <Icon type="global" />
      สาธารณะ
    </Menu.Item>
    <Menu.Item key="private">
      <Icon type="lock" />
      เฉพาะฉัน
    </Menu.Item>
    <Menu.Item key="friend">
      <Icon type="user" />
      เพื่อน
    </Menu.Item>
  </Menu>
);

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
function PrivacySelector() {
  return (
    <Dropdown overlay={privacyMenu} trigger={["click"]}>
      <Button style={{ float: "right" }}>
        <Icon type="global" />
        Privacy <Icon type="down" />
      </Button>
    </Dropdown>
  );
}
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
        <Col span="12">
          <PrivacySelector />
        </Col>
      </Row>
    </div>
  );
}
function StoriesAction() {
  return (
    <div>
      <Row>
        <Col span="12">
          <CheckBox
            icon={
              <ProfileImage
                size="x2"
                src="http://tnews.teenee.com/politic/img3/258036.jpg"
                icon="plus"
              />
            }
            label="เรื่องราวของฉัน"
          />
        </Col>

        <Col span="12">
          <PrivacySelector />
        </Col>
      </Row>
    </div>
  );
}

function ShareAction() {
  return (
    <ViewFlex>
      <ViewFlex className="gapRight">
        <Dropdown trigger={["click"]}>
          <Button>
            <Icon type="down" />
            See More
          </Button>
        </Dropdown>
      </ViewFlex>
      <ViewFlex fluid>
        <Button type="primary" block>
          แชร์
        </Button>
      </ViewFlex>
    </ViewFlex>
  );
}
function PostSection() {
  return (
    <Segment
      title="โพสต์"
      actions={[<FeedAction />, <StoriesAction />, <ShareAction />]}
    >
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
