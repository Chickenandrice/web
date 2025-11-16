import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StaggeredMenu from './components/StaggeredMenu'
import AppRoutes from './routes/AppRoutes'
import Drag from './components/StickyCursor'

function App() {
  return (
    <div className="">
      <Drag />
        <main className="relative z-0">
          <AppRoutes />
        </main>
    </div>
  )
}

export default App
