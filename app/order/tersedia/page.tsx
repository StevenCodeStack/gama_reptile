import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="font-coolvetica tracking-widest font-bold text-center w-fit mx-auto bg-primary text-2xl md:text-4xl rounded-2xl px-10 md:px-60 py-3">
        AVAILABLE
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        <Link href={"/order/kalsium"}>
          <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-85 xl:h-100">
            <div className="bg-accent w-full h-full"></div>
            <h1 className=" text-center py-3 bg-primary rounded-t-2xl text-3xl absolute bottom-0 w-full">
              Kalsium
            </h1>
          </div>
        </Link>
        <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-85 xl:h-100">
          <div className="bg-accent w-full h-full"></div>
          <h1 className=" text-center py-3 bg-primary rounded-t-2xl text-3xl absolute bottom-0 w-full">
            Gutload
          </h1>
        </div>
        <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-85 xl:h-100">
          <div className="bg-accent w-full h-full"></div>
          <h1 className=" text-center py-3 bg-primary rounded-t-2xl text-3xl absolute bottom-0 w-full">
            Kandang Full Set
          </h1>
          <h1 className="absolute right-3 bottom-17 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
            25K
          </h1>
        </div>
        <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-85 xl:h-100">
          <div className="bg-accent w-full h-full"></div>
          <h1 className=" text-center py-3 bg-primary rounded-t-2xl text-3xl absolute bottom-0 w-full">
            Perlite Media Tetas
          </h1>
          <h1 className="absolute right-3 bottom-17 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
            10K
          </h1>
        </div>
      </div>
    </>
  );
};

export default page;
