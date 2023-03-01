import React from "react";
import Page_Search from "./components/Page_Search";
import Page_Display from "./components/Page_Display";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Page_Search />
      </div>
      <div className="">
        <Page_Display />
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
