import React from "react";
import { storiesOf } from "@storybook/react";
import PostSection from "components/PostSection";
import store from "stores";
import { Provider } from "react-redux";
storiesOf("Post Section", module).add("Normally", () => (
  <Provider store={store}>
    <PostSection />
  </Provider>
));
