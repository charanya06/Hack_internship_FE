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
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/home" exact element={<HomePage/>} />
        <Route path="/library" exact element={<LibraryPage/>} />
        <Route path="/contribute" exact element={<ContributePage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
