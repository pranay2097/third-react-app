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
      <div className="alert alert-success fs-3 mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis tempora est? Sit quaerat accusantium debitis laboriosam illum porro ipsa magnam? Nesciunt itaque inventore labore veritatis pariatur, reprehenderit praesentium quod? Iure pariatur recusandae perferendis aliquid, eaque quaerat aspernatur magni nesciunt vel eius voluptate impedit ipsa iste voluptatibus odio quibusdam saepe cum laudantium sunt. Maiores quasi architecto molestias beatae modi ducimus culpa optio aut, adipisci consectetur. Alias consectetur deleniti inventore ducimus harum quasi ab esse facilis voluptatum ipsam ipsa earum culpa soluta, adipisci doloremque minima laudantium eos! Explicabo vitae illo voluptate doloribus iusto, laudantium, rerum, et culpa omnis animi blanditiis saepe!
      </div>
    </>
  );
}

//user defined tag: <AppFooter/>
function AppFooter() {
  return (
    <>
      <div className="bg-secondary text-light d-flex justify-content-center align-items-center"
      style={{height:"200px"}}>
        Lorem ipsum dolor sit amet.
      </div>
    </>
  );
}

export default App;
