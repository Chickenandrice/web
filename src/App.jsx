import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StaggeredMenu from './components/StaggeredMenu'
import AppRoutes from './routes/AppRoutes'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View our services', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
        <div className="z-2">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#628141"
            changeMenuColorOnOpen={true}
            colors={['#EBD5AB', '#8BAE66']}
            accentColor="#628141"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
            isFixed={true}
          />
        </div>
        <main className="relative z-0 pt-20">
          <AppRoutes />
        </main>
    </div>
  )
}

export default App
