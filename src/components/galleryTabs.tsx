"use client";

import { useState } from "react";
import { galleryData } from "../../lib/galleryData";
import LightGalleryWrapper from "./lightgallery";

interface GalleryTabsProps {
  illustrations: string[];
  photographs: string[];
}

export default function GalleryTabs({
  illustrations,
  photographs,
}: GalleryTabsProps) {
  const [active, setActive] = useState<keyof typeof galleryData>("illustrations");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="flex gap-12 border-b border-neutral-300 mb-12">

        <button
          onClick={() => setActive("illustrations")}
          className={`pb-4 relative transition ${
            active === "illustrations"
              ? "text-rose-500"
              : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          Illustrations
          {active === "illustrations" && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-rose-500"></span>
          )}
        </button>

        <button
          onClick={() => setActive("photographs")}
          className={`pb-4 relative transition ${
            active === "photographs"
              ? "text-rose-500"
              : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          Photographs
          {active === "photographs" && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-rose-500"></span>
          )}
        </button>

      </div>

      <LightGalleryWrapper images={galleryData[active]} />

    </div>
  );
}