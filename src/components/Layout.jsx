import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import EmailBanner from './EmailBanner'
import ScrollToTop from './ScrollToTop'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <EmailBanner />
      <Footer />
    </>
  )
}

export default Layout
