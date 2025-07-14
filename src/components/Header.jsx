"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import { HiAcademicCap } from "react-icons/hi2";
import { BiAbacus } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <BiAbacus lassName="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
    {
      name: "Education",
      link: "#experience",
      icon: <HiAcademicCap lassName="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <GrCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
