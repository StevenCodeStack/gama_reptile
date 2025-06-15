import React from "react";
import HomeView from "./HomeView";
import AboutView from "./AboutView";

const HomePage = () => {
  return (
    <div className="flex flex-col relative gap-10">
      <div className="pt-8 flex flex-col gap-10">
        <HomeView />
        <AboutView />
      </div>
    </div>
  );
};

export default HomePage;
