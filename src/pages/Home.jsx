import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import jengNoodleImage from '../assets/JengNoodle.png'
import globeDotImage from '../assets/GlobeDot.png'
import spencerEyesImage from '../assets/SpencerEyes.png'
import girlsWalkingImage from '../assets/GirlsWalking.png'
import groupThailandImage from '../assets/GroupThailand.png'
import sydHostelImage from '../assets/SydHostel.png'
import localImage from '../assets/local.png'
import nomadImage from '../assets/nomad.png'
import globalImage from '../assets/global.png'
import juddgabeImage from '../assets/juddgabe.jpg'
import juddsydImage from '../assets/juddsyd.jpg'
import sandiegoImage from '../assets/sandiego.jpg'
import westonwanderImage from '../assets/westonwander.JPG'
import { destinations } from '../data/destinations'

function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(new Set())
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const spencerEyesRef = useRef(null)
  const sydHostelRef = useRef(null)
  const carouselRef = useRef(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentStep < 3) {
      setCurrentStep((prev) => prev + 1)
    }
    if (isRightSwipe && currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  useEffect(() => {
    const matchHeights = () => {
      if (spencerEyesRef.current && sydHostelRef.current) {
        const spencerHeight = spencerEyesRef.current.offsetHeight
        sydHostelRef.current.style.height = `${spencerHeight}px`
      }
    }

    const spencerImg = spencerEyesRef.current
    const sydImg = sydHostelRef.current?.querySelector('img')

    if (spencerImg && sydImg) {
      if (spencerImg.complete && sydImg.complete) {
        matchHeights()
      } else {
        spencerImg.addEventListener('load', matchHeights)
        sydImg.addEventListener('load', matchHeights)
        return () => {
          spencerImg.removeEventListener('load', matchHeights)
          sydImg.removeEventListener('load', matchHeights)
        }
      }
    }
  }, [])

  const stepCtas = [
    { label: 'View Passes', to: '/pricing', color: 'bg-[#CEF550]' },
    { label: 'Browse Hostels', to: '/destinations', color: 'bg-[#FDA700]' },
    { label: 'Join Events', to: '/join', color: 'bg-[#2CE0FF]' },
    { label: 'Get Started', to: '/pricing', color: 'bg-[#CEF550]' },
  ]

  return (
    <>
      <div className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${jengNoodleImage})` }}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <p className="text-[#FDFBF4] font-regular text-lg md:text-2xl mb-6 text-center">
            Find your people anywhere in the world!
          </p>
          <h1 className="text-[#FDFBF4] font-black text-4xl md:text-4xl lg:text-7xl uppercase text-center mb-8 leading-tight max-w-4xl">
            One pass. One Network of hostels. One community.
          </h1>
          <Link
            to="/pricing"
            className="px-8 py-2 bg-[#FDFBF4] text-[#002A34] font-regular text-base md:text-lg rounded-full hover:bg-[#CEF550] hover:text-[#002A34] transition-colors shadow-lg"
          >
            Get Your Pass Today
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 animate-slow-bounce">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FDFBF4]"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-10">
              What is Global Village??
            </h2>
            <div className="flex justify-center mb-3">
              <img src={globeDotImage} alt="Globe" className="w-6 h-6" />
            </div>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pt-8 pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              Global Village is a travel pass and community network built to help people feel at home anywhere on earth. We partner with hostels and local experiences around the world to create a trusted path of places that feel warm, social, and safe. With one pass, you get access to stays, events, and a community of travelers who believe adventure is better when shared.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mb-8 px-4 md:px-8 scale-70 md:scale-85">
            <div className="relative overflow-hidden rounded-lg md:col-span-2 h-64 md:h-auto" ref={spencerEyesRef}>
              <img src={spencerEyesImage} alt="Traveler relaxing" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-auto" ref={sydHostelRef}>
              <img src={sydHostelImage} alt="Hostel experience" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block relative overflow-hidden rounded-lg">
              <img src={girlsWalkingImage} alt="Travelers walking" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block relative overflow-hidden rounded-lg md:col-span-2">
              <img src={groupThailandImage} alt="Travelers" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-[#EBE694] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
            >
              Visit Our About Us Page
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#CEF550] py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#002A34] font-medium text-sm md:text-base uppercase">
            Early Supporters Get 20% their first pass! Check Pricing{' '}
            <Link to="/pricing" className="pricing-link-underline font-black">
              HERE
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-5">
              Oh, the Places You'll Go!
            </h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              Select a country you'd like to visit and see all the locations you can stay at with our WanderPass!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations#${dest.slug}`}
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
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-block px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
            >
              See All Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE694] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="chivo-mono text-[#002A34] font-normal text-m md:text-lg mb-3">A New Way to Travel</p>
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-5">
              Pick a Plan. Pack Your Bag. Go.
            </h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              With WanderPass, you choose how far you want to go and what you want included. Every tier unlocks trusted hostels and new destinations, plus perks that remove the friction from travel. Stay local, hop borders, or build a life on the road. The pass moves with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 flex-shrink-0">
                <img src={localImage} alt="Local" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl mb-2">
                  WanderPass
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#CEF550] rounded-tl-2xl rounded-br-2xl">
                    Local
                  </span>
                </h3>
                <p className="text-[#002A34] font-semibold text-lg mb-4">For testing the waters</p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">Access to partner hostels in 1 region or country</li>
                  <li className="text-[#002A34] text-s md:text-m">Discounted nightly rates (not unlimited)</li>
                  <li className="text-[#002A34] text-s md:text-m">Community events at participating hostels</li>
                  <li className="text-[#002A34] text-s md:text-m">Basic booking support</li>
                  <li className="text-[#002A34] text-s md:text-m">Perfect for first-timers or short trips</li>
                </ul>
                <Link
                  to="/pricing"
                  className="block text-center w-full px-6 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
                >
                  View Local Pass
                </Link>
              </div>
            </div>

            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 flex-shrink-0">
                <img src={nomadImage} alt="Nomad" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl mb-2">
                  WanderPass
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#FDA700] rounded-tl-2xl rounded-br-2xl">
                    Nomad
                  </span>
                </h3>
                <p className="text-[#002A34] font-semibold text-lg mb-4">For people on the move</p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">Access to multiple regions</li>
                  <li className="text-[#002A34] text-s md:text-m">X free nights per month (or per quarter)</li>
                  <li className="text-[#002A34] text-s md:text-m">Priority booking at partner hostels</li>
                  <li className="text-[#002A34] text-s md:text-m">Discounts on multi-night stays</li>
                  <li className="text-[#002A34] text-s md:text-m">Access to local partner experiences (tours, workshops)</li>
                </ul>
                <Link
                  to="/pricing"
                  className="block text-center w-full px-6 py-3 bg-[#FDA700] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
                >
                  View Nomad Pass
                </Link>
              </div>
            </div>

            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48 flex-shrink-0">
                <img src={globalImage} alt="Global" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl mb-2">
                  WanderPass
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#2CE0FF] rounded-tl-2xl rounded-br-2xl">
                    Global
                  </span>
                </h3>
                <p className="text-[#002A34] font-semibold text-lg mb-4">For year-round adventurers</p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">Global access to every partner hostel</li>
                  <li className="text-[#002A34] text-s md:text-m">Unlimited discounted stays or a set number of free nights/month</li>
                  <li className="text-[#002A34] text-s md:text-m">24/7 booking assistance</li>
                  <li className="text-[#002A34] text-s md:text-m">Exclusive events and collaborations</li>
                  <li className="text-[#002A34] text-s md:text-m">Early access to new countries and hostel partners</li>
                </ul>
                <Link
                  to="/pricing"
                  className="block text-center w-full px-6 py-3 bg-[#2CE0FF] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
                >
                  View Global Pass
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="nav-link-underline-dark text-[#002A34] font-medium text-base">
              View Pricing Page
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFBF4] py-16 md:py-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#002A34] mb-4 uppercase">HOW IT WORKS</h2>
            <p className="text-lg md:text-xl text-[#002A34]">Travel should feel like freedom, not logistics.</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-[#002A34] items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Previous step"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {currentStep < 3 && (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-[#002A34] items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Next step"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <div
              ref={carouselRef}
              className="bg-[#EFECE1] rounded-lg overflow-hidden relative"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                  {[0, 1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[720px] md:min-h-0 md:h-[700px]"
                    >
                      <div className="w-full md:w-1/2 bg-[#002A34] flex items-center justify-center h-[220px] md:h-full p-0 overflow-hidden flex-shrink-0">
                        <img
                          src={
                            step === 0
                              ? juddgabeImage
                              : step === 1
                                ? juddsydImage
                                : step === 2
                                  ? sandiegoImage
                                  : westonwanderImage
                          }
                          alt={`Step ${step + 1}`}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center 65%' }}
                        />
                      </div>
                      <div className="w-full md:w-1/2 bg-[#EFECE1] px-6 py-8 md:p-12 lg:p-16 flex flex-col flex-1">
                        <div>
                          <p className="text-[#002A34] text-sm md:text-base mb-2">Step {step + 1}</p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#002A34] uppercase mb-4">
                            {step === 0 && 'CHOOSE YOUR PASS'}
                            {step === 1 && 'BOOK YOUR STAY'}
                            {step === 2 && 'JOIN THE COMMUNITY'}
                            {step === 3 && 'START YOUR JOURNEY'}
                          </h3>
                          <p className="text-[#002A34] text-base md:text-lg mb-6">
                            {step === 0 &&
                              "Select the WanderPass that matches your travel style. Whether you're exploring locally, hopping between regions, or going global, we have a pass designed for your journey. Each tier offers different levels of access, benefits, and destinations to fit your adventure."}
                            {step === 1 &&
                              'Select from our network of trusted hostels around the world. Book your stay with ease and confidence.'}
                            {step === 2 &&
                              'Connect with fellow travelers, attend local events, and become part of a global community of adventurers.'}
                            {step === 3 &&
                              'Your adventure begins now. Pack your bags, grab your pass, and explore the world with Global Village.'}
                          </p>
                          <ul className="space-y-2">
                            {step === 0 && (
                              <>
                                <li className="text-[#002A34] text-base">• Compare Local, Nomad, and Global pass options</li>
                                <li className="text-[#002A34] text-base">• Review included destinations and benefits</li>
                                <li className="text-[#002A34] text-base">• Choose the pass that fits your travel goals</li>
                              </>
                            )}
                            {step === 1 && (
                              <>
                                <li className="text-[#002A34] text-base">• Browse available hostels in your destination</li>
                                <li className="text-[#002A34] text-base">• Check availability and pricing</li>
                                <li className="text-[#002A34] text-base">• Reserve your spot instantly</li>
                              </>
                            )}
                            {step === 2 && (
                              <>
                                <li className="text-[#002A34] text-base">• Attend exclusive community events</li>
                                <li className="text-[#002A34] text-base">• Connect with travelers worldwide</li>
                                <li className="text-[#002A34] text-base">• Share experiences and tips</li>
                              </>
                            )}
                            {step === 3 && (
                              <>
                                <li className="text-[#002A34] text-base">• Activate your pass</li>
                                <li className="text-[#002A34] text-base">• Start exploring immediately</li>
                                <li className="text-[#002A34] text-base">• Enjoy unlimited adventures</li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="mt-auto pt-8">
                          <Link
                            to={stepCtas[step].to}
                            className={`inline-block w-full md:w-auto text-center px-8 py-3 text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all ${stepCtas[step].color}`}
                          >
                            {stepCtas[step].label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    currentStep === step ? 'bg-[#002A34]' : 'bg-[#EFECE1]'
                  }`}
                  aria-label={`Go to step ${step + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#B8DC73] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#002A34] text-lg mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002A34] uppercase">QUESTIONS & ANSWERS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 max-w-6xl mx-auto">
            <div className="space-y-3">
              {[
                {
                  question: 'What is Global Village and how does it work?',
                  answer:
                    'Global Village is a travel pass and community network that partners with hostels and local experiences worldwide. With one pass, you get access to discounted stays, community events, and a network of trusted hostels. Simply choose your pass tier, book your stays, and start exploring!',
                },
                {
                  question: "What's the difference between Local, Nomad, and Global passes?",
                  answer:
                    'Local pass gives you access to hostels in one region or country with discounted rates. Nomad pass provides access to multiple regions with free nights per month and priority booking. Global pass offers worldwide access with unlimited discounted stays or free nights, plus 24/7 booking assistance and exclusive events.',
                },
                {
                  question: 'Can I upgrade my pass after purchasing?',
                  answer:
                    "Yes! You can upgrade your pass at any time. Simply contact our support team and we'll help you upgrade to a higher tier. The cost difference will be prorated based on your remaining pass duration.",
                },
                {
                  question: 'Are the hostels vetted and safe?',
                  answer:
                    'Absolutely. We carefully vet all partner hostels to ensure they meet our standards for safety, cleanliness, and community atmosphere. All hostels in our network are trusted partners that provide a warm, social, and safe environment for travelers.',
                },
                {
                  question: 'Do I need to book in advance?',
                  answer:
                    'While advance booking is recommended, especially during peak travel seasons, you can also book last-minute stays depending on availability. Nomad and Global pass holders get priority booking, which helps secure spots even during busy periods.',
                },
              ].map((faq, index) => {
                const isExpanded = expandedFaq.has(index)
                return (
                  <div key={index} className="pb-2">
                    <div
                      className={`rounded-lg px-4 py-4 transition-colors group ${
                        isExpanded ? 'bg-[#A1C55C]' : 'hover:bg-[#A1C55C]'
                      }`}
                    >
                      <button
                        onClick={() => {
                          const next = new Set(expandedFaq)
                          if (isExpanded) next.delete(index)
                          else next.add(index)
                          setExpandedFaq(next)
                        }}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-base md:text-lg flex-1 mr-4 text-[#002A34]">
                          {faq.question}
                        </span>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-[#002A34]">
                          <svg
                            className={`w-4 h-4 text-white transition-all ${isExpanded ? 'rotate-45' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-4 border-t border-[#002A34]/20">
                          <p className="text-[#002A34] text-sm md:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-3">
              {[
                {
                  question: 'What happens if a hostel is fully booked?',
                  answer:
                    'If your preferred hostel is fully booked, our booking support team can help you find alternative options in the same area. Global pass holders also get early access to new partner hostels and priority booking during high-demand periods.',
                },
                {
                  question: 'Can I use my pass for group bookings?',
                  answer:
                    'Yes, you can use your pass for group bookings. However, the pass benefits apply to the pass holder. Additional guests will need to pay standard rates or purchase their own passes. Contact our support team for group booking assistance.',
                },
                {
                  question: 'Are there any hidden fees or additional costs?',
                  answer:
                    "No hidden fees! The pass price is transparent, and you'll only pay for the discounted nightly rates at partner hostels. Some hostels may have optional add-ons like breakfast or tours, but these are clearly marked and optional.",
                },
                {
                  question: 'How do I access community events?',
                  answer:
                    "Once you have a pass, you'll receive access to our community platform where you can see upcoming events at partner hostels. Events range from local tours and workshops to social gatherings. Simply RSVP through the platform and show up!",
                },
                {
                  question: 'What if I need to cancel or get a refund?',
                  answer:
                    'Pass refunds are available within 30 days of purchase if unused. For hostel bookings, cancellation policies vary by property and are clearly stated at booking. Our support team is available 24/7 to assist with any cancellation needs.',
                },
              ].map((faq, index) => {
                const faqIndex = index + 5
                const isExpanded = expandedFaq.has(faqIndex)
                return (
                  <div key={faqIndex} className="pb-2">
                    <div
                      className={`rounded-lg px-4 py-4 transition-colors group ${
                        isExpanded ? 'bg-[#A1C55C]' : 'hover:bg-[#A1C55C]'
                      }`}
                    >
                      <button
                        onClick={() => {
                          const next = new Set(expandedFaq)
                          if (isExpanded) next.delete(faqIndex)
                          else next.add(faqIndex)
                          setExpandedFaq(next)
                        }}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-base md:text-lg flex-1 mr-4 text-[#002A34]">
                          {faq.question}
                        </span>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-[#002A34]">
                          <svg
                            className={`w-4 h-4 text-white transition-all ${isExpanded ? 'rotate-45' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-4 border-t border-[#002A34]/20">
                          <p className="text-[#002A34] text-sm md:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
