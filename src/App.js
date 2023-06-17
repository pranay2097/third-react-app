import { useState } from "react";

function App() {
  return (
    <>
      <h1>String example</h1>
      <StringDemo />
    </>
  );
}

function StringDemo() {
  let [title, setTitle] = useState ("Hello World");

  let LowerCaseAction = () => {
    title = title.toLowerCase();
    console.log(title);

    setTitle(title);
  };
  let UpperCaseAction = () => {
    title = title.toUpperCase();
    console.log(title);

    setTitle(title);
  };
  return (
    <>
      <h1>{title}</h1>
      <input type="button" value="Lower Case" onClick={LowerCaseAction} />
      <input type="button" value="Upper Case" onClick={UpperCaseAction}/>
    </>
  );
}
export default App;
