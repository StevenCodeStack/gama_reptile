import React from "react";

const InfoComponent = ({
  children,
  even,
  title,
}: {
  children: React.ReactNode;
  even: boolean;
  title: string;
}) => {
  return (
    <div
      className={`flex ${
        even && "md:flex-row-reverse"
      } flex-col md:flex-row justify-center items-center min-h-fit gap-5 text-lg`}
    >
      {/* Text */}
      <div className="relative w-full md:max-w-[60%] rounded-2xl h-1/2 md:h-[80%] bg-accent p-6 pt-10 text-black">
        <h1
          className={`absolute text-white -top-5 ${
            even ? "right-10" : "left-10"
          } text-2xl md:text-4xl font-coolvetica px-8 py-2 rounded-2xl bg-primary tracking-widest`}
        >
          {title}
        </h1>
        {children}
      </div>
      <div className="flex grow w-full md:w-0 md:h-auto h-[200px] md:min-h-[300px] bg-accent border-6 border-primary rounded-2xl"></div>
    </div>
  );
};

export default InfoComponent;
