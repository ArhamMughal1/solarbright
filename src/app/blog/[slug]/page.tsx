import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/utils/blog'
import { JsonLd } from '@/components/SEO/JsonLd'
import BlogContent from '@/components/Blog/BlogContent'
import BlogSidebar from '@/components/Blog/BlogSidebar'
import RelatedPosts from '@/components/Blog/RelatedPosts'
import ShareButtons from '@/components/Blog/ShareButtons'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | SolarBright Blog`,
    description: post.excerpt,
    keywords: post.tags || [
      'solar energy',
      'blockchain',
      'trading',
      'crypto news',
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://solarbright.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://solarbright.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
            image: post.authorImage,
          },
          publisher: {
            '@type': 'Organization',
            name: 'SolarBright',
            logo: {
              '@type': 'ImageObject',
              url: 'https://solarbright.com/images/logo/logo.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://solarbright.com/blog/${post.slug}`,
          },
          keywords: post.tags?.join(', ') || '',
        }}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://solarbright.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://solarbright.com/blog',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: post.title,
              item: `https://solarbright.com/blog/${post.slug}`,
            },
          ],
        }}
      />

      <article className="relative pt-[150px] pb-20 lg:pt-[180px]">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="container px-4">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium line-clamp-1">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogContent post={post} />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Share this post</h3>
                <ShareButtons
                  url={`https://solarbright.com/blog/${post.slug}`}
                  title={post.title}
                />
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <img
                    src={post.authorImage || '/images/default-avatar.png'}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {post.author}
                    </h4>
                    <p className="text-muted-foreground">
                      Crypto enthusiast and solar energy expert sharing insights on
                      the latest trends in digital finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar currentSlug={post.slug} posts={allPosts} />
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <RelatedPosts posts={relatedPosts} />
            </div>
          )}
        </div>
      </article>
    </>
  )
}
