import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="font-coolvetica tracking-widest text-center w-fit mx-auto bg-primary text-2xl md:text-4xl rounded-2xl px-10 md:px-60 py-3">
        AVAILABLE
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        <Link href={"/order/kalsium"}>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square"></div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Kalsium
            </h1>
          </div>
        </Link>

        <Link href={"/order/gutload"}>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square"></div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Gutload
            </h1>
          </div>
        </Link>

        <Link href={"/order/kandang"}>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square relative">
              <h1 className="absolute right-3 bottom-3 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
                25K
              </h1>
            </div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Kandang Full Set
            </h1>
          </div>
        </Link>

        <Link href={"/order/perlite"}>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square relative">
              <h1 className="absolute right-3 bottom-3 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
                10K
              </h1>
            </div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Perlite Media Tetas
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default page;
