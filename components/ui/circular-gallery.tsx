import React, { useState, useEffect, useRef, HTMLAttributes } from "react";

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    { items, className, radius = 600, autoRotateSpeed = 0.035, ...props },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
    const animationFrameRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle mouse/touch drag start
    const handleDragStart = (clientX: number) => {
      setIsDragging(true);
      setDragStart({ x: clientX, rotation });
    };

    // Handle mouse/touch drag move
    const handleDragMove = (clientX: number) => {
      if (!isDragging) return;

      const deltaX = clientX - dragStart.x;
      const rotationDelta = deltaX * 0.5; // Sensitivity factor
      setRotation(dragStart.rotation + rotationDelta);
    };

    // Handle mouse/touch drag end
    const handleDragEnd = () => {
      setIsDragging(false);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        handleDragStart(e.touches[0].clientX);
      }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        handleDragMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      handleDragEnd();
    };

    // Global mouse move and up listeners
    useEffect(() => {
      if (!isDragging) return;

      const handleGlobalMouseMove = (e: MouseEvent) => {
        handleDragMove(e.clientX);
      };

      const handleGlobalMouseUp = () => {
        handleDragEnd();
      };

      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }, [isDragging, dragStart]);

    // Effect for auto-rotation when not dragging and not hovered
    useEffect(() => {
      const autoRotate = () => {
        if (!isDragging && !isHovered) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isDragging, isHovered, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="region"
        aria-label="Circular 3D Gallery - Drag to rotate"
        className={cn(
          "relative w-full h-full flex items-center justify-center select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
          className
        )}
        style={{ perspective: "2000px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
            transition: isDragging ? "none" : "transform 0.1s linear",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute w-[300px] h-[400px] pointer-events-none"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-150px",
                  marginTop: "-200px",
                  opacity: opacity,
                  transition: "opacity 0.3s ease-out",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-border bg-card/70 dark:bg-card/30 backdrop-blur-lg transition-transform duration-300 hover:scale-105 pointer-events-auto">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: item.photo.pos || "center" }}
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white transition-all duration-300 group-hover:from-black/90">
                    <h2 className="text-xl font-bold transition-transform duration-300 group-hover:translate-y-[-2px]">
                      {item.common}
                    </h2>
                    <em className="text-sm italic opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      {item.binomial}
                    </em>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
