import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { blogPosts, getFeaturedPost } from '../data/blogPosts'

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
        title="Blog"
        subtitle="Travel notes, pass tips, and stories from the village—written for people who pack light and stay curious."
        tone="soft"
      />

      <section className="bg-[#FDFBF4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to={`/blog/${featured.slug}`}
            className="block bg-[#FFF9E6] rounded-lg p-8 md:p-12 mb-14 group"
          >
            <p className="chivo-mono text-[#002A34] text-sm mb-3 uppercase tracking-wide">
              Featured · {featured.category}
            </p>
            <h2 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase mb-4 group-hover:text-[#002A34]/80 transition-colors">
              {featured.title}
            </h2>
            <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
              {featured.excerpt}
            </p>
            <p className="text-[#002A34]/70 text-sm">{formatDate(featured.date)}</p>
          </Link>

          <div className="space-y-0 divide-y divide-[#002A34]/15">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block py-8 md:py-10 group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <span className="chivo-mono text-[#002A34] text-xs md:text-sm uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-[#002A34]/60 text-sm">{formatDate(post.date)}</span>
                </div>
                <h3 className="text-[#002A34] font-black text-2xl md:text-3xl uppercase mb-3 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h3>
                <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
