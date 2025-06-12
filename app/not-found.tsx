import Link from "next/link";
import React from "react";
import { GiGecko } from "react-icons/gi";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center h-[80dvh] text-slate-800">
      <div className="flex flex-col justify-center items-center">
        <GiGecko className="text-[150px]" />
        <p className="text-4xl font-coolvetica">
          Oops! Page doesn&#39;t exist!
        </p>
        <p>
          Lets Go Back!{" "}
          <Link href={"/"} className="text-blue-300">
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
