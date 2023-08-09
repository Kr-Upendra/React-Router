import React from "react";

export default function Alert(props) {
  return (
    props && (
      <div
        aria-hidden={props.alertMT.isShow}
        className={`alert a-${props.alertMT.type}`}
      >
        <span className="a-me">{props.alertMT.message}</span>
      </div>
    )
  );
}
