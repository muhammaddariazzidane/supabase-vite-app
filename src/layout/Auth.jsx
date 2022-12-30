import React, { useState } from "react";
import { supabase } from "../lib/client";

export default function Auth({ children }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // console.log(formData, "ini from");
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("verifikasi email kamu");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <div className="overflow-hidden ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
                  <defs>
                    <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
                </svg>
                <div className="relative bg-white rounded-tl-3xl rounded-br-3xl shadow-2xl p-7 sm:p-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
