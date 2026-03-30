import type { Metadata } from 'next'
import Link from 'next/link'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Techniks India | Industrial Solutions & Services',
    description:
      'Techniks India offers reliable industrial solutions, machinery services, and engineering expertise in Bangalore.',
    keywords: [
      'Techniks India',
      'Industrial services Bangalore',
      'Engineering solutions',
      'Peenya industrial area',
    ],
  }
}

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-mono">Techniks India</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering precision engineering solutions and industrial services tailored for modern
            manufacturing needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition font-medium font-mono"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition font-mono"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 font-mono">Company Overview</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Established in 2006, Techniks India is a trusted name in Bangalore’s Peenya Industrial
          Area, specializing in flexible metal hose manufacturing and industrial piping solutions.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4 max-w-3xl">
          Our commitment to quality and precision engineering has enabled us to serve a wide range
          of industries, making us a dependable partner for businesses.
        </p>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 font-mono text-center">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Manufacturing Units',
              'Hydraulic Systems',
              'Industrial Plants',
              'Construction & Infrastructure',
              'Oil & Gas Applications',
              'Automotive & Engineering',
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                <p className="font-mono">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 font-mono text-center">Products & Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            'Flexible Metal Hose Manufacturing',
            'Hydraulic Tube Fittings',
            'Pipe & Valve Supply',
            'Forged Fittings',
            'Industrial Hose Solutions',
            'Custom Engineering Solutions',
          ].map((s, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="font-mono text-lg mb-2">{s}</h3>
              <p className="text-gray-600 text-sm">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            'Established Since 2006',
            'Trusted by Local Industries',
            'Wide Product Range',
            'Customer-First Approach',
          ].map((item, i) => (
            <div key={i}>
              <p className="font-mono text-lg text-yellow-500">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 font-mono">Location & Accessibility</h2>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Located in Peenya Industrial Area, Bangalore, Techniks India is easily accessible and
          situated near Peenya Police Station.
        </p>
        <p className="text-gray-600 mt-4">
          Address: 1st Stage, 4th Cross, Peenya Industrial Area, Bangalore
        </p>

        {/* Google Maps Embed */}
        <div className="mt-8 rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Techniks+India+Peenya&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-mono text-lg">Working Hours</p>
            <p className="text-gray-600">10:00 AM – 6:00 PM</p>
          </div>
          <div>
            <p className="font-mono text-lg">Payment Modes</p>
            <p className="text-gray-600">UPI, Net Banking, Cards, Cash</p>
          </div>
          <div>
            <p className="font-mono text-lg">Established</p>
            <p className="text-gray-600">2006</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 font-mono">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Have a requirement? Reach out to us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:techniks@gmail.com"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition font-mono"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919845373462"
              target="_blank"
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition font-mono"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
