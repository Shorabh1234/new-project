"use client";
import React, { useState, useRef, useEffect } from "react";
import { initialBadges } from "./common/Helper";
import Image from "next/image";
import { motion } from "framer-motion";

const Softer = () => {
  const [badges, setBadges] = useState(initialBadges);
  const [draggingId, setDraggingId] = useState(null);
  const containerRef = useRef(null);

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const badgeWidth = 100;
  const badgeHeight = 40;

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Collision detection
  const isOverlapping = (a, b) => {
    return !(
      a.x + badgeWidth < b.x ||
      a.x > b.x + badgeWidth ||
      a.y + badgeHeight < b.y ||
      a.y > b.y + badgeHeight
    );
  };

  // Keep inside container
  const clampPosition = (x, y) => {
    let newX = Math.max(0, Math.min(x, containerSize.width - badgeWidth));
    let newY = Math.max(0, Math.min(y, containerSize.height - badgeHeight));
    return { x: newX, y: newY };
  };

  const handleMouseDown = (id) => {
    setDraggingId(id);
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const handleMouseMove = (e) => {
    if (draggingId !== null && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      setBadges((prev) => {
        let updated = prev.map((badge) =>
          badge.id === draggingId
            ? {
                ...badge,
                ...clampPosition(
                  offsetX - badgeWidth / 2,
                  offsetY - badgeHeight / 2
                ),
              }
            : badge
        );

        const current = updated.find((b) => b.id === draggingId);

        updated = updated.map((badge) => {
          if (badge.id !== draggingId && isOverlapping(current, badge)) {
            let newPos;

            // Try pushing sideways first
            if (current.x < badge.x) {
              newPos = clampPosition(badge.x + badgeWidth + 10, badge.y);
            } else {
              newPos = clampPosition(badge.x - badgeWidth - 10, badge.y);
            }

            // If still overlapping, push downward
            if (isOverlapping(current, { ...badge, ...newPos })) {
              newPos = clampPosition(badge.x, badge.y + badgeHeight + 10);
            }

            return { ...badge, ...newPos };
          }
          return badge;
        });

        return updated;
      });
    }
  };

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-6 sm:py-8 md:py-10 lg:py-12 grid lg:grid-cols-2 gap-10"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Left Content */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#09090B]">
          A softer take on style.
        </h2>
        <p className="text-[#535862] mt-3 leading-[170%] text-xs sm:text-sm md:text-base">
          We’re here for effortless fashion that fits your mood — light, calm,
          and just a little playful. Inspired by pastel palettes, natural
          textures, and the kind of pieces you’ll reach for every day.
        </p>

        {/* Draggable Badges */}
        <div
          ref={containerRef}
          className="relative mt-8 border border-dashed border-gray-300 rounded-xl overflow-hidden w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px]"
        >
          {badges.map((badge) => (
            <motion.span
              key={badge.id}
              onMouseDown={() => handleMouseDown(badge.id)}
              className="
                absolute 
                px-2 py-1 text-[10px]     /* 👈 default up to 320px */
                sm:px-3 sm:py-1.5 sm:text-xs 
                md:px-4 md:py-2 md:text-sm 
                lg:px-5 lg:py-2.5 lg:text-base 
                rounded-full font-medium 
                shadow-sm md:shadow 
                cursor-grab active:cursor-grabbing select-none
              "
              style={{ backgroundColor: badge.color }}
              animate={{ left: badge.x, top: badge.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {badge.text}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/images/png/serene-dress.png"
          alt="Woman"
          width={700}
          height={756}
          className="w-full max-w-[700px] h-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Softer;
