import React from "react";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import TopNav from "./UI/TopNav";
import FilmOverviewComponent from "./components/FilmOverview/FilmOverviewComponent";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TopNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/film/:filmid" element={<FilmOverviewComponent />} />
      </Routes>
    </Provider>
  );
}

export default App;
