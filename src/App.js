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
    <>
      <h1>Header</h1>
    </>
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
