'use client'

import Link from 'next/link'
import { formatDate } from '@/utils/blog'
import type { BlogPost } from '@/utils/blog'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="space-y-8" data-aos="fade-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Related <span className="text-primary">Articles</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Continue exploring more insights and trends in the crypto world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className="group bg-secondary/30 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Cover Image */}
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="aspect-[16/10] relative">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`} className="group/title">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover/title:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* Read More */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Read Article
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
