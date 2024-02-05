import React, {useState} from 'react';
import './App.css';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import Protected from "./components/Protected";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Nav} from "./pages/Nav";

const LoginRoutes = [
  {path: "/home", component: <Home/>},
];

const LogoutRoutes = [
  {path: "/login", component: <Login/>},
  {path: "/signup", component: <SignUp/>},
];

function App() {
  const [userInfo, setUserInfo] = useState("seokju");
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
