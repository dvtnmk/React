import React from "react";
import { storiesOf } from "@storybook/react";
import TimelineCover from "components/Timeline/Cover";
const src = "https://ichef.bbci.co.uk/images/ic/720x405/p05q7332.jpg";
storiesOf("Timeline Cover", module).add("Default", () => (
  <TimelineCover src={src} />
));
