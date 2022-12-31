import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./layout/Auth";
import { supabase } from "./lib/client";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  let navigate = useNavigate();
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
      // console.log(token.session.access_token, "dari apps");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/signin"} element={<SignIn setToken={setToken} />} />
        {/* <Route path={"/home"} element={<SignIn setToken={setToken} />} /> */}
        <Route path={"/"} element={token ? <Navigate to={"/home"} token={token} /> : <Navigate to={"/signin"} replace />} />
        <Route path={"/signup"} element={token ? <Navigate to={"/"} replace /> : <SignUp replace />} />
        <Route path={"/home"} element={token ? <HomePage token={token} replace /> : <Navigate to={"/signin"} replace />} />
        {/* {token ? (
          <>
            <Route path={"/home"} element={<HomePage token={token} />} />
            <Route path={"/home"} element={<Navigate to="/home" replace={true} />} />
          </>
        ) : (
          <>
            <Route path={"/"} element={<Navigate to="/" />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
          </>
        )} */}
      </Routes>
    </>
  );
}
