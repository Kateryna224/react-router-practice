import React, { Suspense, lazy } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={({ isActive }) => ({ marginRight: 10, fontWeight: isActive ? 'bold' : 'normal' })}>
          {t('home')}
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ marginRight: 10, fontWeight: isActive ? 'bold' : 'normal' })}>
          {t('about')}
        </NavLink>
        <NavLink to="/settings" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          {t('settings')}
        </NavLink>
      </nav>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => changeLanguage('en')} style={{ marginRight: '10px' }}>EN</button>
        <button onClick={() => changeLanguage('uk')}>UA</button>

      </div>

      <Suspense fallback={<div>{t('loading')}</div>}>
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
