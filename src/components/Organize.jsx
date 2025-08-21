import React from 'react'
import Section from './Section'
import Card from './Card'

// ✅ Replace old blueprint with new floor plan zones image

export default function Organize(){
  return (
    <Section>
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
        <Card className="order-2 p-0 overflow-hidden md:order-1">
          <img 
            src='imgchart.JPG'
            alt="Site plan with zones" 
            className="w-full h-[340px] md:h-[380px] object-cover" 
          />
          <div className="p-4 text-sm border-t border-slate-200 text-slate-600">
            Example site drawing with zones
          </div>
        </Card>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold md:text-3xl">
            Organize and Navigate<br/>Every Site
          </h3>
          <p className="mt-3 text-slate-600">
            Create sites, areas, and zones, view drawings by location, and draw asset polygons within zones
            for precise on-site planning.
          </p>
          <a className="mt-5 btn btn-outline" href="#learn">Learn more</a>
        </div>
      </div>
    </Section>
  )
}
