import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
