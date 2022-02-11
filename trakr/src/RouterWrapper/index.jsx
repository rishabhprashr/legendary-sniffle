import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { root } from "../Routes";

function RouterWrapper() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={root} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterWrapper;
