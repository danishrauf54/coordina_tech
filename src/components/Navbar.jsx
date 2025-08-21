import React, { useEffect, useState } from 'react'
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

const nav = [
  { label: 'Platforms', href: '/platforms' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

export default function Navbar(){
  const [open,setOpen] = useState(true)

  useEffect(()=>{
    const handle = () => {
      if (window.innerWidth < 768) setOpen(true)
      else setOpen(false)
    }
    handle()
    window.addEventListener('resize', handle)
    return ()=> window.removeEventListener('resize', handle)
  },[])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-xl">
        <div className="px-4 py-3 mt-3 border md:mt-5 glass rounded-2xl md:px-6 shadow-soft border-white/50">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Coordina logo" className="w-8 h-8"/>
              <div className="leading-tight">
                <div className="font-extrabold tracking-tight text-slate-900">Coordina</div>
                <div className="text-[11px] text-slate-500 -mt-1">Technologies</div>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="items-center hidden gap-8 md:flex">
              {nav.map((n) => (
                <NavLink 
                  key={n.label} 
                  to={n.href} 
                  className={({isActive}) => 
                    `nav-link ${isActive ? "text-blue-600 font-bold" : ""}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="items-center hidden gap-3 md:flex">
              <NavLink to="/signin" className="btn btn-outline">Sign in</NavLink>
              <NavLink to="/demo" className="btn btn-primary">Book a Demo</NavLink>
            </div>

            {/* Hamburger Toggle */}
            <button 
              className="p-2 border rounded-lg md:hidden border-slate-200" 
              onClick={()=>setOpen(v=>!v)} 
              aria-label="Toggle menu"
            >
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="pt-4 md:hidden">
              <div className="grid gap-2">
                {nav.map((n)=>( 
                  <NavLink 
                    key={n.label} 
                    to={n.href} 
                    className="nav-link"
                  >
                    {n.label}
                  </NavLink>
                ))}
                <div className="h-px my-2 bg-slate-200" />
                {/* Add Sign in here */}
                <NavLink to="/signin" className="w-full btn btn-outline">Sign in</NavLink>
                <NavLink to="/demo" className="w-full btn btn-primary">Book a Demo</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
