import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";

const src = "http://tnews.teenee.com/politic/img3/258036.jpg";
const icon = "show";
storiesOf("Profile Image", module)
  .add("with no image", () => <ProfileImage />)
  .add("with image", () => <ProfileImage src={src} icon={icon} />);
