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
  //Data Member ::Optional
  let counter=1;
  let id = 100;
  let pi = 3.14;
  let str = "hello world";
  let active= true;

  //Member Function ::Optional
  let LikeMeAction = () => {};
  let dislikeMeAction = () => {};
  
  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me!" />
    </>
  );
}

export default App;
