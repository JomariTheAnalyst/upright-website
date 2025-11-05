"use client";

import React from "react";
import { TextRotate } from "@/components/ui/text-rotate";
import { cn } from "@/lib/utils";

interface WordLoaderProps {
  words?: string[];
  className?: string;
}

const WordLoader: React.FC<WordLoaderProps> = ({
  words = ["Think", "Create", "Deliver", "Lead", "Upright"],
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <TextRotate
        texts={words}
        mainClassName="text-4xl md:text-5xl lg:text-6xl font-black text-black overflow-hidden justify-center"
        staggerFrom="first"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.04}
        splitLevelClassName="overflow-hidden"
        elementLevelClassName="inline-block"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={1600}
      />
    </div>
  );
};

export default WordLoader;
