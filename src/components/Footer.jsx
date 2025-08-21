import React from 'react'

const appStore =
  'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
const playStore =
  'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'

export default function Footer() {
  return (
    <footer id="about" className="pt-16 bg-slate-950 text-slate-300">
      <div className="container-xl">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo & description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <img src="/logo.svg" alt="Coordina logo" className="h-9 w-9" />
              <div className="leading-tight">
                <div className="font-extrabold tracking-tight text-white">
                  Coordina
                </div>
                <div className="-mt-1 text-xs text-slate-400">Technologies</div>
              </div>
            </div>

            <p className="max-w-sm mx-auto mt-4 text-sm text-slate-400 md:mx-0">
              Coordina is a B2B construction project management platform tailored
              for managers, contractors, and workers.
            </p>

            {/* ==========================
                BADGES ROW — only changes
                - extra spacing from other sections (mt-6)
                - wider flex container (max-w)
                - equal flex space for each badge so they appear balanced
                ========================== */}
            <div className="flex items-center justify-center mt-6 md:justify-start">
              <div className="w-full max-w-[640px] px-2">
                <div className="flex items-center gap-4">
                  {/* give each badge equal flex space so both occupy same "section" width */}
                  <div className="w-[92px] ">
                    <img
                      src={appStore}
                      alt="Download on the App Store"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[92px] ">
                    <img
                      src={playStore}
                      alt="Get it on Google Play"
                      className="object-contain "
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ==========================
                End badges section
                ========================== */}
          </div>

          {/* Links section */}
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:col-span-3 md:text-left md:justify-end">
            <div>
              <h4 className="mb-3 font-semibold text-white">Platforms</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#platforms" className="hover:text-white">TW Management</a></li>
                <li><a href="#platforms" className="hover:text-white">Logistics</a></li>
                <li><a href="#platforms" className="hover:text-white">Products</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#resources" className="hover:text-white">Blog</a></li>
                <li><a href="#resources" className="hover:text-white">Legal</a></li>
                <li><a href="#resources" className="hover:text-white">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white">About us</a></li>
                <li><a href="#about" className="hover:text-white">Contacts</a></li>
                <li><a href="#about" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 mt-12 text-xs text-center border-t border-white/10 text-slate-500">
          All rights reserved © Coordina Technologies, 2025
        </div>
      </div>
    </footer>
  )
}
