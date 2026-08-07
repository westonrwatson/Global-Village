import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { destinations } from '../data/destinations'

function Destinations() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <PageHero
        title="Destinations"
        subtitle="Select a country and explore the places you can stay with WanderPass—trusted hostels, ready community."
        tone="cream"
      />

      <section className="bg-[#FDFBF4] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {destinations.map((dest) => (
              <a
                key={dest.slug}
                href={`#${dest.slug}`}
                className="relative overflow-hidden rounded-lg aspect-square block group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {dest.displayName ? (
                    <span className="text-white font-black text-2xl md:text-4xl uppercase flex flex-col items-center">
                      {dest.displayName.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  ) : (
                    <span className="text-white font-black text-2xl md:text-4xl uppercase">{dest.name}</span>
                  )}
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {destinations.map((dest, index) => (
              <div
                key={dest.slug}
                id={dest.slug}
                className={`scroll-mt-28 flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="chivo-mono text-[#002A34] text-sm mb-2 uppercase tracking-wide">{dest.vibe}</p>
                  <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-4">{dest.name}</h2>
                  <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed mb-6">
                    {dest.blurb}
                  </p>
                  <Link
                    to="/pricing"
                    className="inline-block px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
                  >
                    Unlock with WanderPass
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#CEF550] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-4">Your map, your pace</h2>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg mb-8">
            Choose a pass tier and start booking stays across the network.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-3 bg-[#002A34] text-[#FDFBF4] font-medium text-base rounded-full hover:bg-[#FDFBF4] hover:text-[#002A34] transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </>
  )
}

export default Destinations
