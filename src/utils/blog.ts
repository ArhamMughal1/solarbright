import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// This file uses Node.js fs/path APIs.
// It ONLY runs at build-time (via generateStaticParams / generateMetadata)
// and is therefore safe on both Vercel (Node.js) and Cloudflare Pages (build step).
// It must NEVER be imported into Edge Runtime routes or client components.

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage: string
  author: string
  authorImage: string
  content: string
  tags?: string[]
}

const postsDirectory = path.join(process.cwd(), 'markdown/blog')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(postsDirectory)) return []
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames
        .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx?$/, '')
          return getPostBySlug(slug)
        })
    )
    return allPostsData
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    let filePath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) {
      filePath = path.join(postsDirectory, `${slug}.md`)
      if (!fs.existsSync(filePath)) return null
    }
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    const tagsMatch = content.match(/##\s*Tags\s*\n([\s\S]*?)(?=\n##|\n---|\s*$)/i)
    const tags = tagsMatch
      ? tagsMatch[1].split('\n').map((l) => l.replace(/^-\s*/, '').trim()).filter(Boolean)
      : []
    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: String(data.date || new Date().toISOString()),
      coverImage: data.coverImage || '/images/blog/default.jpg',
      author: data.author || 'SolarBright Team',
      authorImage: data.authorImage || '/images/default-avatar.png',
      content: contentHtml,
      tags,
    }
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / 200)
}
