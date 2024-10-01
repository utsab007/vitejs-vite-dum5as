import { useState } from 'react';
import Counter from './Counter';
import { GlobalProvider } from './GlobalState';

function App() {
  const [txtvalue, setTxtValue] = useState(0);

  return (
    <GlobalProvider>
      <Counter />
    </GlobalProvider>
  );
}

export default App;
