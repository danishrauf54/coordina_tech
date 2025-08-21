import React from "react"

export default function About() {
  return (
    <section className="min-h-screen pb-20 pt-28 bg-slate-50">
      <div className="container px-6 mx-auto md:px-12">
        {/* About Content */}
        <h1 className="mb-6 text-4xl font-bold text-slate-900">About Us</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          Coordina is a B2B construction project management platform tailored
          for managers, contractors, and workers.
        </p>
        <p className="mt-4 text-slate-600">
          Our mission is to streamline communication, simplify project
          organization, and provide a reliable tool for every level of
          construction project management.
        </p>

        {/* Location Section */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Our Location
          </h2>
          <p className="mb-6 text-slate-600">
            We are headquartered in <strong>San Francisco, California, USA</strong>.
          </p>

          {/* Google Map Embed */}
          <div className="w-full overflow-hidden shadow-md h-96 rounded-2xl">
            <iframe
              title="Coordina HQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019984842153!2d-122.4194154846813!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f6b2a4f%3A0xb4c3f8dfc7d7a4d3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692984932850!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
