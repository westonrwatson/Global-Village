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
    bullets: [
      'Access to partner hostels in 1 region or country',
      'Discounted nightly rates (not unlimited)',
      'Community events at participating hostels',
      'Basic booking support',
      'Perfect for first-timers or short trips',
    ],
  },
  {
    name: 'Nomad',
    badge: 'bg-[#FDA700]',
    button: 'bg-[#FDA700]',
    image: nomadImage,
    tagline: 'For people on the move',
    bullets: [
      'Access to multiple regions',
      'X free nights per month (or per quarter)',
      'Priority booking at partner hostels',
      'Discounts on multi-night stays',
      'Access to local partner experiences (tours, workshops)',
    ],
  },
  {
    name: 'Global',
    badge: 'bg-[#2CE0FF]',
    button: 'bg-[#2CE0FF]',
    image: globalImage,
    tagline: 'For year-round adventurers',
    bullets: [
      'Global access to every partner hostel',
      'Unlimited discounted stays or a set number of free nights/month',
      '24/7 booking assistance',
      'Exclusive events and collaborations',
      'Early access to new countries and hostel partners',
    ],
  },
]

const comparisons = [
  { label: 'Regions', local: '1 region', nomad: 'Multiple', global: 'Worldwide' },
  { label: 'Free nights', local: '—', nomad: 'Monthly / quarterly', global: 'Higher allotment' },
  { label: 'Booking support', local: 'Basic', nomad: 'Priority', global: '24/7' },
  { label: 'Community events', local: 'Included', nomad: 'Included', global: 'Exclusive + standard' },
]

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="A New Way to Travel"
        title="Pick a Plan. Pack Your Bag. Go."
        subtitle="With WanderPass, you choose how far you want to go and what you want included. Every tier unlocks trusted hostels and new destinations."
        tone="yellow"
      />

      <section className="bg-[#CEF550] py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#002A34] font-medium text-sm md:text-base uppercase">
            Early Supporters Get 20% off their first pass
          </p>
        </div>
      </section>

      <section className="bg-[#EBE694] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                  <img src={tier.image} alt={tier.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left flex flex-col flex-1">
                  <h3 className="chivo-mono-bold text-[#002A34] text-2xl mb-2">
                    WanderPass
                    <span
                      className={`chivo-mono-bold relative inline-block ml-2 px-1 py-1 ${tier.badge} rounded-tl-2xl rounded-br-2xl`}
                    >
                      {tier.name}
                    </span>
                  </h3>
                  <p className="text-[#002A34] font-semibold text-lg mb-4">{tier.tagline}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="text-[#002A34] text-base">
                        {bullet}
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

      <section className="bg-[#FDFBF4] py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase text-center mb-10">
            Quick compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="border-b border-[#002A34]/20">
                  <th className="py-3 pr-4 text-[#002A34] font-black uppercase text-sm">Feature</th>
                  <th className="py-3 px-2 text-[#002A34] font-black uppercase text-sm">Local</th>
                  <th className="py-3 px-2 text-[#002A34] font-black uppercase text-sm">Nomad</th>
                  <th className="py-3 px-2 text-[#002A34] font-black uppercase text-sm">Global</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-b border-[#002A34]/10">
                    <td className="py-4 pr-4 text-[#002A34] font-medium">{row.label}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm md:text-base">{row.local}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm md:text-base">{row.nomad}</td>
                    <td className="py-4 px-2 roboto-regular text-[#002A34] text-sm md:text-base">{row.global}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="roboto-regular text-[#002A34] text-base mt-8 text-center">
            You can upgrade anytime. The cost difference is prorated for your remaining pass duration.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-6">Next step</h2>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg mb-8">
            Join the waitlist or open your demo pass dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
            >
              Join the Village
            </Link>
            <Link
              to="/my-pass"
              className="px-8 py-3 border border-[#002A34] text-[#002A34] font-medium text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
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
