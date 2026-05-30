import Link from 'next/link'

const AFFILIATE_ID = 'api|13694|97bab10eecda4be09af535a55-729240|pid|729240'

function buildAffiliateUrl(targetUrl: string) {
  return `https://affiliate.klook.com/redirect?aid=${encodeURIComponent(AFFILIATE_ID)}&k_site=${encodeURIComponent(targetUrl)}`
}

const cities = [
  {
    id: '1',
    name: '東京',
    nameEn: 'Tokyo',
    emoji: '🗼',
    description: '日本首都，融合現代與傳統的魅力城市',
    highlight: '淺草寺・新宿・澀谷・秋葉原',
    color: 'from-blue-600 to-blue-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c28-tokyo/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c28-tokyo/',
  },
  {
    id: '2',
    name: '大阪',
    nameEn: 'Osaka',
    emoji: '🏯',
    description: '美食天堂，道頓堀夜生活最精彩',
    highlight: '環球影城・道頓堀・大阪城・心齋橋',
    color: 'from-orange-600 to-orange-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c30-osaka/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c30-osaka/',
  },
  {
    id: '3',
    name: '京都',
    nameEn: 'Kyoto',
    emoji: '⛩️',
    description: '千年古都，寺廟神社與傳統文化的精髓',
    highlight: '嵐山・伏見稻荷・金閣寺・祇園',
    color: 'from-red-600 to-red-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c31-kyoto/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c31-kyoto/',
  },
  {
    id: '4',
    name: '北海道',
    nameEn: 'Hokkaido',
    emoji: '❄️',
    description: '北國絕景，滑雪溫泉螃蟹一次滿足',
    highlight: '札幌・小樽・函館・富良野',
    color: 'from-cyan-600 to-cyan-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c35-sapporo/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c35-sapporo/',
  },
  {
    id: '5',
    name: '沖繩',
    nameEn: 'Okinawa',
    emoji: '🏖️',
    description: '南國海島度假勝地，透明海水與珊瑚礁',
    highlight: '美麗海水族館・首里城・潛水・浮潛',
    color: 'from-teal-600 to-teal-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c64-naha/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c64-naha/',
  },
  {
    id: '6',
    name: '福岡',
    nameEn: 'Fukuoka',
    emoji: '🍜',
    description: '九州門戶，博多拉麵與新鮮海鮮的故鄉',
    highlight: '太宰府・博多・天神・柳川',
    color: 'from-purple-600 to-purple-800',
    hotelUrl: 'https://www.klook.com/zh-TW/destination/c38-fukuoka/3-hotel/',
    activityUrl: 'https://www.klook.com/zh-TW/destination/c38-fukuoka/',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🎌 日本旅遊特惠總整理</h1>
        <p className="text-slate-400 text-lg">精選日本熱門城市・飯店＋景點最優惠價格</p>
        <div className="mt-4 inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm">
          🔥 即時 Klook 官方最低價
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div
            key={city.id}
            className="bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className={`bg-gradient-to-br ${city.color} p-8 text-center`}>
              <div className="text-6xl mb-2">{city.emoji}</div>
              <h2 className="text-2xl font-bold text-white">{city.name}</h2>
              <p className="text-white/70 text-sm">{city.nameEn}</p>
            </div>
            <div className="p-5">
              <p className="text-slate-300 text-sm mb-2">{city.description}</p>
              <p className="text-slate-500 text-xs mb-4">📍 {city.highlight}</p>
              <div className="flex flex-col gap-2">
                <Link
                  href={buildAffiliateUrl(city.hotelUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors block"
                >
                  🏨 查看{city.name}飯店特惠
                </Link>
                <Link
                  href={buildAffiliateUrl(city.activityUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors block"
                >
                  🎡 查看{city.name}景點活動
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-800 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">🎫 全日本特惠活動</h2>
        <p className="text-slate-400 text-sm mb-4">JR Pass・機場接送・WiFi・各地景點門票</p>
        <Link
          href={buildAffiliateUrl('https://www.klook.com/zh-TW/deals/coureg/12-japan-things-to-do/')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-bold transition-colors"
        >
          查看全部日本特惠 →
        </Link>
      </div>

      <footer className="text-center mt-12 text-slate-600 text-sm">
        <p>價格以 Klook 官網即時顯示為準</p>
      </footer>
    </main>
  )
}
