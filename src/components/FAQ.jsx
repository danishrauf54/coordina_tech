import React, { useState } from 'react'
import Section from './Section'
import { faqItems } from '../data/faqs'
import { ChevronDown } from "lucide-react"

export default function FAQ(){
  const [open, setOpen] = useState(0)
  return (
    <Section id="resources" className="pt-12 md:pt-16">
      <h3 className="text-center text-2xl md:text-3xl font-bold">Frequently Asked Question</h3>
      <div className="mt-8 max-w-4xl mx-auto grid gap-3">
        {faqItems.map((f, i)=>(
          <div key={f.q} className="border border-slate-200 rounded-xl px-4 md:px-6 py-3 md:py-4">
            <button onClick={()=> setOpen(open===i? -1 : i)} className="w-full flex items-center justify-between gap-3 text-left">
              <span className="font-medium">{f.q}</span>
              <ChevronDown className={`transition ${open===i ? 'rotate-180' : ''}`} size={18}/>
            </button>
            {open===i && <div className="pt-3 text-sm text-slate-600">{f.a}</div>}
          </div>
        ))}
      </div>
    </Section>
  )
}