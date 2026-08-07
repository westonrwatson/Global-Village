import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const steps = [
  {
    n: '01',
    title: 'Pick your pass',
    body: 'Local, Nomad, or Global—choose how far you want to roam.',
  },
  {
    n: '02',
    title: 'Book your stay',
    body: 'Reserve beds at partner hostels with less hunting and more yes.',
  },
  {
    n: '03',
    title: 'Show up',
    body: 'Join events, meet the room, and let the village do the rest.',
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
        title="Join"
        subtitle="Become part of a global community of travelers who believe adventure is better when shared."
        tone="lime"
      />

      <section className="bg-[#FDFBF4] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4">How you join</h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg">
              Three moves. Then you are in motion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step) => (
              <div key={step.n} className="text-center md:text-left">
                <p className="chivo-mono-bold text-[#002A34] text-3xl mb-3">{step.n}</p>
                <h3 className="text-[#002A34] font-black text-2xl uppercase mb-3">{step.title}</h3>
                <p className="roboto-regular text-[#002A34] text-base leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-4">Waitlist</h2>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg mb-8">
            Drop your email for launch updates, early-supporter pricing, and community news.
          </p>
          {submitted ? (
            <p className="text-[#002A34] font-black text-xl uppercase">You are on the list. See you in the village.</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#002A34] rounded-lg p-2 flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-transparent text-[#FDFBF4] placeholder:text-[#FDFBF4]/60 focus:outline-none text-sm md:text-base min-w-0"
              />
              <button
                type="submit"
                className="text-[#CEF550] font-medium text-sm md:text-base whitespace-nowrap hover:opacity-80 transition-opacity pr-4"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-[#EFECE1] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4">
              Why people stick around
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((item) => (
              <div key={item.title}>
                <h3 className="text-[#002A34] font-black text-xl uppercase mb-3">{item.title}</h3>
                <p className="roboto-regular text-[#002A34] text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDFBF4] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl uppercase mb-6">Compare the passes</h2>
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
