import React, { useEffect, useState } from "react";
import { usePreload } from "helpers/util";
import "./styles.scss";
import { Icon } from "antd";
function ProfileImage({ src, icon, size = "x4", ...rest }) {
  if (!/^x([1-9]|10)/.test(size)) {
    size = "x4";
  }
  const [imageLoaded, setImageLoaded] = useState(null);
  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImageLoaded(result);
      })
      .catch(error => console.log("Cover image can't loaded"));
  }, []);
  return (
    <div className={`imageWrapper ${size}`}>
      {imageLoaded ? (
        <img className="image" src={imageLoaded} />
      ) : (
        <div className="loading">Loading...</div>
      )}
      {icon ? <div className="icon">{<Icon type="plus" />}</div> : <div />}
    </div>
  );
}

export default ProfileImage;
