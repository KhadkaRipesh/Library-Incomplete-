import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
// import { useState } from 'react'
import SignIn from "./Components/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <Nav />
      <Body />
    </div>
  );
}

export default App;
