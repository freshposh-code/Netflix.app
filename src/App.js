import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectiveRoute from "./component/ProtectiveRoute";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="account"
            exact
            element={
              <ProtectiveRoute>
                <Account />
              </ProtectiveRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
