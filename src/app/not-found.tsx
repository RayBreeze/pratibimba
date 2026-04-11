import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-rose-50 text-neutral-900 flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        {/* Soft 404 */}
        <p className=" tracking-widest text-neutral-500 text-3xl">
          ERROR 404
        </p>

        {/* Editorial Text */}
        <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
          Perhaps it was never written,
          <br />
          or it belongs to another story.
        </p>

        {/* Bengali touch */}
        <p className="mt-3 text-neutral-500 italic">
          হয়তো এই পৃষ্ঠা এখনো লেখা হয়নি।
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-5 py-2.5 rounded-xl bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition"
          >
            Return Home →
          </Link>
        </div>

      </div>

    </main>
  );
}