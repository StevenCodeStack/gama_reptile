"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="text-primary text-base sm:text-2xl flex items-center font-cocogoose"
    >
      {children}
    </button>
  );
};

export default BackButton;
