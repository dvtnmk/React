import React from "react";
import { storiesOf } from "@storybook/react";
import TimelineHeader from "components/Timeline/Header";
const cover = "http://tonkit360.com/wp-content/uploads/2017/05/039b-17-1.jpg";
const src = "https://ichef.bbci.co.uk/images/ic/720x405/p05q7332.jpg";
const data = {
  profileImagePath: src,
  coverImagePath: cover,
  name: "Prawit Naja"
};
storiesOf("Timeline Header", module).add("Default", () => (
  <TimelineHeader data={data} />
));
