import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Pricing from './pages/Pricing'
import Join from './pages/Join'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import MyPass from './pages/MyPass'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/join" element={<Join />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/my-pass" element={<MyPass />} />
      </Route>
    </Routes>
  )
}

export default App
