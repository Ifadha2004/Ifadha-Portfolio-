import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Outer vibrant glow */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-0 blur-[140px] opacity-95 transition duration-700",
          "rounded-[2rem]",
          "mix-blend-screen",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ffcc,transparent),radial-gradient(circle_farthest-side_at_100%_0,#a561ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc800,transparent),radial-gradient(circle_farthest-side_at_0_0,#4aa7ff,#141316)]"
        )}
      />

      {/* Soft layer (adds richness) */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-0 blur-[60px] opacity-60",
          "rounded-[2rem]",
          "bg-[radial-gradient(circle_farthest-corner_at_50%_50%,#ffffff11,#ffffff05,transparent)]"
        )}
      />

      {/* Child content if any */}
      {children && <div className={cn("relative z-10", className)}>{children}</div>}
    </div>
  );
};
