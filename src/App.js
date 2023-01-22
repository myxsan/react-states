import { useState } from "react";

function App() {
  const [name, setName] = useState('Memo')
  return (
    <div className="App">
      <h1>Hi {name}!!</h1>
      <button onClick={() => setName('Musa')}>click me</button>
    </div>
  );
}

export default App;
