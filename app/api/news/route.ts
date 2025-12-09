// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { NewsApiResponse, ApiNewsResponse } from '@/lib/news'

const CACHE_DURATION = 3600 // 1 hour

const DOMAIN_MAP: Record<string, string> = {
  'ai': 'techcrunch.com,venturebeat.com,wired.com,mit.edu,openai.com',
  'cloud': 'techcrunch.com,zdnet.com,infoq.com,cloud.google.com,aws.amazon.com',
  'loyalty': 'forbes.com,entrepreneur.com,businessinsider.com,cmo.com',
  'dev': 'dev.to,smashingmagazine.com,css-tricks.com,github.blog,stackoverflow.blog',
  'automation': 'zapier.com,hubspot.com,salesforce.com,automationanywhere.com',
  'training': 'coursera.org,edx.org,udemy.com,linkedin.com,skillshare.com',
  'financial': 'bloomberg.com,reuters.com,cnbc.com,ft.com,wsj.com',
  'procurement': 'supplychaindigital.com,procurementleaders.com,gartner.com,spendmatters.com',
  'general': 'techcrunch.com,bloomberg.com,reuters.com,forbes.com,wired.com'
}

export async function GET(request: NextRequest): Promise<NextResponse<ApiNewsResponse>> {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') || 'technology innovation'
  const category = searchParams.get('category') || 'general'
  const pageSize = parseInt(searchParams.get('pageSize') || '12')
  
  const apiKey = process.env.NEWS_API_KEY
  
  if (!apiKey) {
    return NextResponse.json(
      { 
        articles: [],
        error: 'News API key not configured' 
      },
      { status: 500 }
    )
  }
  
  try {
    const newsApiUrl = new URL('https://newsapi.org/v2/everything')
    newsApiUrl.searchParams.set('q', query)
    newsApiUrl.searchParams.set('apiKey', apiKey)
    newsApiUrl.searchParams.set('pageSize', pageSize.toString())
    newsApiUrl.searchParams.set('language', 'en')
    newsApiUrl.searchParams.set('sortBy', 'publishedAt')
    
    // Exclude less reliable sources
    newsApiUrl.searchParams.set('excludeDomains', 'youtube.com,twitter.com,facebook.com,instagram.com')
    
    // Add domains for better results
    if (DOMAIN_MAP[category]) {
      newsApiUrl.searchParams.set('domains', DOMAIN_MAP[category])
    }
    
    const response = await fetch(newsApiUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: CACHE_DURATION }
    })
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`)
    }
    
    const data: NewsApiResponse = await response.json()
    
    // Filter out invalid articles
    const validArticles = data.articles.filter(
      article => article.title && 
                article.title !== '[Removed]' && 
                article.description && 
                article.url
    )
    
    return NextResponse.json(
      { articles: validArticles.slice(0, 12) },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_DURATION}`,
        }
      }
    )
    
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({
      articles: [],
      error: error instanceof Error ? error.message : 'Failed to fetch news'
    })
  }
}