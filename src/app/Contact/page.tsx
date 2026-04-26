import ContactMap from "@/components/contactmap";
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
    <source src="https://res.cloudinary.com/dskdl70cq/video/upload/v1777219155/8858315-uhd_3840_2160_24fps_bvydmc.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl text-white">
    <h1 className="text-5xl md:text-5xl leading-tight tracking-tight">
      Let's Connect
      <br />
      <span className="text-rose-600">Every Reflection begins with a message</span>
    </h1>
  </div>

</section>

      {/* Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-10">
              Reach Us
            </h2>

            <div className="space-y-8 text-neutral-700">

              <div>
                <h3 className="text-lg font-semibold text-rose-600">
                  Email
                </h3>
                <p className="mt-2">
                  pratibimba.gcect@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-rose-600">
                  Address
                </h3>
                <p className="mt-2 leading-relaxed">
                  Government College of Engineering and Ceramic Technology<br />
                  73, Abinash Chandra Banerjee Lane<br />
                  Kolkata 700 010, West Bengal, India
                </p>
              </div>
            </div>
          </div>
          {/* Right Map */}
    <div className="w-full">
      <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-lg border border-rose-100">
        <iframe
          src="https://maps.google.com/maps?q=Government%20College%20of%20Engineering%20and%20Ceramic%20Technology&hl=en&z=16&output=embed"
          className="w-full h-full"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
    <ContactMap />
        </div>
      </section>

      {/* Closing Line */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-light">
            Every voice deserves a space,
            <br />
            <span className="text-rose-600">Pratibimba is always listening.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
