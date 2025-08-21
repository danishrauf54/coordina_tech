import React from 'react'
import Section from './Section'
import { PrimaryButton } from './Button'

// Proper construction site background
const heroImg =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"; 
// (Cranes + modern building site)

export default function Hero() {
  return (
    <div className="relative">
      {/* Background with Image */}
      <div
        className="h-[78vh] md:h-[88vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroImg}")` }}
      >
        {/* Overlay for readability */}
        <div className="w-full h-full bg-slate-900/60"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <Section className="py-10 md:py-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Connected Teams<br />Coordinated Projects
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Manage your sites, coordinate teams, and keep every task on track.
              Your all-in-one solution for seamless construction project management.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
              <a
                className="px-6 py-3 text-white transition border rounded-2xl border-white/30 bg-white/10 hover:bg-white/20"
                href="#learn"
              >
                Learn more
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
