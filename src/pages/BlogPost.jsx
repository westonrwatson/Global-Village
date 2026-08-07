import { Link, useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../data/blogPosts'

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

  return (
    <>
      <section className="bg-[#FFF9E6] pt-28 md:pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="nav-link-underline-dark text-[#002A34] text-sm font-medium inline-block mb-8"
          >
            ← Back to Blog
          </Link>
          <p className="chivo-mono text-[#002A34] text-sm uppercase tracking-wide mb-3">{post.category}</p>
          <h1 className="text-[#002A34] font-black text-3xl md:text-5xl uppercase leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-[#002A34]/70 text-sm md:text-base">{formatDate(post.date)}</p>
        </div>
      </section>

      <article className="bg-[#FDFBF4] py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {post.paragraphs.map((paragraph, i) => (
            <p key={i} className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <section className="bg-[#CEF550] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#002A34] font-black text-2xl md:text-3xl uppercase mb-4">
            Keep exploring
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="px-8 py-3 bg-[#FDFBF4] text-[#002A34] font-medium text-base rounded-full hover:brightness-95 transition-all"
            >
              More Posts
            </Link>
            <Link
              to="/join"
              className="px-8 py-3 bg-[#002A34] text-[#FDFBF4] font-medium text-base rounded-full hover:opacity-90 transition-opacity"
            >
              Join the Village
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
