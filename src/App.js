import React from "react";
import "./App.css";
import FileContainer from "./components/FileContainer";
import NavBar from "./components/navBar";

import LeftSidebar from "./components/leftSidebar";

function App() {
  return (
    <React.Fragment>
      <LeftSidebar />
      <main className='container'>
        <FileContainer />
      </main>
    </React.Fragment>
  );
}

export default App;
