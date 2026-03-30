import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Contact Techniks India | Bangalore',
    description:
      'Get in touch with Techniks India for industrial solutions, engineering services, and product inquiries.',
  }
}

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Reach out to Techniks India for inquiries, support, or business partnerships.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6 font-mono">Get in Touch</h2>

          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-mono">Address:</span>
              <br />
              1st Stage, 4th Cross,
              <br />
              Peenya Industrial Area,
              <br />
              Bangalore
            </p>

            <p>
              <span className="font-mono">Working Hours:</span>
              <br />
              10:00 AM – 6:00 PM
            </p>

            <p>
              <span className="font-mono">Payment Modes:</span>
              <br />
              UPI, Net Banking, Cards, Cash
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:techniks@gmail.com"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-mono text-center hover:bg-yellow-400 transition"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/919845373462"
              target="_blank"
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-mono text-center hover:bg-yellow-500 hover:text-black transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Techniks+India+Peenya&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
