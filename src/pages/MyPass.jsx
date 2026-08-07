import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

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
          title="My Pass"
          subtitle="Sign in to view your WanderPass dashboard. Demo mode—any email and password work."
          tone="cream"
        />
        <section className="bg-[#FDFBF4] py-16 px-6">
          <div className="max-w-md mx-auto">
            <form
              onSubmit={handleLogin}
              className="bg-[#FFF9E6] rounded-lg p-8 md:p-10 flex flex-col gap-5"
            >
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
        title="My Pass"
        subtitle={`Signed in as ${session.email}`}
        tone="soft"
      />

      <section className="bg-[#FDFBF4] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFF9E6] rounded-lg p-8 md:p-10 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <p className="chivo-mono text-[#002A34] text-sm mb-2">Active pass</p>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[#002A34]/70 text-sm mb-1">Free nights left</p>
                <p className="text-[#002A34] font-black text-4xl uppercase">{session.freeNights}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#002A34]/70 text-sm mb-1">Next stay</p>
                <p className="text-[#002A34] font-black text-xl md:text-2xl uppercase mb-1">
                  {session.nextStay}
                </p>
                <p className="roboto-regular text-[#002A34] text-base">{session.nextDates}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/destinations"
              className="flex-1 text-center px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
            >
              Browse Destinations
            </Link>
            <Link
              to="/pricing"
              className="flex-1 text-center px-8 py-3 border border-[#002A34] text-[#002A34] font-medium text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
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
