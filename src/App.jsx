import { useState, useEffect, useRef } from 'react'
import jengNoodleImage from './assets/JengNoodle.png'
import globeDotImage from './assets/GlobeDot.png'
import spencerEyesImage from './assets/SpencerEyes.png'
import girlsWalkingImage from './assets/GirlsWalking.png'
import groupThailandImage from './assets/GroupThailand.png'
import sydHostelImage from './assets/SydHostel.png'
import thailandImage from './assets/Thailand.png'
import japanImage from './assets/Japan.png'
import usImage from './assets/US.png'
import australiaImage from './assets/Australia.png'
import portugalImage from './assets/Portugal.png'
import spainImage from './assets/Spain.png'
import brazilImage from './assets/Brazil.png'
import italyImage from './assets/Italy.png'
import localImage from './assets/local.png'
import nomadImage from './assets/nomad.png'
import globalImage from './assets/global.png'
import juddgabeImage from './assets/juddgabe.jpg'
import juddsydImage from './assets/juddsyd.jpg'
import sandiegoImage from './assets/sandiego.jpg'
import westonwanderImage from './assets/westonwander.JPG'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(new Set())
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const spencerEyesRef = useRef(null)
  const sydHostelRef = useRef(null)
  const faqRefs = useRef({})
  const carouselRef = useRef(null)

  // Swipe handlers for carousel
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

  const smoothScrollTo = (element, offset = 0) => {
    if (!element) return
    
    // Wait for expansion animation to fully complete and layout to stabilize
    setTimeout(() => {
      const elementRect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementTop = elementRect.top
      const elementBottom = elementRect.bottom
      
      // Only scroll if element is not already visible or is cut off at bottom
      // Don't scroll if element is fully visible
      if (elementTop >= 0 && elementBottom <= viewportHeight) {
        return // Element is already fully visible
      }
      
      // Only scroll if element is below viewport or cut off at bottom
      if (elementTop < 0 || elementBottom > viewportHeight) {
        const targetPosition = elementRect.top + window.pageYOffset - offset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        
        // Only scroll if there's meaningful distance
        if (Math.abs(distance) < 10) return
        
        const duration = 1200
        let start = null

        const easeInOutQuad = (t) => {
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        }

        const animation = (currentTime) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          const ease = easeInOutQuad(progress)
          
          const currentScroll = startPosition + distance * ease
          window.scrollTo({
            top: currentScroll,
            behavior: 'auto'
          })
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }
    }, 400)
  }

  useEffect(() => {
    const matchHeights = () => {
      if (spencerEyesRef.current && sydHostelRef.current) {
        const spencerHeight = spencerEyesRef.current.offsetHeight
        sydHostelRef.current.style.height = `${spencerHeight}px`
      }
    }

    // Match heights after images load
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

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${jengNoodleImage})` }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Navbar */}
        <nav className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 py-6 ${isMenuOpen ? 'bg-[#FDFBF4]' : ''}`}>
          {/* Left side - Logo */}
          <a href="/" className={`uppercase font-black text-xl md:text-2xl tracking-wide ${isMenuOpen ? 'text-[#002A34]' : 'text-[#FDFBF4] hover:text-[#CEF550]'}`}>
            GLOBAL VILLAGE
          </a>
          
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${isMenuOpen ? 'text-[#002A34]' : 'text-[#FDFBF4]'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Right side - Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link-underline text-[#FDFBF4] font-regular text-base">
              About
            </a>
            <a href="#destinations" className="nav-link-underline text-[#FDFBF4] font-regular text-base">
              Destinations
            </a>
            <a href="#pricing" className="nav-link-underline text-[#FDFBF4] font-regular text-base">
              Pricing
            </a>
            <a href="#join" className="nav-link-underline text-[#FDFBF4] font-regular text-base">
              Join
            </a>
            <button className="px-6 py-1 border border-[#FDFBF4] text-[#FDFBF4] font-regular text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] hover:text-[#002A34] transition-colors">
              My Pass
            </button>
          </div>
          
          {/* Mobile Menu - Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#FDFBF4] md:hidden z-30">
              <div className="flex flex-col items-start px-4 pb-6 gap-4">
                <a 
                  href="#about" 
                  className="nav-link-underline-dark text-[#002A34] font-regular text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#destinations" 
                  className="nav-link-underline-dark text-[#002A34] font-regular text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinations
                </a>
                <a 
                  href="#pricing" 
                  className="nav-link-underline-dark text-[#002A34] font-regular text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#join" 
                  className="nav-link-underline-dark text-[#002A34] font-regular text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join
                </a>
                <button 
                  className="px-6 py-1 border border-[#002A34] text-[#002A34] font-regular text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] hover:text-[#002A34] transition-colors w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Pass
                </button>
              </div>
            </div>
          )}
        </nav>
        
        {/* Hero Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Top text */}
          <p className="text-[#FDFBF4] font-regular text-lg md:text-2xl mb-6 text-center">
            Find your people anywhere in the world!
          </p>
          
          {/* Middle text - Main headline */}
          <h1 className="text-[#FDFBF4] font-black text-4xl md:text-4xl lg:text-7xl uppercase text-center mb-8 leading-tight max-w-4xl">
            One pass. One Network of hostels. One community.
          </h1>
          
          {/* Bottom button */}
          <button className="px-8 py-2 bg-[#FDFBF4] text-[#002A34] font-regular md:text-md lg:thttps://lapoint.b-cdn.net/image/6YAZJRkMBh1PcwhIgYZjdj/6cdace09a87a91acbe0deebdc36c19dd/Bali-Lapoint-in-the-heart-of-Canggu.jpg?fm=jpg&fl=progressive&w=1920&q=75ext-md text-base rounded-full hover:bg-[#CEF550] hover:text-[#002A34] transition-colors shadow-lg">
            Get Your Pass Today
          </button>
        </div>
        
        {/* Bottom Arrow */}
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

      {/* What is Global Village Section */}
      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-10">
              What is Global Village??
            </h2>
            
            {/* Globe Icon */}
            <div className="flex justify-center mb-3">
              <img src={globeDotImage} alt="Globe" className="w-6 h-6" />
            </div>
            
            {/* Description Text */}
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pt-8 pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              Global Village is a travel pass and community network built to help people feel at home anywhere on earth. We partner with hostels and local experiences around the world to create a trusted path of places that feel warm, social, and safe. With one pass, you get access to stays, events, and a community of travelers who believe adventure is better when shared.
            </p>
          </div>

          {/* Image Grid - Staggered Layout */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mb-8 px-4 md:px-8 scale-70 md:scale-85">
            {/* Top Left - Spencer Eyes (spans 2 columns on desktop) */}
            <div className="relative overflow-hidden rounded-lg md:col-span-2 h-64 md:h-auto" ref={spencerEyesRef}>
              <img 
                src={spencerEyesImage} 
                alt="Traveler relaxing" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top Right - Syd Hostel */}
            <div className="relative overflow-hidden rounded-lg h-64 md:h-auto" ref={sydHostelRef}>
              <img 
                src={sydHostelImage} 
                alt="Hostel experience" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Left - Girls Walking (hidden on mobile) */}
            <div className="hidden md:block relative overflow-hidden rounded-lg">
              <img 
                src={girlsWalkingImage} 
                alt="Travelers walking" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Right - Group Thailand (spans 2 columns, hidden on mobile) */}
            <div className="hidden md:block relative overflow-hidden rounded-lg md:col-span-2">
              <img 
                src={groupThailandImage} 
                alt="Travelers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="px-8 py-3 bg-[#EBE694] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all">
              Visit Our About Us Page
            </button>
          </div>
        </div>
      </section>

      {/* Early Supporters Strip */}
      <section className="bg-[#CEF550] py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#002A34] font-medium text-sm md:text-base uppercase">
            Early Supporters Get 20% their first pass! Check Pricing{' '}
            <a href="#" className="pricing-link-underline font-black">
              HERE
            </a>
          </p>
        </div>
      </section>

      {/* Oh, the Places You'll Go Section */}
      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-5">
              Oh, the Places You'll Go!
            </h2>
            
            {/* Description Text */}
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              Select a country you'd like to visit and see all the locations you can stay at with our WanderPass!
            </p>
          </div>

          {/* Country Grid - 4 columns, 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Top Row */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={thailandImage} 
                alt="Thailand" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Thailand
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={japanImage} 
                alt="Japan" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Japan
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={usImage} 
                alt="United States" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase flex flex-col items-center">
                  <span>United</span>
                  <span>States</span>
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={australiaImage} 
                alt="Australia" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Australia
                </span>
              </div>
            </a>
            {/* Bottom Row */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={portugalImage} 
                alt="Portugal" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Portugal
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={spainImage} 
                alt="Spain" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Spain
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={brazilImage} 
                alt="Brazil" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Brazil
                </span>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg aspect-square block group">
              <img 
                src={italyImage} 
                alt="Italy" 
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl uppercase">
                  Italy
                </span>
              </div>
            </a>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all">
              See All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Pick a Plan Section */}
      <section className="bg-[#EBE694] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="chivo-mono text-[#002A34] font-normal text-m md:text-lg mb-3">
              A New Way to Travel
            </p>
            <h2 className="text-[#002A34] font-black text-3xl md:text-3xl lg:text-5xl uppercase mb-5">
              Pick a Plan. Pack Your Bag. Go.
            </h2>
            
            {/* Description Text */}
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed pb-6 px-6 md:px-2 max-w-4xl mx-auto">
              With WanderPass, you choose how far you want to go and what you want included. Every tier unlocks trusted hostels and new destinations, plus perks that remove the friction from travel. Stay local, hop borders, or build a life on the road. The pass moves with you.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Local */}
            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48 flex-shrink-0">
                <img 
                  src={localImage} 
                  alt="Local" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 text-left flex flex-col flex-1">
                {/* Title */}
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl md:text-2xl mb-2">
                  WanderPass{''}
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#CEF550] rounded-tl-2xl rounded-br-2xl">
                    Local
                  </span>
                </h3>
                {/* Subheader */}
                <p className="text-[#002A34] font-semibold text-lg md:text-lg mb-4">
                  For testing the waters
                </p>
                {/* Body - Bullet Points */}
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">
                    Access to partner hostels in 1 region or country
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Discounted nightly rates (not unlimited)
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Community events at participating hostels
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Basic booking support
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Perfect for first-timers or short trips
                  </li>
                </ul>
                {/* Button */}
                <button className="w-full px-6 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all">
                  View Local Pass
                </button>
              </div>
            </div>

            {/* Card 2 - Nomad */}
            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48 flex-shrink-0">
                <img 
                  src={nomadImage} 
                  alt="Nomad" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 text-left flex flex-col flex-1">
                {/* Title */}
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl md:text-2xl mb-2">
                  WanderPass{''}
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#FDA700] rounded-tl-2xl rounded-br-2xl">
                    Nomad
                  </span>
                </h3>
                {/* Subheader */}
                <p className="text-[#002A34] font-semibold text-lg md:text-lg mb-4">
                  For people on the move
                </p>
                {/* Body - Bullet Points */}
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">
                    Access to multiple regions
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    X free nights per month (or per quarter)
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Priority booking at partner hostels
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Discounts on multi-night stays
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Access to local partner experiences (tours, workshops)
                  </li>
                </ul>
                {/* Button */}
                <button className="w-full px-6 py-3 bg-[#FDA700] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all">
                  View Nomad Pass
                </button>
              </div>
            </div>

            {/* Card 3 - Global */}
            <div className="bg-[#FDFBF4] rounded-lg overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48 flex-shrink-0">
                <img 
                  src={globalImage} 
                  alt="Global" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 text-left flex flex-col flex-1">
                {/* Title */}
                <h3 className="chivo-mono-bold text-[#002A34] text-2xl md:text-2xl mb-2">
                  WanderPass{''}
                  <span className="chivo-mono-bold relative inline-block ml-2 px-1 py-1 bg-[#2CE0FF] rounded-tl-2xl rounded-br-2xl">
                    Global
                  </span>
                </h3>
                {/* Subheader */}
                <p className="text-[#002A34] font-semibold text-lg md:text-lg mb-4">
                  For year-round adventurers
                </p>
                {/* Body - Bullet Points */}
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="text-[#002A34] text-s md:text-md">
                    Global access to every partner hostel
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Unlimited discounted stays or a set number of free nights/month
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    24/7 booking assistance
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Exclusive events and collaborations
                  </li>
                  <li className="text-[#002A34] text-s md:text-m">
                    Early access to new countries and hostel partners
                  </li>
                </ul>
                {/* Button */}
                <button className="w-full px-6 py-3 bg-[#2CE0FF] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all">
                  View Global Pass
                </button>
              </div>
            </div>
          </div>
          
          {/* View Pricing Page Text */}
          <div className="text-center mt-8">
            <a href="#" className="nav-link-underline-dark text-[#002A34] font-medium text-base">
              View Pricing Page
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FDFBF4] py-16 md:py-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#002A34] mb-4 uppercase">
              HOW IT WORKS
            </h2>
            <p className="text-lg md:text-xl text-[#002A34]">
              Travel should feel like freedom, not logistics.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left Arrow - Desktop Only */}
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

            {/* Right Arrow - Desktop Only */}
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

            {/* Carousel Content */}
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
                    <div key={step} className="w-full flex-shrink-0 flex flex-col md:flex-row h-[700px] md:h-[700px]">
                      {/* Left Side - Image/Graphic Placeholder */}
                      <div className="w-full md:w-1/2 bg-[#002A34] flex items-center justify-center h-[250px] md:h-full p-0 overflow-hidden flex-shrink-0">
                        <img 
                          src={
                            step === 0 ? juddgabeImage :
                            step === 1 ? juddsydImage :
                            step === 2 ? sandiegoImage :
                            westonwanderImage
                          }
                          alt={`Step ${step + 1}`}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center 65%' }}
                        />
                      </div>

                      {/* Right Side - Content Panel */}
                      <div className="w-full md:w-1/2 bg-[#EFECE1] px-6 pt-6 md:p-12 lg:p-16 flex flex-col flex-1">
                        <div className="flex-1">
                          <p className="text-[#002A34] text-sm md:text-base mb-2">
                            Step {step + 1}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#002A34] uppercase mb-4">
                            {step === 0 && "CHOOSE YOUR PASS"}
                            {step === 1 && "BOOK YOUR STAY"}
                            {step === 2 && "JOIN THE COMMUNITY"}
                            {step === 3 && "START YOUR JOURNEY"}
                          </h3>
                          <p className="text-[#002A34] text-base md:text-lg mb-6">
                            {step === 0 && "Select the WanderPass that matches your travel style. Whether you're exploring locally, hopping between regions, or going global, we have a pass designed for your journey. Each tier offers different levels of access, benefits, and destinations to fit your adventure."}
                            {step === 1 && "Select from our network of trusted hostels around the world. Book your stay with ease and confidence."}
                            {step === 2 && "Connect with fellow travelers, attend local events, and become part of a global community of adventurers."}
                            {step === 3 && "Your adventure begins now. Pack your bags, grab your pass, and explore the world with Global Village."}
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
                        <div className="pt-6 pb-6 md:pb-0">
                          <button className={`w-full md:w-auto px-8 py-3 text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all ${
                            step === 0 ? 'bg-[#CEF550]' :
                            step === 1 ? 'bg-[#FDA700]' :
                            step === 2 ? 'bg-[#2CE0FF]' :
                            'bg-[#CEF550]'
                          }`}>
                            {step === 0 && "View Passes"}
                            {step === 1 && "Browse Hostels"}
                            {step === 2 && "Join Events"}
                            {step === 3 && "Get Started"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    currentStep === step
                      ? 'bg-[#002A34]'
                      : 'bg-[#EFECE1]'
                  }`}
                  aria-label={`Go to step ${step + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#B8DC73] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#002A34] text-lg md:text-lg mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002A34] uppercase">
              QUESTIONS & ANSWERS
            </h2>
          </div>

          {/* FAQ Grid - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 max-w-6xl mx-auto">
            {/* Column 1 */}
            <div className="space-y-3">
              {[
                {
                  question: "What is Global Village and how does it work?",
                  answer: "Global Village is a travel pass and community network that partners with hostels and local experiences worldwide. With one pass, you get access to discounted stays, community events, and a network of trusted hostels. Simply choose your pass tier, book your stays, and start exploring!"
                },
                {
                  question: "What's the difference between Local, Nomad, and Global passes?",
                  answer: "Local pass gives you access to hostels in one region or country with discounted rates. Nomad pass provides access to multiple regions with free nights per month and priority booking. Global pass offers worldwide access with unlimited discounted stays or free nights, plus 24/7 booking assistance and exclusive events."
                },
                {
                  question: "Can I upgrade my pass after purchasing?",
                  answer: "Yes! You can upgrade your pass at any time. Simply contact our support team and we'll help you upgrade to a higher tier. The cost difference will be prorated based on your remaining pass duration."
                },
                {
                  question: "Are the hostels vetted and safe?",
                  answer: "Absolutely. We carefully vet all partner hostels to ensure they meet our standards for safety, cleanliness, and community atmosphere. All hostels in our network are trusted partners that provide a warm, social, and safe environment for travelers."
                },
                {
                  question: "Do I need to book in advance?",
                  answer: "While advance booking is recommended, especially during peak travel seasons, you can also book last-minute stays depending on availability. Nomad and Global pass holders get priority booking, which helps secure spots even during busy periods."
                }
              ].map((faq, index) => {
                const isExpanded = expandedFaq.has(index);
                return (
                  <div key={index} className="pb-2" ref={el => faqRefs.current[index] = el}>
                    <div className={`rounded-lg px-4 transition-all group ${isExpanded ? 'bg-[#A1C55C] py-5' : 'hover:bg-[#A1C55C] py-2'}`}>
                      <button
                        onClick={() => {
                          const newExpanded = new Set(expandedFaq);
                          if (isExpanded) {
                            newExpanded.delete(index);
                            setExpandedFaq(newExpanded);
                          } else {
                            newExpanded.add(index);
                            setExpandedFaq(newExpanded);
                            // Scroll to the question after expansion starts
                            smoothScrollTo(faqRefs.current[index], 20);
                          }
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
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-[#002A34]/20">
                          <p className="text-[#002A34] text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              {[
                {
                  question: "What happens if a hostel is fully booked?",
                  answer: "If your preferred hostel is fully booked, our booking support team can help you find alternative options in the same area. Global pass holders also get early access to new partner hostels and priority booking during high-demand periods."
                },
                {
                  question: "Can I use my pass for group bookings?",
                  answer: "Yes, you can use your pass for group bookings. However, the pass benefits apply to the pass holder. Additional guests will need to pay standard rates or purchase their own passes. Contact our support team for group booking assistance."
                },
                {
                  question: "Are there any hidden fees or additional costs?",
                  answer: "No hidden fees! The pass price is transparent, and you'll only pay for the discounted nightly rates at partner hostels. Some hostels may have optional add-ons like breakfast or tours, but these are clearly marked and optional."
                },
                {
                  question: "How do I access community events?",
                  answer: "Once you have a pass, you'll receive access to our community platform where you can see upcoming events at partner hostels. Events range from local tours and workshops to social gatherings. Simply RSVP through the platform and show up!"
                },
                {
                  question: "What if I need to cancel or get a refund?",
                  answer: "Pass refunds are available within 30 days of purchase if unused. For hostel bookings, cancellation policies vary by property and are clearly stated at booking. Our support team is available 24/7 to assist with any cancellation needs."
                }
              ].map((faq, index) => {
                const faqIndex = index + 5; // Continue numbering from column 1
                const isExpanded = expandedFaq.has(faqIndex);
                return (
                  <div key={faqIndex} className="pb-2" ref={el => faqRefs.current[faqIndex] = el}>
                    <div className={`rounded-lg px-4 transition-all group ${isExpanded ? 'bg-[#A1C55C] py-5' : 'hover:bg-[#A1C55C] py-2'}`}>
                      <button
                        onClick={() => {
                          const newExpanded = new Set(expandedFaq);
                          if (isExpanded) {
                            newExpanded.delete(faqIndex);
                            setExpandedFaq(newExpanded);
                          } else {
                            newExpanded.add(faqIndex);
                            setExpandedFaq(newExpanded);
                            // Scroll to the question after expansion starts
                            smoothScrollTo(faqRefs.current[faqIndex], 20);
                          }
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
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-[#002A34]/20">
                          <p className="text-[#002A34] text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Banner */}
      <section className="bg-[#FFF9E6] py-16 md:py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16">
            {/* Left Side - Promo Text */}
            <div className="flex-1 text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
              <p className="font-black text-[#002A34] text-2xl md:text-5xl leading-tight">
                Get travel tips, exclusive deals, & community updates.
              </p>
            </div>

            {/* Right Side - Email Input Box */}
            <div className="w-full md:w-auto md:flex-1 md:max-w-none flex-shrink-0">
              <div className="bg-[#002A34] rounded-lg p-2 flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-transparent text-[#FDFBF4] placeholder:text-[#FDFBF4]/60 focus:outline-none text-sm md:text-base min-w-0"
                />
                <span className="text-[#CEF550] font-medium text-sm md:text-base whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity pr-4">
                  Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002A34] text-[#FDFBF4] px-6">
        <div className="max-w-6xl mx-auto py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <a href="/" className="uppercase font-black text-xl md:text-2xl tracking-wide text-[#FDFBF4] hover:text-[#CEF550] transition-colors inline-block mb-4">
                GLOBAL VILLAGE
              </a>
              <p className="text-sm text-[#FDFBF4]/80 leading-relaxed">
                Your passport to a global community of travelers and trusted hostels worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-4 uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-base mb-4 uppercase tracking-wide">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#help" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Booking Support
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-base mb-4 uppercase tracking-wide">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Legal & Copyright */}
          <div className="border-t border-[#FDFBF4]/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
                <a href="#privacy" className="text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Cookie Policy
                </a>
                <a href="#accessibility" className="text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Accessibility
                </a>
              </div>

              {/* Copyright */}
              <div className="text-sm text-[#FDFBF4]/60 text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Global Village. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

