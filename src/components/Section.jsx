import React from 'react'
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-xl">{children}</div>
    </section>
  )
}