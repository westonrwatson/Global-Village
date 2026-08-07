import { Link, useParams, Navigate } from 'react-router-dom'
import { blogPosts, getPostBySlug } from '../data/blogPosts'
import groupThailandImage from '../assets/GroupThailand.png'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <section className="relative overflow-hidden bg-[#002A34] pt-28 md:pt-32 pb-16 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${groupThailandImage})` }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="text-[#CEF550] text-sm font-medium inline-block mb-8 hover:opacity-80 transition-opacity"
          >
            ← Back to Blog
          </Link>
          <p className="chivo-mono text-[#CEF550] text-sm uppercase tracking-wide mb-3">{post.category}</p>
          <h1 className="text-[#FDFBF4] font-black text-3xl md:text-5xl uppercase leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-[#FDFBF4]/70 text-sm md:text-base">{formatDate(post.date)}</p>
        </div>
      </section>

      <article className="bg-[#FDFBF4] py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="roboto-regular text-[#002A34] text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-[#CEF550] pl-5">
            {post.excerpt}
          </p>
          <div className="space-y-6">
            {post.paragraphs.map((paragraph, i) => (
              <p key={i} className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[#FFF9E6] px-6 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#002A34] font-black text-2xl uppercase mb-8">Keep reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="group block">
                  <p className="chivo-mono text-[#002A34]/50 text-xs uppercase mb-2">{item.category}</p>
                  <h3 className="text-[#002A34] font-black text-xl uppercase leading-tight mb-2 group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="roboto-regular text-[#002A34] text-sm leading-relaxed">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#CEF550] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-2xl md:text-3xl uppercase mb-4">
            Want the real thing?
          </h2>
          <p className="roboto-regular text-[#002A34] text-base mb-8">
            Join the waitlist and start collecting places that feel like home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="px-8 py-3 bg-[#002A34] text-[#FDFBF4] font-medium text-base rounded-full hover:opacity-90 transition-opacity"
            >
              Join the Village
            </Link>
            <Link
              to="/blog"
              className="px-8 py-3 bg-[#FDFBF4] text-[#002A34] font-medium text-base rounded-full hover:brightness-95 transition-all"
            >
              More Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
