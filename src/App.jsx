import React, { Suspense, lazy } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={({ isActive }) => ({ marginRight: 10, fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ marginRight: 10, fontWeight: isActive ? 'bold' : 'normal' })}>About</NavLink>
        <NavLink to="/settings" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Settings</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
