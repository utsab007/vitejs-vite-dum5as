import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalState';

function Counter() {
  const { incrementValue, decrementValue, value } = useContext(GlobalContext);

  const [txtvalue, setTxtValue] = useState(value);

  const increment = () => {
    incrementValue(1);
  };

  const decrement = () => {
    decrementValue(1);
  };

  useEffect(() => {
    setTxtValue(value);
  }, [value]);

  return (
    <>
      <h2>Counter</h2>
      <p>Value: {txtvalue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
