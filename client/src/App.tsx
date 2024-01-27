import { useEffect } from "react";
import "./App.scss";
import init, { add } from "./pkg";

function App() {
  const a = 1;
  const b = 2;

  useEffect(() => {
    init().then(() => {
      console.log(`a is ${a}`);
      console.log(`b is ${b}`);
      console.log(`a + b is ${add(1, 1)}`);
    });
  }, []);

  return (
    <>
      <h1>Comparing setTimeout javascript and wasm</h1>
    </>
  );
}

export default App;
