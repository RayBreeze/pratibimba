'use client';
import Image from "next/image";
import { CldImage } from "next-cloudinary";

export default function AboutMagazinePreview() {
  return (
    <section className="w-full bg-[#FEEEEE] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-4xl font-serif mb-6 text-gray-900">
            About the Magazine
          </h2>

          <p className="text-lg font-playfair leading-relaxed text-gray-700 mb-4">
            Pratibimba is the creative voice of Government College of Engineering and Ceramic Technology.
            The magazine reflects stories, art, ideas, and perspectives from our community of students, 
            faculty and all the wellwishers of our college. It is a space where writers, designers, and 
            thinkers come together to express and inspire.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Each issue captures moments, emotions, and creativity that define
            our generation.
          </p>
        </div>

       {/* RIGHT — FLIPBOOK */}
<div className="flex justify-center w-full">
  <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
    <iframe
      src="https://heyzine.com/flip-book/04400441db.html"
      className="w-full h-full"
      allowFullScreen
      allow="clipboard-write"
      style={{ border: 0 }}
    />
  </div>
</div>

      </div>
    </section>
  );
}
