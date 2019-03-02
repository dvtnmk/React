import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Icon } from "antd";
function ProfileImage({ src, icon, size = "x4", ...rest }) {
  if (!/^x([1-9]|10)/.test(size)) {
    size = "x4";
  }
  const [imageLoaded, setImageLoaded] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(src);
    };
    image.onerror = () => {};
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
