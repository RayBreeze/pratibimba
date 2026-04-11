"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    text: "Submissions open for the Pratibimba 4.0",
    link: "mailto:pratibimba.gcect@gmail.com",
    cta: "Submit now",
  },
  {
    text: "Explore our latest edition.",
    link: "/Archive/2025",
    cta: "Read now",
  },
  {
    text: "Join the Pratibimba community.",
    link: "/Contact",
    cta: "Get involved",
  },
  {
    text: "Confessions are live… and it’s getting interesting.",
    link: "https://forms.gle/Xmg3MkBq55UcuANg8",
    cta: "Confess Now",
  }
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = announcements[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % announcements.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full bg-rose-700 text-white text-xs sm:text-sm px-4 py-1 flex items-center justify-center relative">

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-4 hover:opacity-70 transition"
      >
        ‹
      </button>

      {/* Content */}
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center gap-1 flex-wrap"
          >
            {/* Message */}
            <span className="hidden sm:inline">
              {current.text}
            </span>

            <span className="sm:hidden">
              {current.text.split(" ")[0]}
            </span>

            {/* CTA */}
            <Link
              href={current.link}
              className="font-medium inline-flex items-center group ml-1"
            >
              {current.cta}
              <span className="ml-1 hidden sm:inline transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-3 sm:right-4 hover:opacity-70 transition"
      >
        ›
      </button>

    </div>
  );
}