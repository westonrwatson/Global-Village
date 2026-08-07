import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { destinations } from '../data/destinations'
import thailandImage from '../assets/Thailand.png'

function Destinations() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    }
  }, [location])

  const featured = destinations.slice(0, 3)
  const rest = destinations.slice(3)

  return (
    <>
      <PageHero
        title="Oh, the places you'll go"
        subtitle="Eight countries. Trusted hostels. A community waiting in the common room. Pick a place—or scroll the map."
        tone="ink"
        image={thailandImage}
        facts={[
          { label: 'Countries', value: `${destinations.length} live` },
          { label: 'Access', value: 'Via WanderPass' },
          { label: 'Vibe', value: 'Social & flexible' },
          { label: 'Next step', value: 'Pick a pass' },
        ]}
        cta={{ to: '/pricing', label: 'Unlock with a pass' }}
      />

      {/* Sticky jump chips — quick orientation */}
      <div className="sticky top-[72px] z-30 bg-[#FDFBF4]/95 backdrop-blur border-b border-[#002A34]/10">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="dest-chip-row flex gap-2 overflow-x-auto scroll-smooth">
            {destinations.map((dest) => (
              <a
                key={dest.slug}
                href={`#${dest.slug}`}
                className="dest-chip shrink-0 px-4 py-1.5 text-sm font-medium text-[#002A34] border border-[#002A34]/20 rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
              >
                {dest.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bento browse grid */}
      <section className="bg-[#FDFBF4] px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="chivo-mono text-[#002A34]/60 text-sm uppercase tracking-wide mb-2">Browse</p>
              <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase">Jump in by country</h2>
            </div>
            <p className="roboto-regular text-[#002A34] text-base max-w-sm md:text-right">
              Tap a destination for the vibe, who it fits, and how WanderPass opens the door.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
            {featured.map((dest, i) => (
              <a
                key={dest.slug}
                href={`#${dest.slug}`}
                className={`relative overflow-hidden rounded-lg group ${
                  i === 0 ? 'col-span-2 aspect-[2/1] md:aspect-auto md:row-span-2 md:h-full min-h-[220px]' : 'aspect-square'
                }`}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002A34]/70 via-[#002A34]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="chivo-mono text-[#CEF550] text-xs uppercase mb-1">{dest.region}</p>
                  <span className="text-[#FDFBF4] font-black text-xl md:text-3xl uppercase">
                    {dest.displayName ? dest.displayName.join(' ') : dest.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {rest.map((dest) => (
              <a
                key={dest.slug}
                href={`#${dest.slug}`}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-[#002A34]/35 group-hover:bg-[#002A34]/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <span className="text-[#FDFBF4] font-black text-lg md:text-xl uppercase text-center">
                    {dest.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detail chapters */}
      <section className="bg-[#FFF9E6] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {destinations.map((dest, index) => (
            <article
              key={dest.slug}
              id={dest.slug}
              className={`scroll-mt-36 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? '' : ''
              }`}
            >
              <div
                className={`md:col-span-7 relative overflow-hidden rounded-lg aspect-[16/11] group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover image-zoom" />
              </div>
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="chivo-mono text-[#002A34]/60 text-sm uppercase tracking-wide mb-2">{dest.vibe}</p>
                <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-5">{dest.name}</h2>
                <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed mb-6">
                  {dest.blurb}
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8 py-4 border-y border-[#002A34]/15">
                  <div>
                    <p className="chivo-mono text-[10px] uppercase text-[#002A34]/50 mb-1">Region</p>
                    <p className="text-[#002A34] font-black text-xs md:text-sm uppercase leading-snug">{dest.region}</p>
                  </div>
                  <div>
                    <p className="chivo-mono text-[10px] uppercase text-[#002A34]/50 mb-1">Style</p>
                    <p className="text-[#002A34] font-black text-xs md:text-sm uppercase leading-snug">{dest.style}</p>
                  </div>
                  <div>
                    <p className="chivo-mono text-[10px] uppercase text-[#002A34]/50 mb-1">Best for</p>
                    <p className="text-[#002A34] font-black text-xs md:text-sm uppercase leading-snug">{dest.bestFor}</p>
                  </div>
                </div>
                <Link
                  to="/pricing"
                  className="inline-block px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
                >
                  Unlock with WanderPass
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#CEF550] px-6 py-16">
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
