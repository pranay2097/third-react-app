import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp/>
      <CounterApp/>
      <CounterApp/>
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
      <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores architecto quos doloremque quisquam? Soluta tempora sit provident nobis maiores ab.
      </h5>
      <h1>
        {counter}{" "}
        <input type="button" value="&#128077;" onClick={LikeMeAction} />
      </h1>
      
    </>
  );
}

export default App;
