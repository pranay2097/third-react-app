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
  //Data member
  let Counter=1;

  //Member function
  let LikeMeAction = () => {
    Counter = Counter + 1;
    console.log("i am button click", Counter);
  };
  
  //JSX :: view :: user-interface :: required
  return (
    <>
    <h1>{Counter}</h1>
      <input type="button" value="Like Me!" onClick={LikeMeAction}/>
    </>
  );
}

export default App;
