//uder defined tag: <App/>
function App() {
  return (
    <>
      {/* <h1>Hello world</h1> */}
      <AppHeader />
      <AppBody/>
      <AppFooter/>
    </>
  );
}

//user defined tag: <AppHeader/>
function AppHeader() {
  return (
    <div className="row bg-success text-light p-3 fs-1">
      <div className="col">Home</div>
      <div className="col">project</div>
      <div className="col">About us</div>
    </div>
  );
}

//user defined tag: <AppBody/>
function AppBody() {
  return (
    <>
      <h1>App body</h1>
    </>
  );
}

//user defined tag: <AppFooter/>
function AppFooter() {
  return (
    <>
      <h1>App Footer</h1>
    </>
  );
}

export default App;
