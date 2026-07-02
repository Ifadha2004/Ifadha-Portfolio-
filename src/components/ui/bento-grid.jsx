"use client";

import React from "react";
import { cn } from "../../lib/utils";

export function BentoGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-8 rounded-3xl overflow-hidden transition-all duration-500",
            "border border-white/10 bg-[#130f2a]/40 backdrop-blur-md",
            "hover:border-[#a993fe]/50 hover:shadow-[0_0_40px_rgba(169,147,254,0.15)]",
            "hover:-translate-y-1 will-change-transform",
            // Dynamic column spanning logic
            item.colSpan === 3 ? "md:col-span-3" : 
            item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
          )}
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,147,254,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[#a993fe]/50 transition-colors shadow-inner">
                {item.icon}
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full bg-[#a993fe]/10 text-[#a993fe] border border-[#a993fe]/20">
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className={cn(
                "font-bold text-white tracking-tight",
                item.colSpan === 3 ? "text-3xl" : "text-xl"
              )}>
                {item.title}
                {item.meta && (
                  <span className="ml-3 text-sm text-[#a993fe] font-medium opacity-80 italic">
                    — {item.meta}
                  </span>
                )}
              </h3>

              <p className={cn(
                "text-gray-400 leading-relaxed",
                item.colSpan === 3 ? "text-lg max-w-4xl" : "text-sm"
              )}>
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-[#a993fe]/30 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span
                onClick={() => item.onViewDetails?.(item)}
                role={item.onViewDetails ? "button" : undefined}
                tabIndex={item.onViewDetails ? 0 : undefined}
                onKeyDown={(e) => {
                  if (item.onViewDetails && (e.key === "Enter" || e.key === " ")) {
                    item.onViewDetails(item);
                  }
                }}
                className={cn(
                  "text-xs text-[#a993fe] font-bold transition-all duration-300",
                  item.onViewDetails
                    ? "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 cursor-pointer hover:text-white"
                    : "opacity-0 pointer-events-none"
                )}
              >
                {item.cta || "View Details →"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}