import React, { useState } from "react";
import { supabase } from "../lib/client";

export default function Auth({ children }) {
  return (
    <div className="w-full px-6 selection:bg-black selection:text-white">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="w-full max-w-x xl:px-8 xl:w-5/12">
          <div className="relative">
            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
              <defs>
                <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
            </svg>
            <div className="relative origin-center lg:mt-16 mt-36 bg-white rounded-tl-3xl rounded-br-3xl shadow-2xl p-7 sm:p-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
