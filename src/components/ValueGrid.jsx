import React from 'react'
import Section from './Section'
import Card from './Card'
import { ShieldCheck, FileCheck2, Workflow, ScanQrCode } from "lucide-react"

const values = [
  { icon: Workflow, title: "Structured Temporary Works", desc:"Digitize TW asset workflows—from creation to striking—with approvals, forms, and safety checks always in place."},
  { icon: ScanQrCode, title: "Smarter On-Site Coordination", desc:"Give supervisors and workers clear, task-specific info through zones, drawings, and QR codes right from the field."},
  { icon: ShieldCheck, title: "Built-In Compliance Tracking", desc:"Automated workflows keep permits and approvals on track—so you never miss a step or risk a shutdown."},
  { icon: FileCheck2, title: "Centralized Document Control", desc:"Store and manage all project documents with revision history, status tracking, and role-based access."},
]

export default function ValueGrid(){
  return (
    <div className="bg-slate-900">
      <Section className="py-14">
        <h3 className="text-2xl font-bold text-center text-white md:text-3xl">Fix What Slows You Down</h3>
        <p className="max-w-3xl px-3 mx-auto mt-3 text-center text-slate-300">
          Disorganization, delays, and compliance gaps cost more than just time; they also cost trust and profit.
          Coordina solves the core issues that hold construction teams back.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map(v => (
            <Card key={v.title} className="text-white border bg-slate-800 border-white/10">
              <div className="p-3 mb-3 rounded-xl bg-slate-700 w-min"><v.icon/></div>
              <h4 className="font-semibold text-slate-900">{v.title}</h4>
              <p className="mt-1 text-sm text-slate-900">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}