"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    year: "2024",
    editors: ["Sohely Das", "Asmit Dey"],
    theme: "Reflection",
  },
  {
    year: "2023",
    editors: ["XYZ"],
    theme: "Identity",
  },
  {
    year: "2022",
    editors: ["ABC"],
    theme: "Beginnings",
  },
];

export default function EditorialLegacy() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 bg-rose-50">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center">
          Editorial Legacy
        </h2>

        <div className="space-y-10">

          {data.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={index}>

                {/* Row */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-baseline group"
                >
                  <span className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {item.year}
                  </span>

                  <span className="text-neutral-400 group-hover:text-neutral-700 transition">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Divider */}
                <div className="h-[1px] bg-neutral-300 mt-4" />

                {/* Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="mt-6 space-y-4 text-neutral-700"
                    >
                      <p>
                        <span className="text-neutral-500">Theme:</span>{" "}
                        {item.theme}
                      </p>

                      <div>
                        <span className="text-neutral-500">Editors:</span>
                        <ul className="mt-2 space-y-1">
                          {item.editors.map((editor, i) => (
                            <li key={i}>{editor}</li>
                          ))}
                        </ul>
                      </div>

                      <button className="mt-2 text-rose-600 font-medium hover:underline">
                        View Issue →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}