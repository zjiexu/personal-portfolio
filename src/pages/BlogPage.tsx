const posts = [
  {
    title: 'Building My Personal Portfolio',
    date: 'In progress',
    tags: ['React', 'TypeScript', 'CSS', 'GitHub Pages'],
    excerpt:
      'Notes from building my personal portfolio site, including routing, component structure, responsive layout, and deployment.',
  },
  {
    title: 'Learning React Router Step by Step',
    date: 'Planned',
    tags: ['React Router', 'Frontend'],
    excerpt:
      'A future write-up about how I structured routes for the landing page, portfolio layout, and individual portfolio sections.',
  },
  {
    title: 'Markdown Blog Engine Project Notes',
    date: 'Planned',
    tags: ['Markdown', 'Static Site', 'SEO'],
    excerpt:
      'Planning notes for a future blog engine that turns Markdown files into pages with tags, RSS, and SEO metadata.',
  },
]

function BlogPage() {
  return (
    <article className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Tech Blog</h1>
        <p>
          Notes, project write-ups, and learning reflections from my software development journey.
        </p>
      </header>

      <div className="portfolio-page-body">
        <section className="blog-list" aria-label="Tech blog posts">
          {posts.map((post) => (
            <article className="blog-post" key={post.title}>
              <h2>{post.title}</h2>

              <p className="blog-post-date">{post.date}</p>

              <div className="blog-post-tags" aria-label={`${post.title} tags`}>
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <p className="blog-post-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </div>
    </article>
  )
}

export default BlogPage
