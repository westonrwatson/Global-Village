import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import localImage from '../assets/local.png'
import nomadImage from '../assets/nomad.png'
import globalImage from '../assets/global.png'

const tiers = [
  {
    name: 'Local',
    badge: 'bg-[#CEF550]',
    button: 'bg-[#CEF550]',
    image: localImage,
    tagline: 'For testing the waters',
    fit: 'Best if you want one region and a soft start.',
    bullets: [
      'Partner hostels in 1 region or country',
      'Discounted nightly rates',
      'Community events at participating hostels',
      'Basic booking support',
    ],
  },
  {
    name: 'Nomad',
    badge: 'bg-[#FDA700]',
    button: 'bg-[#FDA700]',
    image: nomadImage,
    tagline: 'For people on the move',
    fit: 'Best if you hop regions and want free nights.',
    recommended: true,
    bullets: [
      'Access across multiple regions',
      'Free nights each month (or quarter)',
      'Priority booking at partner hostels',
      'Partner experiences: tours & workshops',
    ],
  },
  {
    name: 'Global',
    badge: 'bg-[#2CE0FF]',
    button: 'bg-[#2CE0FF]',
    image: globalImage,
    tagline: 'For year-round adventurers',
    fit: 'Best if travel is your rhythm, not a break.',
    bullets: [
      'Every partner hostel worldwide',
      'Highest free-night / discount allotment',
      '24/7 booking assistance',
      'Early access to new countries',
    ],
  },
]

const comparisons = [
  { label: 'Regions', local: '1 region', nomad: 'Multiple', global: 'Worldwide' },
  { label: 'Free nights', local: '—', nomad: 'Monthly / quarterly', global: 'Highest allotment' },
  { label: 'Booking support', local: 'Basic', nomad: 'Priority', global: '24/7' },
  { label: 'Community events', local: 'Included', nomad: 'Included', global: 'Exclusive + standard' },
  { label: 'Upgrade anytime', local: 'Yes', nomad: 'Yes', global: '—' },
]

const inclusions = [
  { title: 'Always included', body: 'Partner hostel access, community events, and transparent pass pricing—no surprise membership fees at checkout.' },
  { title: 'You still choose', body: 'Optional add-ons like tours or breakfast stay clearly marked. Nothing pre-checked. Nothing hidden.' },
  { title: 'Change of plans', body: 'Upgrade mid-pass; the difference is prorated. Hostel cancellation rules stay property-specific and shown at booking.' },
]

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="WanderPass"
        title="Pick a plan. Pack your bag. Go."
        subtitle="Three tiers. One network. Choose how far you roam—and what perks travel with you."
        tone="yellow"
        facts={[
          { label: 'Tiers', value: 'Local · Nomad · Global' },
          { label: 'Early bird', value: '20% first pass' },
          { label: 'Flexibility', value: 'Upgrade anytime' },
          { label: 'Clarity', value: 'No hidden fees' },
        ]}
        cta={{ to: '/join', label: 'Get on the list' }}
        secondaryCta={{ to: '/my-pass', label: 'Open My Pass' }}
      />

      <section className="bg-[#CEF550] py-5 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#002A34] font-medium text-sm md:text-base uppercase tracking-wide">
            Early supporters get 20% off their first pass
          </p>
        </div>
      </section>

      {/* Tier chooser */}
      <section className="bg-[#EBE694] px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-3">Find your fit</h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg max-w-xl mx-auto">
              Scan the “best if” line first—then dive into inclusions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col relative ${
                  tier.recommended ? 'md:-translate-y-3 md:shadow-xl ring-2 ring-[#002A34]' : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute top-3 right-3 z-10 bg-[#002A34] text-[#CEF550] text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className="relative h-44 flex-shrink-0 overflow-hidden group">
                  <img src={tier.image} alt={tier.name} className="w-full h-full object-cover image-zoom" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="chivo-mono-bold text-[#002A34] text-xl md:text-2xl mb-1">
                    WanderPass
                    <span
                      className={`chivo-mono-bold inline-block ml-2 px-1.5 py-0.5 ${tier.badge} rounded-tl-2xl rounded-br-2xl`}
                    >
                      {tier.name}
                    </span>
                  </h3>
                  <p className="text-[#002A34] font-semibold text-base mb-2">{tier.tagline}</p>
                  <p className="roboto-regular text-[#002A34]/70 text-sm mb-5">{tier.fit}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="text-[#002A34] text-sm md:text-base flex gap-2">
                        <span className="text-[#002A34] mt-0.5">·</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/join"
                    className={`block text-center w-full px-6 py-3 ${tier.button} text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all`}
                  >
                    Get {tier.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / inclusions near commitment */}
      <section className="bg-[#FDFBF4] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase text-center mb-12">
            Before you choose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {inclusions.map((item) => (
              <div key={item.title}>
                <h3 className="text-[#002A34] font-black text-xl uppercase mb-3">{item.title}</h3>
                <p className="roboto-regular text-[#002A34] text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-[#FFF9E6] px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase text-center mb-3">
            Quick compare
          </h2>
          <p className="roboto-regular text-[#002A34] text-center text-base mb-10">
            Same network. Different reach and support.
          </p>
          <div className="overflow-x-auto rounded-lg bg-[#FDFBF4] px-4 md:px-6">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-[#002A34]/15">
                  <th className="py-4 pr-4 text-[#002A34]/50 font-medium text-xs uppercase tracking-wide">Feature</th>
                  <th className="py-4 px-2 text-[#002A34] font-black uppercase text-sm">Local</th>
                  <th className="py-4 px-2 text-[#002A34] font-black uppercase text-sm">
                    Nomad <span className="text-[#FDA700]">★</span>
                  </th>
                  <th className="py-4 px-2 text-[#002A34] font-black uppercase text-sm">Global</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-b border-[#002A34]/8">
                    <td className="py-4 pr-4 text-[#002A34] font-medium text-sm">{row.label}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm">{row.local}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm font-medium">{row.nomad}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm">{row.global}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#002A34] px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#FDFBF4] font-black text-3xl md:text-4xl uppercase mb-5">Next step</h2>
          <p className="roboto-regular text-[#FDFBF4]/80 text-base md:text-lg mb-8">
            Join the waitlist for early pricing—or open the demo pass dashboard now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-95 transition-all"
            >
              Join the Village
            </Link>
            <Link
              to="/my-pass"
              className="px-8 py-3 border border-[#FDFBF4] text-[#FDFBF4] font-medium text-base rounded-full hover:bg-[#FDFBF4] hover:text-[#002A34] transition-colors"
            >
              My Pass
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
