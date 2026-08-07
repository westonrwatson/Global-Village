import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import globeDotImage from '../assets/GlobeDot.png'
import spencerEyesImage from '../assets/SpencerEyes.png'
import girlsWalkingImage from '../assets/GirlsWalking.png'
import groupThailandImage from '../assets/GroupThailand.png'
import sydHostelImage from '../assets/SydHostel.png'

const values = [
  {
    title: 'One pass',
    body: 'Stop piecing together last-minute beds. WanderPass unlocks a network of trusted hostels so you can move with less friction.',
  },
  {
    title: 'Trusted stays',
    body: 'We partner with hostels that feel warm, social, and safe—places where common rooms turn into friend groups.',
  },
  {
    title: 'Built-in community',
    body: 'Events, dinners, and shared plans come with the territory. Adventure lands better when it is shared.',
  },
  {
    title: 'Go farther',
    body: 'Stay local, hop regions, or go worldwide. Your tier sets the map; the village meets you wherever you land.',
  },
]

function About() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="A travel pass and community network built to help people feel at home anywhere on earth."
        tone="cream"
      />

      <section className="bg-[#FDFBF4] py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src={globeDotImage} alt="" className="w-8 h-8" />
          </div>
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-6">Our mission</h2>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed mb-6">
            Global Village exists for travelers who want freedom without isolation. We connect hostels and local
            experiences into one trusted path—so you can book with confidence, show up to a community, and keep moving
            when the next city calls.
          </p>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed">
            With one pass, you get access to stays, events, and a network of people who believe adventure is better when
            shared. Less logistics. More living room energy, wherever you are.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mb-4">
            <div className="relative overflow-hidden rounded-lg md:col-span-2 h-64 md:h-80">
              <img src={spencerEyesImage} alt="Traveler relaxing" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img src={sydHostelImage} alt="Hostel experience" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-72">
              <img src={girlsWalkingImage} alt="Travelers walking" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg md:col-span-2 h-64 md:h-72">
              <img src={groupThailandImage} alt="Travelers together" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE694] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4">What you get</h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg max-w-2xl mx-auto">
              The village is simple on purpose: pass, places, people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {values.map((item) => (
              <div key={item.title}>
                <h3 className="text-[#002A34] font-black text-2xl uppercase mb-3">{item.title}</h3>
                <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FDFBF4] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase mb-6">Ready when you are</h2>
          <p className="roboto-regular text-[#002A34] text-base md:text-lg mb-8">
            Pick a pass, join the community, and start collecting places that feel like home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-8 py-3 bg-[#CEF550] text-[#002A34] font-medium text-base rounded-full hover:brightness-90 transition-all"
            >
              View Pricing
            </Link>
            <Link
              to="/join"
              className="px-8 py-3 border border-[#002A34] text-[#002A34] font-medium text-base rounded-full hover:bg-[#CEF550] hover:border-[#CEF550] transition-colors"
            >
              Join the Village
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
