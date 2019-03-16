import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

import "./styles.scss";

function AntTextArea({
  success,
  error,
  value,
  onChange,
  label,
  inline,
  ...rest
}) {
  return (
    <TextArea
      className="noBorder"
      // value={value}
      // onChange={onChange}
      autosize={{ minRows: 2, maxRows: 6 }}
      {...rest}
    />
  );
}

export default AntTextArea;
