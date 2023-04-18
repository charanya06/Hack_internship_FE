import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/homePage";
import LibraryPage from "./Components/libraryPage";
import ContributePage from "./Components/contributePage";
import MainPage from "./Components/mainPage";

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Hack_internship_FE" exact element={<MainPage/>} />
        <Route path="/Hack_internship_FE/home" exact element={<HomePage/>} />
        <Route path="/Hack_internship_FE/library" exact element={<LibraryPage/>} />
        <Route path="/Hack_internship_FE/contribute" exact element={<ContributePage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
