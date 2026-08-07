import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import portugalImage from '../assets/Portugal.png'

const SESSION_KEY = 'gv_pass_session'

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function MyPass() {
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setSession(readSession())
    setReady(true)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    const next = {
      email: email.trim(),
      tier: 'Nomad',
      freeNights: 3,
      nextStay: 'Lisbon · Casa Communal',
      nextDates: 'Apr 12–16',
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(next))
    setSession(next)
  }

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    setSession(null)
    setPassword('')
  }

  if (!ready) {
    return <div className="min-h-[40vh] bg-[#FDFBF4]" />
  }

  if (!session) {
    return (
      <>
        <PageHero
          title="Your pass, one login away"
          subtitle="Demo mode—any email and password open a sample Nomad dashboard."
          tone="cream"
          facts={[
            { label: 'Demo', value: 'Any credentials' },
            { label: 'Sample tier', value: 'Nomad' },
            { label: 'Persists', value: 'This browser' },
            { label: 'No pass yet?', value: 'See pricing' },
          ]}
          secondaryCta={{ to: '/pricing', label: 'View Pricing' }}
          align="left"
        />

        <section className="bg-[#FDFBF4] px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-5 relative overflow-hidden rounded-lg min-h-[280px] order-2 md:order-1">
              <img src={portugalImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#002A34]/45" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <p className="chivo-mono text-[#CEF550] text-xs uppercase mb-2">WanderPass</p>
                <p className="text-[#FDFBF4] font-black text-2xl uppercase leading-tight">
                  Stays, nights, and next city— in one place.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleLogin}
              className="md:col-span-7 bg-[#FFF9E6] rounded-lg p-8 md:p-12 flex flex-col gap-5 order-1 md:order-2"
            >
              <div>
                <h2 className="text-[#002A34] font-black text-2xl uppercase mb-2">Sign in</h2>
                <p className="roboto-regular text-[#002A34]/70 text-sm">
                  This is a front-end demo. Nothing is sent to a server.
                </p>
              </div>
              <div>
                <label htmlFor="email" className="block text-[#002A34] font-medium text-sm mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-[#002A34]/20 bg-[#FDFBF4] text-[#002A34] focus:outline-none focus:border-[#002A34]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-[#002A34] font-medium text-sm mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-[#002A34]/20 bg-[#FDFBF4] text-[#002A34] focus:outline-none focus:border-[#002A34]"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
              >
                Sign in
              </button>
              <p className="text-center text-[#002A34]/70 text-sm roboto-regular">
                No account yet?{' '}
                <Link to="/pricing" className="nav-link-underline-dark font-medium text-[#002A34]">
                  View Pricing
                </Link>
              </p>
            </form>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        title="Welcome back"
        subtitle={session.email}
        tone="soft"
        facts={[
          { label: 'Pass', value: `WanderPass ${session.tier}` },
          { label: 'Free nights', value: `${session.freeNights} left` },
          { label: 'Next stay', value: 'Lisbon' },
          { label: 'Status', value: 'Active' },
        ]}
      />

      <section className="bg-[#FDFBF4] px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <p className="chivo-mono text-[#002A34]/60 text-sm uppercase mb-1">Active pass</p>
              <h2 className="chivo-mono-bold text-[#002A34] text-2xl md:text-3xl">
                WanderPass
                <span className="inline-block ml-2 px-2 py-1 bg-[#FDA700] rounded-tl-2xl rounded-br-2xl">
                  {session.tier}
                </span>
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-[#002A34] text-[#002A34] font-medium text-sm rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors self-start"
            >
              Sign out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-[#CEF550] rounded-lg p-8 md:col-span-1">
              <p className="chivo-mono text-[#002A34]/70 text-xs uppercase mb-2">Free nights left</p>
              <p className="text-[#002A34] font-black text-6xl uppercase leading-none">{session.freeNights}</p>
              <p className="roboto-regular text-[#002A34] text-sm mt-3">Resets with your billing cycle</p>
            </div>
            <div className="bg-[#FFF9E6] rounded-lg p-8 md:col-span-2 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url(${portugalImage})` }}
              />
              <div className="relative">
                <p className="chivo-mono text-[#002A34]/70 text-xs uppercase mb-2">Next stay</p>
                <p className="text-[#002A34] font-black text-2xl md:text-3xl uppercase mb-2">
                  {session.nextStay}
                </p>
                <p className="roboto-regular text-[#002A34] text-base mb-6">{session.nextDates}</p>
                <Link
                  to="/destinations#portugal"
                  className="inline-block px-6 py-2 bg-[#002A34] text-[#FDFBF4] text-sm font-medium rounded-full hover:bg-[#CEF550] hover:text-[#002A34] transition-colors"
                >
                  View Portugal
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Link
              to="/destinations"
              className="text-center px-8 py-4 bg-[#002A34] text-[#FDFBF4] font-medium text-base rounded-full hover:bg-[#CEF550] hover:text-[#002A34] transition-colors"
            >
              Browse Destinations
            </Link>
            <Link
              to="/pricing"
              className="text-center px-8 py-4 border border-[#002A34] text-[#002A34] font-medium text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
            >
              Upgrade Pass
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyPass
