import React from 'react'
import Section from './Section'
import Card from './Card'
import { FileStack, FolderOpenDot, UsersRound } from "lucide-react"

const items = [
  { icon: FileStack, title: "Manage Temporary Works", desc:"Digitize TW asset workflows: from initial design to final striking—built for site safety."},
  { icon: FolderOpenDot, title: "Centralize Your Documents", desc:"Store, track, and manage all project documents in one place with access control."},
  { icon: UsersRound, title: "Simplify Team Management", desc:"Give supervisors clear, task-specific information, drawings, and QR codes."},
]

export default function FeaturesTriple(){
  return (
    <div className="bg-slate-900">
      <Section className="py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it)=>(
            <Card key={it.title} className="text-white border bg-slate-800 border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-700">
                  <it.icon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{it.title}</h3>
                  <p className="mt-1 text-sm text-slate-800">{it.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}