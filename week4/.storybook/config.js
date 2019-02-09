import { configure } from "@storybook/react";

function loadMyStories() {
  require("../stories");
}

configure(loadMyStories, module);
