"use client";

import dynamic from "next/dynamic";
import "lightgallery/css/lightgallery.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

export default function LightGalleryWrapper({ images }: { images: string[] }) {
  return (
    <LightGallery
      elementClassNames="columns-1 sm:columns-2 md:columns-3 gap-4"
    >
      {images.map((src, index) => (
        <a
          key={index}
          href={src}
          className="mb-4 block break-inside-avoid"
        >
          <img
            src={src}
            className="w-full transition-transform duration-500 ease-out hover:scale-95 rounded-2xl"
            alt=""
          />
        </a>
      ))}
    </LightGallery>
  );
}