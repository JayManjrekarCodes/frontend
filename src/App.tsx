import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <h1>Fitness Tracker</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
