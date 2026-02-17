import { Metadata } from 'next'
import { getAllPosts } from '@/utils/blog'
import BlogCard from '@/components/Blog/BlogCard'
import { JsonLd } from '@/components/SEO/JsonLd'

export const metadata: Metadata = {
  title: 'SolarBright Blog - Solar Energy Tips, Guides & News',
  description:
    'Stay updated with the latest solar energy trends, market analysis, blockchain technology insights, and trading strategies from CrypGo experts.',
  keywords: [
    'solar energy blog',
    'solar news',
    'blockchain insights',
    'bitcoin analysis',
    'solar trading tips',
    'market trends',
  ],
  openGraph: {
    title: 'SolarBright Blog - Cryptocurrency News & Insights',
    description:
      'Expert insights on solar energy trading, blockchain technology, and market trends.',
    url: 'https://solarbright.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'SolarBright Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarBright Blog - Solar Energy News & Insights',
    description: 'Latest solar energy trends and expert trading strategies.',
    images: ['/images/twitter-blog.png'],
  },
  alternates: {
    canonical: 'https://solarbright.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'SolarBright Blog',
          description:
            'Latest solar energy news, insights, and trading strategies',
          url: 'https://solarbright.com/blog',
          publisher: {
            '@type': 'Organization',
            name: 'CrypGo',
            logo: 'https://crypgo.com/images/logo/logo.png',
          },
          blogPost: posts.slice(0, 5).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            url: `https://solarbright.com/blog/${post.slug}`,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            image: post.coverImage,
          })),
        }}
      />

      <section className="relative overflow-hidden pt-[150px] pb-20 lg:pt-[180px]">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="container px-4">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/20 rounded-full bg-primary/5">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Latest Insights &{' '}
              <span className="text-primary">Solar Energy News</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with expert analysis, market trends, and
              actionable trading strategies from industry leaders.
            </p>
          </div>

          {/* Blog Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div
            className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20"
            data-aos="fade-up"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter and get the latest solar insights
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Email address"
                />
                <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
