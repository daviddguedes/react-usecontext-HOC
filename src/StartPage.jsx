import React from "react";
import "./styles.css";
import appContextHOC from "./AppContextHOC";

const StartPage = props => {
  const increment = () => {
    return props.setState(state => ({ ...state, count: state.count + 1 }));
  };

  const decrement = () => {
    return props.setState(state => ({ ...state, count: state.count - 1 }));
  };

  return (
    <div className="App">
      <h1>{`${props.state.title} ${props.name}`}</h1>
      <h2>StartPage: {props.state.count}</h2>
      <button onClick={() => increment()}>Click Here to INCREMENT</button>
      <button onClick={() => decrement()}>Click Here to DECREMENT</button>
    </div>
  );
};

export default appContextHOC(StartPage);
