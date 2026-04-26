import Hero from "@/components/hero";
import AboutMagazinePreview from "@/components/aboutHome";
import ScrollVelocity from "@/components/layout/ornament";
import AnnouncementBar from "@/components/announcementBar";
export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <div className="width-full h-[25px] mt-10">
        
      </div>
      <Hero />
      <AboutMagazinePreview />
      <ScrollVelocity texts={['আমরা নিরাশার খনিতে', 'স্বপ্ন খনন করি']} 
        velocity={100}
        className="custom-scroll-text" />
    </div>
  );
}
