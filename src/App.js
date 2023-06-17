import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp/>
    </>
  );
}

//UserDefinedTag
function CounterApp() {
  //!.Data member :: stateless/stateful
  // let Counter=1; //stateless
  let [Counter, setCounter] = useState(1); //to create stateful variable + this will help to perform DOM operation

  //2.Member function
  let LikeMeAction = () => {
    Counter = Counter + 1;
    console.log("i am button click", Counter);

    //Asking React to perform DOM operation
    setCounter(Counter);
  };
  
  //3.JSX :: view :: user-interface :: required
  return (
    <>
    <h1>{Counter}</h1>
      <input type="button" value="Like Me!" onClick={LikeMeAction}/>
    </>
  );
}

export default App;
