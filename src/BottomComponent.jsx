import React from "react";
import "./styles.css";
import appContextHOC from "./AppContextHOC";

class BottomComponent extends React.Component {
  render() {
    return (
      <div className="bottom">BottomComponent: {this.props.state.count}</div>
    );
  }
}

export default appContextHOC(BottomComponent);
