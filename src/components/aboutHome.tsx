import Image from "next/image";

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

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/2025P.jpg"
            alt="Magazine Cover"
            width={450}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
