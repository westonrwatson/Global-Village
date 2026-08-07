import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import juddgabeImage from '../assets/juddgabe.jpg'
import sandiegoImage from '../assets/sandiego.jpg'
import westonwanderImage from '../assets/westonwander.JPG'

const steps = [
  {
    n: '01',
    title: 'Pick your pass',
    body: 'Local, Nomad, or Global—choose how far you want to roam.',
    image: juddgabeImage,
  },
  {
    n: '02',
    title: 'Book your stay',
    body: 'Reserve beds at partner hostels with less hunting and more yes.',
    image: sandiegoImage,
  },
  {
    n: '03',
    title: 'Show up',
    body: 'Join events, meet the room, and let the village do the rest.',
    image: westonwanderImage,
  },
]

const highlights = [
  {
    title: 'Community events',
    body: 'Welcome dinners, walking tours, workshops—plans without the group-chat chaos.',
  },
  {
    title: 'People on the move',
    body: 'Travelers who get it: flexible itineraries, shared tables, and easy hellos.',
  },
  {
    title: 'A softer landing',
    body: 'Trusted hostels mean your first night feels less like a gamble and more like arriving.',
  },
]

function Join() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Join the village"
        subtitle="Adventure is better when shared. Get early access, community updates, and first dibs on supporter pricing."
        tone="lime"
        facts={[
          { label: 'Step 1', value: 'Pick a pass' },
          { label: 'Step 2', value: 'Book a stay' },
          { label: 'Step 3', value: 'Show up' },
          { label: 'Today', value: 'Join waitlist' },
        ]}
        align="left"
      />

      {/* Waitlist early — primary conversion path */}
      <section className="bg-[#002A34] px-6 py-14 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <p className="chivo-mono text-[#CEF550] text-sm uppercase tracking-wide mb-2">Waitlist</p>
              <h2 className="text-[#FDFBF4] font-black text-2xl md:text-3xl uppercase leading-tight">
                Be first when doors open
              </h2>
            </div>
            <div className="flex-1 w-full">
              {submitted ? (
                <p className="text-[#CEF550] font-black text-xl uppercase text-center md:text-left">
                  You are on the list. See you in the village.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#FDFBF4] rounded-full p-1.5 flex items-center gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-2.5 bg-transparent text-[#002A34] placeholder:text-[#002A34]/50 focus:outline-none text-sm md:text-base min-w-0"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-6 py-2.5 bg-[#CEF550] text-[#002A34] font-medium text-sm md:text-base rounded-full hover:brightness-95 transition-all"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visual steps */}
      <section className="bg-[#FDFBF4] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4">How you join</h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg">
              Three moves. Then you are in motion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className={`reveal reveal-delay-${i}`}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-5 group">
                  <img src={step.image} alt="" className="w-full h-full object-cover image-zoom" />
                  <div className="absolute top-3 left-3 bg-[#CEF550] text-[#002A34] chivo-mono-bold text-sm px-3 py-1 rounded-full">
                    {step.n}
                  </div>
                </div>
                <h3 className="text-[#002A34] font-black text-2xl uppercase mb-2">{step.title}</h3>
                <p className="roboto-regular text-[#002A34] text-base leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EFECE1] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 mb-10 md:mb-0 md:sticky md:top-28">
              <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase leading-tight mb-4">
                Why people stick around
              </h2>
              <p className="roboto-regular text-[#002A34] text-base leading-relaxed">
                The destination matters—but the table you sit at matters more.
              </p>
            </div>
            <div className="md:col-span-8 space-y-0 divide-y divide-[#002A34]/15">
              {highlights.map((item) => (
                <div key={item.title} className="py-8 first:pt-0">
                  <h3 className="text-[#002A34] font-black text-xl md:text-2xl uppercase mb-3">{item.title}</h3>
                  <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E6] px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl uppercase mb-4">Compare the passes</h2>
          <p className="roboto-regular text-[#002A34] text-base mb-8">
            Not sure which tier? Start with the fit lines on Pricing.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </>
  )
}

export default Join
