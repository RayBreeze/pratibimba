export default function AboutPage() {
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
    <source src="/Kolkata.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-white">
    <h1 className="text-5xl md:text-7xl leading-tight tracking-tight">
      We are not just a magazine
      <br />
      <span className="text-rose-600">We are a reflection</span>
    </h1>
  </div>

</section>



      {/* Meaning Section */}
      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              What is <span className="text-rose-600">Pratibimba</span>?
            </h2>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-rose-600">প্রতিবিম্ব</span> কী?
            </h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              “প্রতিবিম্ব” means reflection. 
              A reflection of youth. A reflection of thought. 
              A reflection of the times we live in.
            </p>

            <p>
              Through words, art, and expression, 
              we attempt to capture voices that deserve to be heard.
            </p>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Our Philosophy
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-2xl font-semibold text-rose-600">Expression</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Every individual holds a story. We provide the space where those
              stories can breathe and exist without fear.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-600">Thought</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Literature is not decoration. It is reflection, resistance,
              and revelation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-600">Courage</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              To write is to reveal oneself. We honor that bravery and
              encourage authenticity.
            </p>
          </div>

        </div>
      </section>


      {/* 
      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Our Journey
          </h2>

          <div className="space-y-12 border-l-2 border-rose-600 pl-8">
            
            <div>
              <h3 className="text-xl font-semibold">Founded</h3>
              <p className="text-neutral-600">
                A group of passionate minds came together with a shared vision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">First Publication</h3>
              <p className="text-neutral-600">
                The first issue marked the beginning of a new creative voice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Growing Community</h3>
              <p className="text-neutral-600">
                Writers, artists, and thinkers joined to shape a collective identity.
              </p>
            </div>

          </div>
        </div>
      </section>
      */}

      {/* Principal's Directive */}
<section className="py-24 px-6 bg-rose-50">
  <div className="max-w-4xl mx-auto">
    
    <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight text-center">
      From Principal’s Desk
    </h2>

    <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
      <p>
        The Government College of Engineering and Ceramic technology (GCECT) was established in 1941. Since then, it has emerged as a center of excellence in the field of Ceramic Technology, Computer Science and Engineering and Information Technology. The alumni of this institute are spread over the length and breadth of the world.
The institute has always focused on the development of inner talents of an individual. It has also aimed at arousing the conscience of all members of family of the institute. We strongly believe in the great philosophy of Swami Vivekananda and His quote, “Education is the manifestation of perfection already in man.” To nurture talents of the students of the institute, all possible initiatives are taken. There are periodical events of co-curricular and extracurricular activities organized. To explore the literary skills of the member of GCECT family, a wall magazine has been published with regular content development and updating. But this showcase was confined to the four walls of the institute.
Now there is a necessity to open up the door of the institute and spread the artistic talents of students to the world. In view of this, the editorial board of the college magazine is bringing out regularly the issue of the college magazine and has been christened “PRATIBIMBA”.
Every page of PRATIBIMBA will reflect the mind of the students of the institute. 
      </p>

      <p>
        This, in turn, will enrich the minds of million readers of this world.
I am grateful to the members of the editorial board of PRATIBIMBA and all those who are involved in their untiring effort to publish PRATIBIMBA in hard form.
I wish this mouthpiece, PRATIBIMBA, of the Government College of Engineering and Ceramic Technology a grand success.
      </p>
    </div>

    <div className="mt-12 text-right">
      <p className="font-semibold">Prof. Dr. Krishnendu Chakrabarty</p>
      <p className="text-neutral-600">Principal</p>
      <p className="text-neutral-600">Government College of Engineering and Ceramic Technology</p>
    </div>

  </div>
</section>
{/* Meet the Team */}
<section className="py-28 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Meet the Team
      </h2>
      <p className="mt-4 text-neutral-600 text-lg">
        The minds behind Pratibimba.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Sohely Das</h3>
        <p className="text-rose-600 font-medium">Chief Editor</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

      {/* Member 2 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="Editor"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Asmit Dey</h3>
        <p className="text-rose-600 font-medium">Chief Editor</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Curates stories that reflect youth, courage, and thought.
        </p>
      </div>

      {/* Member 3 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="Designer"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Sougata Mondal</h3>
        <p className="text-rose-600 font-medium">Illustrator</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Designs visual narratives that complement written expression.
        </p>
      </div>

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Sougata Sanyal</h3>
        <p className="text-rose-600 font-medium">Illustrator</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Shibangi Saha</h3>
        <p className="text-rose-600 font-medium">Illustrator</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Sohini Sarkar</h3>
        <p className="text-rose-600 font-medium">Illustrator</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Pratik Halder</h3>
        <p className="text-rose-600 font-medium">Illustrator</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

      {/* Member 1 */}
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg bg-rose-300">
          <img
            src="/avatar-default.svg"
            alt="President"
            className="w-50 h-50 object-contain"
          />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Samman Das</h3>
        <p className="text-rose-600 font-medium">Designer & IT Systems</p>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
          Believes literature is a mirror to society and a voice of change.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Closing Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            In every word,
            <br />
            <span className="text-rose-600">we see ourselves.</span>
          </h2>
        </div>
      </section>

    </main>
  );
}
