import React, { useEffect } from "react";

export default function Counter(props) {
  const [counter, setCounter] = React.useState(props.value);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return <div className="counter">Time Left {counter}</div>;
}
