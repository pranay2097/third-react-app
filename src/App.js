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
  //Member function
  let LikeMeAction = () => {
    // alert();
    console.log("i am button click");
  };
  
  //JSX :: view :: user-interface :: required
  return (
    <>
      <input type="button" value="Like Me!" onClick={LikeMeAction}/>
    </>
  );
}

export default App;
