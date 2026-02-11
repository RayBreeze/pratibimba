import Hero from "@/components/hero";
import AboutMagazinePreview from "@/components/aboutHome";
import ScrollVelocity from "@/components/layout/ornament";
export default function Home() {
  return (
    <div>
      <div className="width-full h-[60px] mt-10">
        
      </div>
      <Hero />
      <AboutMagazinePreview />
      <ScrollVelocity texts={['আমরা নিরাশার খনিতে', 'স্বপ্ন খনন করি']} 
        velocity={100}
        className="custom-scroll-text" />
    </div>
  );
}
