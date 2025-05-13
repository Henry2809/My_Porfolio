"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode; // Change to ReactNode to allow anything
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Ensure children is valid and handle appropriately
  if (!children) {
    throw new Error("TextReveal: children must be provided");
  }

  // Wrap all children in a "span" to apply the same animation logic
  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
           "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {childrenArray.map((child, i) => {
            const start = i / childrenArray.length;
            const end = start + 1 / childrenArray.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {child}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]); // From 0 opacity to 1 opacity
  const initialOpacity = 0; // Start with opacity 0 (fully hidden)

  return (
    <span className="xl:lg-3 relative lg:mx-1.5">
      {/* Initial opacity 0 */}
      <motion.span
        style={{ opacity: opacity || initialOpacity }} // Apply the scroll-triggered opacity
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};


