import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-accent rounded-2xl py-10 px-5 relative mt-10">
        <h1 className="font-coolvetica absolute tracking-widest -top-5 left-1/2 -translate-x-1/2 text-nowrap bg-primary px-5 py-2 rounded-2xl md:text-2xl">
          CARA ORDERNYA GIMANA?
        </h1>
        <ul className="text-black list-decimal px-5 text-sm sm:text-lg md:text-xl">
          <li>
            Scroll ke bagian bawa, lalu klik{" "}
            <span className="font-bold">&quot;Available&quot;</span>
          </li>
          <li>
            Scroll ke bagian bawa, lalu klik{" "}
            <span className="font-bold">&quot;Available&quot;</span>
          </li>
          <li>
            Scroll ke bagian bawa, lalu klik{" "}
            <span className="font-bold">&quot;Available&quot;</span>
          </li>
          <li>
            Scroll ke bagian bawa, lalu klik{" "}
            <span className="font-bold">&quot;Available&quot;</span>
          </li>
        </ul>
      </div>
      <Link href="/order/tersedia">
        <div className="text-center font-coolvetica tracking-widest bg-primary rounded-2xl py-4 w-full mt-5 sm:text-3xl">
          AVAILABLE
        </div>
      </Link>
    </>
  );
};

export default page;
