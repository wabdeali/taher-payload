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
      <section className="lg:grid lg:h-screen lg:place-content-center relative bg-gray-950">
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
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl text-white">
              Techniks India
            </h1>

            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-gray-200">
              Delivering precision engineering solutions and industrial services tailored for modern
              manufacturing needs. Contact Us
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/products"
              >
                Products
              </Link>

              <Link
                className="inline-block rounded border px-5 py-3 font-medium shadow-sm transition-colors border-gray-400 text-gray-100 hover:bg-gray-800 hover:text-white"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Company Overview</h2>

              <p className="mt-4 text-pretty text-gray-700">
                Established in 2006, Techniks India is a trusted name in Bangalore’s Peenya
                Industrial Area, specializing in flexible metal hose manufacturing and industrial
                piping solutions.
              </p>
              <p className="mt-4 text-pretty text-gray-700">
                Our commitment to quality and precision engineering has enabled us to serve a wide
                range of industries, making us a dependable partner for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900" data-theme="dark">
        <div className="mx-auto max-w-7xl px-4 bg-gray-900 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
              Industries We Serve
            </h2>

            <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
              Supporting a wide range of industries with reliable components and
              precision-engineered solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Manufacturing Units */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M4.5 21V9l7.5-6 7.5 6v12M9 21v-6h6v6"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Manufacturing Units
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Reliable solutions for production lines and factory automation systems.
              </p>
            </div>

            {/* Hydraulic Systems */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 8h10M4 16h7" />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Hydraulic Systems
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Components and support tailored for high-pressure hydraulic operations.
              </p>
            </div>

            {/* Industrial Plants */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M6 21V10l6-4 6 4v11"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Industrial Plants
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                End-to-end support for large-scale industrial operations and facilities.
              </p>
            </div>

            {/* Construction & Infrastructure */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l7-4 7 4v14"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Construction & Infrastructure
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Durable solutions built for demanding construction environments.
              </p>
            </div>

            {/* Oil & Gas Applications */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M8 7h8M6 11h12M4 15h16"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Oil & Gas Applications
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Engineered components suited for critical and high-risk environments.
              </p>
            </div>

            {/* Automotive & Engineering */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13h18M5 13l2-5h10l2 5M6 13v5m12-5v5"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Automotive & Engineering
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Supporting automotive and engineering sectors with precision parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
              Products & Services
            </h2>

            <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
              Comprehensive solutions designed to meet the evolving demands of industrial
              applications.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Flexible Metal Hose Manufacturing */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c4-6 12 6 16 0" />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Flexible Metal Hose Manufacturing
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>

            {/* Hydraulic Tube Fittings */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M7 8h10M7 16h10" />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Hydraulic Tube Fittings
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>

            {/* Pipe & Valve Supply */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v12" />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Pipe & Valve Supply
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>

            {/* Forged Fittings */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3v4m0 0-4-4m4 4 4-4M4 14h16"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Forged Fittings
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>

            {/* Industrial Hose Solutions */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12c4 0 4-6 8-6s4 6 8 6"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Industrial Hose Solutions
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>

            {/* Custom Engineering Solutions */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3v4.5m4.5-4.5v4.5M4.5 12h15M6 21h12"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Custom Engineering Solutions
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                High-quality and durable solutions tailored for industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            'Established Since 2006',
            'Trusted by Local Industries',
            'Wide Product Range',
            'Customer-First Approach',
          ].map((item, i) => (
            <div key={i}>
              <p className="text-xl text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Location & Accessibility
              </h2>

              <p className="mt-4 text-pretty text-gray-700">
                Located in Peenya Industrial Area, Bangalore, Techniks India is easily accessible
                and situated near Peenya Police Station.
              </p>
            </div>
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
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-gray-100 py-10 px-6 mb-12 sm:mb-16 lg:mb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xl">Working Hours</p>
            <p className="text-gray-600">10:00 AM – 6:00 PM</p>
          </div>
          <div>
            <p className="text-xl">Payment Modes</p>
            <p className="text-gray-600">UPI, Net Banking, Cards, Cash</p>
          </div>
          <div>
            <p className="text-xl">Established</p>
            <p className="text-gray-600">2006</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Have a requirement? Reach out to us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="mailto:techniks@gmail.com"
            >
              Email Us
            </Link>
            <Link
              className="inline-block rounded border px-5 py-3 font-medium shadow-sm transition-colors border-gray-400 text-gray-100 hover:bg-gray-800 hover:text-white"
              href="https://wa.me/919845373462"
              target="_blank"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
