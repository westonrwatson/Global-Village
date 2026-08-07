import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { blogPosts, getFeaturedPost } from '../data/blogPosts'
import groupThailandImage from '../assets/GroupThailand.png'
import spencerEyesImage from '../assets/SpencerEyes.png'
import girlsWalkingImage from '../assets/GirlsWalking.png'
import sydHostelImage from '../assets/SydHostel.png'

const coverByIndex = [groupThailandImage, spencerEyesImage, girlsWalkingImage, sydHostelImage, groupThailandImage, spencerEyesImage]

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function Blog() {
  const featured = getFeaturedPost()
  const rest = blogPosts.filter((post) => post.slug !== featured.slug)

  return (
    <>
      <PageHero
        title="Notes from the village"
        subtitle="Travel notes, pass tips, and stories for people who pack light and stay curious."
        tone="soft"
        facts={[
          { label: 'Topics', value: 'Travel · Passes · Community' },
          { label: 'Format', value: 'Short & useful' },
          { label: 'Vibe', value: 'Honest & warm' },
          { label: 'Start here', value: 'Featured story' },
        ]}
      />

      <section className="bg-[#FDFBF4] px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Magazine featured */}
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-12 gap-0 mb-16 md:mb-20 overflow-hidden rounded-lg bg-[#FFF9E6]"
          >
            <div className="md:col-span-7 relative aspect-[16/11] md:aspect-auto md:min-h-[420px] overflow-hidden">
              <img
                src={coverByIndex[0]}
                alt=""
                className="w-full h-full object-cover image-zoom"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center p-8 md:p-12">
              <p className="chivo-mono text-[#002A34]/60 text-xs uppercase tracking-wide mb-3">
                Featured · {featured.category}
              </p>
              <h2 className="text-[#002A34] font-black text-3xl md:text-4xl uppercase leading-tight mb-4 group-hover:opacity-80 transition-opacity">
                {featured.title}
              </h2>
              <p className="roboto-regular text-[#002A34] text-base leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <p className="text-[#002A34]/60 text-sm mb-6">{formatDate(featured.date)}</p>
              <span className="text-[#002A34] font-medium text-sm nav-link-underline-dark self-start">
                Read story
              </span>
            </div>
          </Link>

          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[#002A34] font-black text-2xl md:text-3xl uppercase">Latest</h2>
            <p className="chivo-mono text-[#002A34]/50 text-xs uppercase tracking-wide hidden sm:block">
              {rest.length} more stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {rest.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-5">
                  <img
                    src={coverByIndex[(i + 1) % coverByIndex.length]}
                    alt=""
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="chivo-mono text-[#002A34]/60 text-xs uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-[#002A34]/50 text-xs">{formatDate(post.date)}</span>
                </div>
                <h3 className="text-[#002A34] font-black text-xl md:text-2xl uppercase leading-tight mb-2 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>
                <p className="roboto-regular text-[#002A34] text-base leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
