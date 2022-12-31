import React, { useEffect } from "react";
import { Navigate, redirect, Route, useNavigate } from "react-router-dom";

export default function HomePage({ token }) {
  const nama = token.user.user_metadata;
  let navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("token");
    // confirm("yakin mau keluar?");

    // <Route path={"/home"} element={<Navigate to="/" replace={true} />} />;

    // if (!token) {
    navigate("/signin");
    // } else {
    //   navigate("/");
    // }
    // <Navigate to="/" replace={true} />;

    // navigate("/");
    // return redirect("/");
  }
  // useEffect(() => {
  //   if (!token && sessionStorage.length < 0) {
  //     navigate("/");
  //     console.log("Ewhan");
  //   }
  // }, []);
  // useEffect(() => {
  //   if (!token) {
  //   }
  //   console.log(token, "ini homeww");
  // }, []);

  return (
    <div>
      <p>{nama.full_name}</p>
      <button onClick={() => handleLogout()} className="w-52 p-3 rounded-full mx-auto flex justify-center bg-white text-black">
        logout
      </button>
    </div>
  );
}
