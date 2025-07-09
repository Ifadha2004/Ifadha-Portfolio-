"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-white-900 backdrop-filter backdrop-blur-lg bg-opacity-0 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-white">
          Inaam.JR
        </CardItem> */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-zinc-300">
          Code → Coffee → Grind
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="../images/hero1.jpg"
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white">
            Try now →
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="a"
            href="https://www.linkedin.com/in/inaam-ahamed-2817b836a/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold">
            LinkedIn →
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}