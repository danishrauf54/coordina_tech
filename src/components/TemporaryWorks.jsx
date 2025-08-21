import React from 'react'
import Section from './Section'
import Card from './Card'
import { dataRows } from '../data/table'

export default function TemporaryWorks(){
  return (
    <Section id="platforms">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Streamline Temporary Works Management</h2>
          <p className="mt-3 text-slate-600">
            Create, track, and close out TW assets with structured workflows—from initial design to permits,
            approvals, and final striking—built for site safety and compliance.
          </p>
          <a className="btn btn-outline mt-5" href="#learn">Learn more</a>
        </div>
        <Card className="p-0 overflow-hidden">
          <div className="border-b border-slate-200 px-4 py-3">
            <div className="font-semibold">Asset Register</div>
            <div className="text-xs text-slate-500">Sample data</div>
          </div>
          <div className="max-h-[360px] overflow-auto">
            <table className="min-w-full text-sm">
              <thead className="sticky top-0 bg-slate-50">
                <tr className="text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Asset</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Due</th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map((r)=> (
                  <tr key={r.id} className="odd:bg-white even:bg-slate-50/70">
                    <td className="px-4 py-2 font-mono text-xs">{r.id}</td>
                    <td className="px-4 py-2">{r.asset}</td>
                    <td className="px-4 py-2">{r.location}</td>
                    <td className="px-4 py-2">
                      <span className={`badge ${r.statusColor}`}>{r.status}</span>
                    </td>
                    <td className="px-4 py-2">{r.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Section>
  )
}