import React from "react";
import ProfileImage from "components/ProfileImage";
import TimelineCover from "components/Timeline/Cover";

function Header({ src }) {
  return (
    <div>
      <div>
        <TimelineCover />
      </div>
      <div>
        <div>
          <ProfileImage size="x9" src={src} />
        </div>
        <div>name</div>
      </div>
    </div>
  );
}
export default Header;
