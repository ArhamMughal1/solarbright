'use client'

import { formatDate, calculateReadingTime } from '@/utils/blog'
import type { BlogPost } from '@/utils/blog'

interface BlogContentProps {
  post: BlogPost
}

export default function BlogContent({ post }: BlogContentProps) {
  const readingTime = calculateReadingTime(post.content)

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-6">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{post.author}</span>
          </div>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-h1:text-4xl prose-h1:mb-6
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:my-6 prose-ul:space-y-2
          prose-ol:my-6 prose-ol:space-y-2
          prose-li:text-muted-foreground
          prose-blockquote:border-l-4 prose-blockquote:border-primary
          prose-blockquote:pl-6 prose-blockquote:italic
          prose-blockquote:text-muted-foreground
          prose-code:text-primary prose-code:bg-primary/10
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-secondary prose-pre:border prose-pre:border-border
          prose-img:rounded-xl prose-img:my-8
          prose-hr:border-border prose-hr:my-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
