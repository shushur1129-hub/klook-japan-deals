import Link from 'next/link'

interface Deal {
  id: string
  title: string
  location: string
  originalPrice: number
  discountedPrice: number
  savedAmount: number
  imageUrl: string
  url: string
  rating: string
}

const AFFILIATE_ID = 'api|13694|97bab10eecda4be09af535a55-729240|pid|729240'

function buildAffiliateUrl(targetUrl: string) {
  return `https://affiliate.klook.com/redirect?aid=${encodeURIComponent(AFFILIATE_ID)}&k_site=${encodeURIComponent(targetUrl)}`
}

const deals: Deal[] = [
  {
    id: '1',
    title: '相鐵FRESA INN大阪難波車站前',
    location: '大阪',
    originalPrice: 2184,
    discountedPrice: 1720,
    savedAmount: 464,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/yn1o8f7ttbprakmyqmno.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '4.8',
  },
  {
    id: '2',
    title: '大阪難波相鐵 Grand Fresa',
    location: '大阪',
    originalPrice: 1560,
    discountedPrice: 1310,
    savedAmount: 250,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/grand-fresa-osaka.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '5.0',
  },
  {
    id: '3',
    title: '湯煙之宿雪之花',
    location: '南魚沼市',
    originalPrice: 7686,
    discountedPrice: 6405,
    savedAmount: 1281,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/yukino-hana.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '4.7',
  },
  {
    id: '4',
    title: '大阪難波光芒飯店（CANDEO HOTELS）',
    location: '大阪',
    originalPrice: 2940,
    discountedPrice: 2454,
    savedAmount: 486,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/candeo-osaka.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '4.6',
  },
  {
    id: '5',
    title: '三井花園飯店 橫濱港未來普米爾',
    location: '橫濱',
    originalPrice: 3984,
    discountedPrice: 3320,
    savedAmount: 664,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/mitsui-yokohama.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '5.0',
  },
  {
    id: '6',
    title: '濱千鳥之湯 海舟',
    location: '西牟婁',
    originalPrice: 4788,
    discountedPrice: 3917,
    savedAmount: 871,
    imageUrl: 'https://res.klook.com/image/upload/c_fill,w_560,h_420/q_80/w_80,x_15,y_15,g_south_west,l_klook_water/hotels/kaishu-onsen.jpg',
    url: 'https://www.klook.com/zh-TW/hotels/',
    rating: '4.6',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🎌 Klook 日本飯店特惠</h1>
        <p className="text-slate-400 text-lg">精選日本飯店最低優惠價，立即預訂省更多</p>
        <div className="mt-4 inline-block bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
          ✅ 共找到 {deals.length} 個特惠飯店
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
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
              />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-lg">
                省 NT${deal.savedAmount}
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 text-yellow-400 text-xs px-2 py-1 rounded-lg">
                ⭐ {deal.rating}
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-400 text-sm mb-1">📍 {deal.location}</p>
              <h2 className="font-semibold text-lg mb-3 leading-tight">{deal.title}</h2>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-400">
                  NT${deal.discountedPrice.toLocaleString()}
                </span>
                <span className="text-slate-500 line-through text-sm">
                  NT${deal.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="mt-3 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors">
                立即預訂 →
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