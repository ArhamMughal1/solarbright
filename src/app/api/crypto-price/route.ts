import { NextRequest, NextResponse } from 'next/server'

// Enable Edge Runtime
export const runtime = 'edge'

// Cache configuration
export const revalidate = 60 // Revalidate every 60 seconds

/**
 * GET /api/crypto-price
 * Fetches cryptocurrency prices from CoinGecko API
 * Optimized for Cloudflare Edge with caching
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ids = searchParams.get('ids') || 'bitcoin,ethereum'
    const vs_currency = searchParams.get('vs_currency') || 'usd'

    // Validate input parameters
    if (ids.split(',').length > 50) {
      return NextResponse.json(
        { error: 'Maximum 50 cryptocurrency IDs allowed' },
        { status: 400 }
      )
    }

    // Fetch from CoinGecko with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(
        ids
      )}&vs_currencies=${encodeURIComponent(vs_currency)}&include_24hr_change=true`,
      {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        },
      }
    )

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`CoinGecko API returned ${response.status}`)
    }

    const data = await response.json()

    // Return with aggressive caching headers for Cloudflare
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        'CDN-Cache-Control': 'public, s-maxage=60',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=60',
      },
    })
  } catch (error) {
    console.error('Crypto price API error:', error)

    // Handle timeout errors
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout - please try again' },
        {
          status: 504,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: 'Failed to fetch cryptocurrency prices',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}

/**
 * OPTIONS handler for CORS
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
