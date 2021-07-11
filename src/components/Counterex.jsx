import { useState } from "react";

const Counterex = () => {
  const [counter, setCounter] = useState(0);

  const onClickDecrement = () => {
    setCounter(counter - 1);
  };

  const onClickIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <div>
        <button
          className="btn btn-primary m-3"
          onClick={() => onClickDecrement()}
        >
          -
        </button>
        {counter}
        <button
          className="btn btn-primary m-3"
          onClick={() => onClickIncrement()}
        >
          +
        </button>
      </div>
      <button className="btn btn-danger" onClick={() => setCounter(0)}>
        Reset
      </button>
    </>
  );
};

export default Counterex;
