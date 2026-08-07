import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/join', label: 'Join' },
  { to: '/blog', label: 'Blog' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const overlay = isHome && !isMenuOpen
  const textClass = overlay
    ? 'text-[#FDFBF4] hover:text-[#CEF550]'
    : 'text-[#002A34] hover:text-[#CEF550]'
  const linkUnderline = overlay ? 'nav-link-underline' : 'nav-link-underline-dark'
  const passBorder = overlay
    ? 'border-[#FDFBF4] text-[#FDFBF4] hover:bg-[#CEF550] hover:border-[#CEF550] hover:text-[#002A34]'
    : 'border-[#002A34] text-[#002A34] hover:bg-[#CEF550] hover:border-[#CEF550]'

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FDFBF4] md:hidden z-40 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#002A34] font-black text-4xl uppercase tracking-wide hover:text-[#CEF550] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/my-pass"
              className="mt-4 px-10 py-3 border-2 border-[#002A34] text-[#002A34] font-black text-xl uppercase tracking-wide rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              My Pass
            </Link>
          </div>
        </div>
      )}

      <nav
        className={`top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-6 ${
          isMenuOpen
            ? 'fixed'
            : isHome
              ? 'absolute'
              : 'sticky bg-[#FDFBF4]'
        }`}
      >
        <Link
          to="/"
          className={`uppercase font-black text-xl md:text-2xl tracking-wide ${
            isMenuOpen ? 'text-[#002A34]' : textClass
          }`}
        >
          GLOBAL VILLAGE
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none ${
            isMenuOpen ? 'text-[#002A34]' : overlay ? 'text-[#FDFBF4]' : 'text-[#002A34]'
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkUnderline} font-regular text-base ${
                  overlay ? 'text-[#FDFBF4]' : 'text-[#002A34]'
                } ${isActive ? 'opacity-100' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/my-pass"
            className={`px-6 py-1 border font-regular text-base rounded-full transition-colors ${passBorder}`}
          >
            My Pass
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
