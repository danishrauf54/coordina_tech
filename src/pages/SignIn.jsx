import React from "react"
import { NavLink } from "react-router-dom"

export default function SignIn() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-slate-600">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="font-medium text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </section>
  )
}
