import { Categories } from '@/components/layout/search/Categories'
import { FilterList } from '@/components/layout/search/filter'
import { Search } from '@/components/Search'
import { sorting } from '@/lib/constants'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <div className="container flex flex-col gap-8 my-16 pb-4 ">
        <Search className="mb-8" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-4">
          <div className="w-full flex-none flex flex-col gap-4 md:gap-8 basis-1/5">
            <Categories />
            <FilterList list={sorting} title="Sort by" />
          </div>
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </div>
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
    </Suspense>
  )
}
