'use client';
import EditorialLegacy from "@/components/editorialLegacy";
import FlowingMenu from "@/components/flowingMenu";

const demoItems = [
  { link: 'Archive/2023', text: '2023', image: 'https://res.cloudinary.com/dskdl70cq/image/upload/v1771950330/Sayan_Samanta_1st_CSE_3_ouchda.jpg' },
  { link: 'Archive/2024', text: '2024', image: 'https://res.cloudinary.com/dskdl70cq/image/upload/v1771950285/Anuska_Guha_Thakurta_1st_CT_5_kjnjjz.jpg' },
  { link: 'Archive/2025', text: '2025', image: 'https://res.cloudinary.com/dskdl70cq/image/upload/v1771950280/Anuska_Guha_Thakurta_1st_CT_1_hp93gs.jpg' }
];

export default function ArchivePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 text-center overflow-hidden bg-neutral-900">
        <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://res.cloudinary.com/dskdl70cq/video/upload/q_auto/f_auto/v1775922317/5013993-hd_1920_1080_25fps_l9gjiw.mp4" type="video/mp4" />
  </video>
        
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl tracking-tight">
            Every edition tells a story
            <br />
            <span className="text-rose-600">of its time</span>
          </h1>
        </div>
      </section>


      {/* Meaning Section */}
      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              The Archive
            </h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Each issue of Pratibimba is a reflection of a moment in time.
              A collection of thoughts, voices, and creativity preserved forever.
            </p>

            <p>
              Our archive is not just a collection of magazines — 
              it is a journey through evolving ideas and expression.
            </p>
          </div>
        </div>
      </section>


      {/* Editorial Legacy Section ⭐ */}
      <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
  textColor="#ffffff"
  bgColor="#ec003f"
  marqueeBgColor="#ffffff"
  marqueeTextColor="#060010"
  borderColor="#ffffff"
/>
</div>


      {/* Closing Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            The past speaks,
            <br />
            <span className="text-rose-600">through every page.</span>
          </h2>
        </div>
      </section>

    </main>
  );
}