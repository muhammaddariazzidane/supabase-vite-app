import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage({ token }) {
  console.log(token.user.user_metadata, "ini home");
  const nama = token.user.user_metadata;
  let navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <p>{nama.full_name}</p>
      <button onClick={handleLogout} className="w-52 p-3 rounded-full mx-auto flex justify-center bg-white text-black">
        logout
      </button>
    </div>
  );
}
