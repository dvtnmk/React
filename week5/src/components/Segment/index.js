import React from "react";
import "./styles.scss";

function renderActions(actions) {
  return actions.map(action => <SegmentAction>{action}</SegmentAction>);
}
function Segment({ children, content, title, actions = [] }) {
  return (
    <div className="segment">
      <SegmentTitle>{title}</SegmentTitle>
      <SegmentContent>{children || content}</SegmentContent>
      {actions.length > 0 && renderActions(actions)}
    </div>
  );
}
function SegmentTitle({ children, title = "", ...rest }) {
  return (
    <div className="title" {...rest}>
      <span className="titleText">{children || title}</span>
    </div>
  );
}
function SegmentContent({ children, content }) {
  return (
    <div className="content">
      <div className="container">{(children, content)}</div>
    </div>
  );
}
function SegmentAction({ children, content }) {
  return (
    <div className="actions">
      <div className="container">{children || content}</div>
    </div>
  );
}

export { SegmentTitle, SegmentContent, SegmentAction };
export default Segment;
