import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Header />
        <Routes>
          {/* <ProtectedRoute path="/" element={<HomeScreen />} /> */}
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<HomeScreen />} />
          </Route>

          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
