import React from "react";
import { storiesOf } from "@storybook/react";
import Post from "components/Post";
import store from "stores/";
import { Provider } from "react-redux";
storiesOf("Social Post", module).add("Normally", () => (
  <Provider store={store}>
    <Post />
  </Provider>
));
