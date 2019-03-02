import React, { useState } from "react";
import { Icon } from "antd";
import "./styles.scss";

function CheckBox({ onChange, checked = false, icon, label = "", ...rest }) {
  return (
    <div className="checkboxWrapper" onClick={onChange}>
      <input type="checkbox" checked={checked} style={{ display: "none" }} />
      <div className="checkbox">
        {checked && (
          <div className="checked">
            <Icon type="check" />
          </div>
        )}
      </div>
      {icon && (
        <div className="iconWrapper">
          <div className="iconContent">{icon}</div>
        </div>
      )}

      <div className="label">{label}</div>
    </div>
  );
}

export default CheckBox;
