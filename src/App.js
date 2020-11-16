import React, { useEffect, useState } from "react";
import "./App.css";
import FileContainer from "./components/FileContainer";
import NavBar from "./components/navBar";

import Sidebar from "./components/common/Sidebar";
import "./components/common/Sidebar.css";

import LeftSidebar from "./components/leftSidebar";
import RightSidebar from "./components/rightSidebar";

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
