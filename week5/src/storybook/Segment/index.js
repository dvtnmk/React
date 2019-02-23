import React from "react";
import { storiesOf } from "@storybook/react";
import Segment from "components/Segment";
storiesOf("Segment", module)
  .add("Form Segment with title", () => <Segment title="My Segment" />)
  .add("with content", () => <Segment title="Post" />);
