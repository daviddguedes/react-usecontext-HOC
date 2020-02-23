import React from "react";
import { AppContext } from "./AppContext";

function appContextHOC(WrapperComponent) {
  return function(props) {
    const [state, setState] = React.useContext(AppContext);
    return <WrapperComponent {...props} state={state} setState={setState} />;
  };
}

export default appContextHOC;
