import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import spencerEyesImage from '../assets/SpencerEyes.png'
import girlsWalkingImage from '../assets/GirlsWalking.png'
import groupThailandImage from '../assets/GroupThailand.png'
import sydHostelImage from '../assets/SydHostel.png'

const facts = [
  { label: 'What it is', value: 'Travel pass + network' },
  { label: 'Who for', value: 'Solo & social travelers' },
  { label: 'The unlock', value: 'Stays, events, people' },
  { label: 'The feeling', value: 'Home, anywhere' },
]

const pillars = [
  {
    n: '01',
    title: 'One pass',
    body: 'Stop piecing together last-minute beds. WanderPass unlocks trusted hostels so you can move with less friction.',
  },
  {
    n: '02',
    title: 'Trusted stays',
    body: 'We partner with hostels that feel warm, social, and safe—places where common rooms turn into friend groups.',
  },
  {
    n: '03',
    title: 'Built-in community',
    body: 'Events, dinners, and shared plans come with the territory. Adventure lands better when it is shared.',
  },
  {
    n: '04',
    title: 'Go farther',
    body: 'Stay local, hop regions, or go worldwide. Your tier sets the map; the village meets you wherever you land.',
  },
]

function About() {
  return (
    <>
      <PageHero
        title="Feel at home anywhere on earth"
        subtitle="Global Village is a travel pass and community network—one path of trusted hostels, local experiences, and people who get it."
        tone="cream"
        facts={facts}
        cta={{ to: '/pricing', label: 'See the passes' }}
        secondaryCta={{ to: '/join', label: 'Join the village' }}
        align="left"
      />

      {/* Editorial split: mission + image */}
      <section className="bg-[#FDFBF4] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 reveal">
            <p className="chivo-mono text-[#002A34]/60 text-sm uppercase tracking-wide mb-3">The idea</p>
            <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase leading-tight mb-6">
              Freedom without isolation
            </h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed mb-5">
              We connect hostels and local experiences into one trusted path—so you can book with confidence, show up to
              a community, and keep moving when the next city calls.
            </p>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed">
              Less logistics. More living-room energy, wherever you are.
            </p>
          </div>
          <div className="md:col-span-7 relative reveal reveal-delay-1">
            <div className="relative overflow-hidden rounded-lg aspect-[5/4] md:aspect-[16/11] group">
              <img
                src={groupThailandImage}
                alt="Travelers together"
                className="w-full h-full object-cover image-zoom"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-6 w-40 h-48 overflow-hidden rounded-lg shadow-lg border-4 border-[#FDFBF4]">
              <img src={spencerEyesImage} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric photo story */}
      <section className="bg-[#FFF9E6] px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase max-w-md leading-tight">
              Places that feel like people
            </h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg max-w-sm md:text-right">
              Real hostels. Real common rooms. The kind of stays you remember for the friends, not just the photos.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-lg aspect-[16/10] group">
              <img src={sydHostelImage} alt="Hostel common space" className="w-full h-full object-cover image-zoom" />
            </div>
            <div className="col-span-6 md:col-span-5 relative overflow-hidden rounded-lg aspect-square md:aspect-auto md:h-full group">
              <img src={girlsWalkingImage} alt="Travelers walking" className="w-full h-full object-cover image-zoom" />
            </div>
            <div className="col-span-6 md:col-span-4 relative overflow-hidden rounded-lg aspect-square group">
              <img src={spencerEyesImage} alt="Traveler resting" className="w-full h-full object-cover image-zoom" />
            </div>
            <div className="col-span-12 md:col-span-8 bg-[#002A34] rounded-lg px-8 py-10 md:px-12 md:py-14 flex flex-col justify-center">
              <p className="chivo-mono text-[#CEF550] text-sm uppercase tracking-wide mb-3">How it works</p>
              <p className="text-[#FDFBF4] font-black text-2xl md:text-3xl uppercase leading-tight mb-4">
                Pass → hostel → community → next city
              </p>
              <p className="roboto-regular text-[#FDFBF4]/80 text-base leading-relaxed max-w-lg">
                Choose a WanderPass tier, book partner stays, show up to events, and keep the circle growing as you move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered pillars — one job, clear scan */}
      <section className="bg-[#EBE694] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4">What you get</h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg max-w-xl mx-auto">
              The village is simple on purpose: pass, places, people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {pillars.map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i % 3}`}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="chivo-mono-bold text-[#002A34]/40 text-2xl">{item.n}</span>
                  <h3 className="text-[#002A34] font-black text-2xl uppercase">{item.title}</h3>
                </div>
                <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed md:pl-14">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-[#002A34] px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#FDFBF4] font-black text-3xl md:text-4xl uppercase mb-5">Ready when you are</h2>
          <p className="roboto-regular text-[#FDFBF4]/80 text-base md:text-lg mb-8">
            Pick a pass, join the community, and start collecting places that feel like home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-95 transition-all"
            >
              View Pricing
            </Link>
            <Link
              to="/destinations"
              className="px-8 py-3 border border-[#FDFBF4] text-[#FDFBF4] font-medium text-base rounded-full hover:bg-[#FDFBF4] hover:text-[#002A34] transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
