import React from "react";
import { storiesOf } from "@storybook/react";
import Segment from "components/Segment";
import ProfileImage from "components/ProfileImage";
import AntTextArea from "components/TextArea";
// import  from "components/TextArea"
const src = "http://tnews.teenee.com/politic/img3/258036.jpg";
storiesOf("Segment", module)
  .add("Form Segment with title", () => <Segment title="My Segment" />)
  .add("with content", () => (
    <Segment
      title="Post"
      content={
        <div className="Post">
          <ProfileImage src={src} />
          <AntTextArea />
        </div>
      }
    />
  ));
