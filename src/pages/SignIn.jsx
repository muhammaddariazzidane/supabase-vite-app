import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate, redirect } from "react-router-dom";
import Auth from "../layout/Auth";
import { supabase } from "../lib/client";

export default function SignIn({ setToken }) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // console.log(formData, "ini from dari sign");
  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      setToken(data);

      navigate("/home");
      // sessionStorage.removeItem("token");

      // console.log(data, "ini dari login");
      // alert("verifikasi email kamu");
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    sessionStorage.removeItem("token");
  }, []);
  return (
    <Auth>
      <h3 className="mb-4 text-xl bg-gradient-to-br from-teal-accent-400 to-black  text-transparent bg-clip-text font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign In </h3>
      <form onSubmit={handleSubmit} method="post">
        <div className="mb-1 sm:mb-2">
          <label htmlFor="name" className="inline-block mb-1 font-medium">
            Email
          </label>
          <input
            onChange={handleChange}
            placeholder="email"
            required
            type="email"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-full shadow-sm appearance-none focus:border-teal-accent-400 focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="email" className="inline-block mb-1 font-medium">
            Password
          </label>
          <input
            onChange={handleChange}
            placeholder="Password"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-full shadow-sm appearance-none focus:border-teal-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-xl bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
          >
            Sign In
          </button>
        </div>
        <p className="text-xs text-gray-600 sm:text-sm">
          belum punya akun?{" "}
          <Link to="/signup" className="underline font-semibold text-teal-accent-400">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </Auth>
  );
}
