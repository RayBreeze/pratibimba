"use client";
import ContactMap from "@/components/contactmap";
import GalleryTabs from "@/components/galleryTabs";
import LightGalleryWrapper from "@/components/lightgallery";
import { galleryData } from "../../../lib/galleryData";
export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">

   <section className="relative min-h-[70vh] flex items-center justify-center px-6 text-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://res.cloudinary.com/dskdl70cq/video/upload/v1777218330/13904517_1920_1080_30fps_eswq3b.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-white">
    <h1 className="text-5xl md:text-7xl leading-tight tracking-tight">
      Gallery
    </h1>
  </div>

</section>
  


    <GalleryTabs
      illustrations={galleryData.illustrations}
      photographs={galleryData.photographs}
    />
  
      
      {/* Closing Line */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-light">
            Moments that mirror,
            <br />
            <span className="text-rose-600">Who we are</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
