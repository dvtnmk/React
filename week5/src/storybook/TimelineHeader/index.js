import React from "react";
import { storiesOf } from "@storybook/react";
import TimelineHeader from "components/Timeline/Header";
const src = "https://ichef.bbci.co.uk/images/ic/720x405/p05q7332.jpg";

storiesOf("Timeline Header", module).add("Default", () => (
  <TimelineHeader src={src} />
));
