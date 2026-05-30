import Link from 'next/link'

interface Deal {
  id: string
  title: string
  originalPrice: number
  discountedPrice: number
  discount: number
  imageUrl: string
  url: string
  category: string
}

const AFFILIATE_ID = 'api|13694|97bab10eecda4be09af535a55-729240|pid|729240'

function buildAffiliateUrl(targetUrl: string) {
  return `https://affiliate.klook.com/redirect?aid=${encodeURIComponent(AFFILIATE_ID)}&k_site=${encodeURIComponent(targetUrl)}`
}

const mockDeals: Deal[] = [
  {
    id: '1',
    title: '東京迪士尼樂園門票',
    originalPrice: 2800,
    discountedPrice: 2380,
    discount: 15,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tokyo-disneyland.jpg',
    url: 'https://www.klook.com/zh-TW/activity/17310-tokyo-disneyland-ticket/',
    category: '主題樂園',
  },
  {
    id: '2',
    title: '大阪環球影城門票',
    originalPrice: 3200,
    discountedPrice: 2720,
    discount: 15,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/osaka-usj.jpg',
    url: 'https://www.klook.com/zh-TW/activity/5753-universal-studios-japan-ticket-osaka/',
    category: '主題樂園',
  },
  {
    id: '3',
    title: 'JR Pass 全國版 7 日券',
    originalPrice: 15000,
    discountedPrice: 12750,
    discount: 15,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jr-pass.jpg',
    url: 'https://www.klook.com/zh-TW/activity/2597-jr-pass-japan/',
    category: '交通',
  },
  {
    id: '4',
    title: '京都嵐山人力車體驗',
    originalPrice: 1200,
    discountedPrice: 960,
    discount: 20,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/kyoto-rickshaw.jpg',
    url: 'https://www.klook.com/zh-TW/activity/2863-arashiyama-rickshaw-kyoto/',
    category: '體驗',
  },
  {
    id: '5',
    title: '富士山一日遊（東京出發）',
    originalPrice: 3500,
    discountedPrice: 2975,
    discount: 15,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/mt-fuji-day-trip.jpg',
    url: 'https://www.klook.com/zh-TW/activity/2965-mt-fuji-day-trip-tokyo/',
    category: '一日遊',
  },
  {
    id: '6',
    title: '沖繩美麗海水族館門票',
    originalPrice: 900,
    discountedPrice: 765,
    discount: 15,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/activities/okinawa-aquarium.jpg',
    url: 'https://www.klook.com/zh-TW/activity/3518-okinawa-churaumi-aquarium/',
    category: '景點',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🎌 Klook 日本特惠偵測器</h1>
        <p className="text-slate-400 text-lg">即時追蹤日本最熱門活動優惠，搶便宜不漏接</p>
        <div className="mt-4 inline-block bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
          ✅ 共找到 {mockDeals.length} 個特惠活動
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDeals.map((deal) => (
          <Link
            key={deal.id}
            href={buildAffiliateUrl(deal.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200 hover:shadow-xl hover:shadow-blue-500/20 block"
          >
            <div className="relative">
              <img
                src={deal.imageUrl}
                alt={deal.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/560x420/1e293b/64748b?text=Klook+Japan'
                }}
              />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-lg">
                -{deal.discount}%
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 text-slate-300 text-xs px-2 py-1 rounded-lg">
                {deal.category}
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-3 leading-tight">{deal.title}</h2>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-400">
                  ¥{deal.discountedPrice.toLocaleString()}
                </span>
                <span className="text-slate-500 line-through text-sm">
                  ¥{deal.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="mt-3 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors">
                立即搶購 →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <footer className="text-center mt-12 text-slate-600 text-sm">
        <p>價格僅供參考，實際以 Klook 官網為準</p>
      </footer>
    </main>
  )
}
