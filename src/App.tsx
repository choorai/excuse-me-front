import React from 'react';
import './App.css';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {Route, Routes} from "react-router";
import Protected from "./components/Protected";
import {Link} from "react-router-dom";

const LoginRoutes = [
  {path: "/home", component: <Home/>},
];

const LogoutRoutes = [
  {path: "/login", component: <Login/>},
  {path: "/signup", component: <SignUp/>},
];

function App() {
  return (
    <>
      <div>무야호</div>
      <Link to="..">돌아가!!</Link>
      <Routes>
        {LogoutRoutes.map(({path, component}) => (
          <Route
            key={path}
            path={path}
            element={<Protected element={component} option={false}/>}
          />
        ))}
        {LoginRoutes.map(({path, component}) => (
          <Route
            key={path}
            path={path}
            element={<Protected element={component} option={true}/>}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
