import React from "react";

const HomeView = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-h-[50dvh] lg:h-[75dvh] gap-5">
      <h1 className="text-center font-bold md:text-left md:max-w-[60%] font-cocogoose text-2xl md:text-5xl lg:text-[75px] xl:text-[85px]/[1] text-secondary">
        SELAMAT DATANG DI GAMAREPTILE
      </h1>
      <div className="flex-grow aspect-square min-h-50 min-w-50 bg-accent rounded-[50px] border-4 border-primary"></div>
    </div>
  );
};

export default HomeView;
