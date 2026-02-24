"use client";
import ContactMap from "@/components/contactmap";
import GalleryTabs from "@/components/galleryTabs";
import LightGalleryWrapper from "@/components/lightgallery";
import { galleryData } from "../../../lib/galleryData";
export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-5xl leading-tight tracking-tight">
          Gallery
          <br />
          <span className="text-rose-600">Every frame and stroke tells a story</span>
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
