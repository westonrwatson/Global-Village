import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#002A34] text-[#FDFBF4] px-6">
      <div className="max-w-6xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="uppercase font-black text-xl md:text-2xl tracking-wide text-[#FDFBF4] hover:text-[#CEF550] transition-colors inline-block mb-4"
            >
              GLOBAL VILLAGE
            </Link>
            <p className="text-sm text-[#FDFBF4]/80 leading-relaxed">
              Your passport to a global community of travelers and trusted hostels worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wide">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/my-pass" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  My Pass
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Booking Support
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm text-[#FDFBF4]/80 hover:text-[#CEF550] transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

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

        <div className="border-t border-[#FDFBF4]/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <span className="text-[#FDFBF4]/80">Privacy Policy</span>
              <span className="text-[#FDFBF4]/80">Terms of Service</span>
              <span className="text-[#FDFBF4]/80">Cookie Policy</span>
              <span className="text-[#FDFBF4]/80">Accessibility</span>
            </div>
            <div className="text-sm text-[#FDFBF4]/60 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Global Village. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
