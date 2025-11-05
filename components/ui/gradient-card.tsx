"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative w-full h-full overflow-hidden rounded-2xl shadow-lg",
  {
    variants: {
      gradient: {
        orange: "bg-gradient-to-br from-orange-100 to-amber-200/50",
        gray: "bg-gradient-to-br from-slate-100 to-slate-200/50",
        purple: "bg-gradient-to-br from-purple-100 to-indigo-200/50",
        green: "bg-gradient-to-br from-emerald-100 to-teal-200/50",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  detailedDescription: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    { className, gradient, title, description, detailedDescription, ...props },
    ref
  ) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
      <div
        className="h-[400px] perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        ref={ref}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front Side */}
          <div
            className={cn(
              cardVariants({ gradient }),
              "absolute inset-0 backface-hidden",
              className
            )}
            style={{ backfaceVisibility: "hidden" }}
            {...props}
          >
            <div className="relative w-full h-full p-8 flex flex-col justify-center items-center text-center">
              <div className="z-10">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-sm">
                  {description}
                </p>
              </div>

              <div className="z-10 text-sm text-gray-600 font-medium mt-8">
                Click to learn more →
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className={cn(
              cardVariants({ gradient }),
              "absolute inset-0 backface-hidden",
              className
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            {...props}
          >
            <div className="relative w-full h-full p-8 flex flex-col justify-center">
              <div className="z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {detailedDescription}
                </p>
              </div>

              <div className="z-10 text-sm text-gray-600 font-medium mt-6">
                Click to flip back ←
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
