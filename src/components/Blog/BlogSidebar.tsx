'use client'

import Link from 'next/link'
import { formatDate } from '@/utils/blog'
import type { BlogPost } from '@/utils/blog'

interface BlogSidebarProps {
  currentSlug: string
  posts: BlogPost[]
}

export default function BlogSidebar({ currentSlug, posts }: BlogSidebarProps) {
  const recentPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 5)

  return (
    <aside className="space-y-8 sticky top-24">
      {/* Search Box */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-3 pr-12 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Search blog posts"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <h3 className="text-lg font-semibold mb-6">Recent Posts</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <time className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {[
            { name: 'Trading', count: 12 },
            { name: 'Blockchain', count: 8 },
            { name: 'Market Analysis', count: 15 },
            { name: 'Cryptocurrency', count: 20 },
            { name: 'Technology', count: 10 },
          ].map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name.toLowerCase()}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors group"
            >
              <span className="font-medium group-hover:text-primary transition-colors">
                {category.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30">
        <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest crypto insights delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2.5 mb-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          aria-label="Email for newsletter"
        />
        <button className="w-full px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm">
          Subscribe
        </button>
      </div>

      {/* Tags */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Bitcoin',
            'Ethereum',
            'DeFi',
            'NFT',
            'Trading',
            'Blockchain',
            'Web3',
            'Altcoins',
          ].map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase()}`}
              className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
