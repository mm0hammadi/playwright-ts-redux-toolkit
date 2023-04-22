/* eslint-disable quotes */
import React from "react";
import "../assets/application.scss";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
// import Navbar from "./Navbar";

const App = () => (
  <div className="h-100">
    {/* <Navbar /> */}
    <Header />
    <ToDoList />
    <Footer />
  </div>
);

export default App;
