import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
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
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<SignIn setToken={setToken} />} />
        <Route path={"/signup"} element={<SignUp />} />
        {token ? <Route path={"/home"} element={<HomePage token={token} />} /> : ""}
      </Routes>
    </>
    // <Auth>
    //   <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign up for updates</h3>
    //   <form onSubmit={handleSubmit} method="post">
    //     <div className="mb-1 sm:mb-2">
    //       <label htmlFor="name" className="inline-block mb-1 font-medium">
    //         Name
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         placeholder="Full name"
    //         required
    //         type="text"
    //         className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //         id="fullName"
    //         name="fullName"
    //       />
    //     </div>
    //     <div className="mb-1 sm:mb-2">
    //       <label htmlFor="name" className="inline-block mb-1 font-medium">
    //         Name
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         placeholder="email"
    //         required
    //         type="email"
    //         className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //         id="email"
    //         name="email"
    //       />
    //     </div>
    //     <div className="mb-1 sm:mb-2">
    //       <label htmlFor="email" className="inline-block mb-1 font-medium">
    //         E-mail
    //       </label>
    //       <input
    //         onChange={handleChange}
    //         placeholder="Password"
    //         required
    //         type="password"
    //         className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //         id="password"
    //         name="password"
    //       />
    //     </div>
    //     <div className="mt-4 mb-2 sm:mb-4">
    //       <button
    //         type="submit"
    //         className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //       >
    //         Register
    //       </button>
    //     </div>
    //     <p className="text-xs text-gray-600 sm:text-sm">We respect your privacy. Unsubscribe at any time.</p>
    //   </form>
    // </Auth>
    // <div className="overflow-hidden ">
    //   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //     <div className="flex flex-col items-center justify-center xl:flex-row">
    //       <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
    //         <div className="relative">
    //           <svg viewBox="0 0 52 24" fill="currentColor" className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
    //             <defs>
    //               <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
    //                 <circle cx="1" cy="1" r=".7" />
    //               </pattern>
    //             </defs>
    //             <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
    //           </svg>
    //           <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
    //             <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign up for updates</h3>
    //             <form onSubmit={handleSubmit} method="post">
    //               <div className="mb-1 sm:mb-2">
    //                 <label htmlFor="name" className="inline-block mb-1 font-medium">
    //                   Name
    //                 </label>
    //                 <input
    //                   onChange={handleChange}
    //                   placeholder="Full name"
    //                   required
    //                   type="text"
    //                   className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //                   id="fullName"
    //                   name="fullName"
    //                 />
    //               </div>
    //               <div className="mb-1 sm:mb-2">
    //                 <label htmlFor="name" className="inline-block mb-1 font-medium">
    //                   Name
    //                 </label>
    //                 <input
    //                   onChange={handleChange}
    //                   placeholder="email"
    //                   required
    //                   type="email"
    //                   className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //                   id="email"
    //                   name="email"
    //                 />
    //               </div>
    //               <div className="mb-1 sm:mb-2">
    //                 <label htmlFor="email" className="inline-block mb-1 font-medium">
    //                   E-mail
    //                 </label>
    //                 <input
    //                   onChange={handleChange}
    //                   placeholder="Password"
    //                   required
    //                   type="password"
    //                   className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //                   id="password"
    //                   name="password"
    //                 />
    //               </div>
    //               <div className="mt-4 mb-2 sm:mb-4">
    //                 <button
    //                   type="submit"
    //                   className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //                 >
    //                   Register
    //                 </button>
    //               </div>
    //               <p className="text-xs text-gray-600 sm:text-sm">We respect your privacy. Unsubscribe at any time.</p>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
