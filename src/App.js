import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp/>
    </>
  );
}

function CounterApp() {
  // let counter= 1; //stateless member
  // let list = useState(1);
  // let [counter, setCounter] = list;
  let[counter, setCounter] = useState(100);  //stateful

  let LikeMeAction = () => {
    counter = counter + 1;
    console.log(counter);

    //asking react to perform dom operation
    setCounter(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me" onClick={LikeMeAction} />
    </>
  );
}

export default App;
