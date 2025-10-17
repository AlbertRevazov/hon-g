import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'

export const Header: React.FC = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />

          <div className="hidden md:block">
            <Navigation currentPath={location.pathname} />
          </div>

          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          currentPath={location.pathname}
          onClose={closeMobileMenu}
        />
      </div>
    </header>
  )
}
