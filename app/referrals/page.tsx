import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Gift, DollarSign, Plane, ShoppingBag, Smartphone, UtensilsCrossed, Cloud, Calendar, Play, CreditCard } from "lucide-react"
import Link from "next/link"

export default function ReferralsPage() {
  const referralCategories = [
    {
      title: "Development & Hosting",
      icon: Cloud,
      referrals: [
        {
          name: "Railway",
          description: "Hosting and deployment platform for developers",
          benefit: "Support my work",
          url: "https://railway.com?referralCode=CodTxM",
          tags: ["Development", "Hosting"],
        },
        {
          name: "Vultr",
          description: "Cloud compute platform with global data centers",
          benefit: "Get $100 in credits",
          url: "https://www.vultr.com/?ref=8556256",
          tags: ["Cloud", "Hosting", "Development"],
        }
      ],
    },
    {
      title: "Productivity",
      icon: Calendar,
      referrals: [
        {
          name: "Morgen",
          description: "A daily planner that prioritizes your most important to-dos, events, and projects in one app",
          benefit: "Receive $15 off your first bill",
          url: "https://morgen.so/?ref=mor-0mlzhnw",
          tags: ["Productivity", "Planning"],
        }
      ],
    },
    {
      title: "Entertainment",
      icon: Play,
      referrals: [
        {
          name: "Trakt.tv",
          description: "Track and discover movies and TV shows",
          benefit: "Get 1 month of VIP for free",
          url: "https://trakt.tv/vip/referral/15f863fdaff809bba82b26ba725f2dd3",
          tags: ["Entertainment", "Movies", "TV"],
        }
      ],
    },
    {
      title: "Finance",
      icon: CreditCard,
      referrals: [
        {
          name: "Revolut",
          description: "A global financial superapp for personal and business use",
          benefit: "Support me",
          url: "https://revolut.com/referral/?referral-code=rowanpop6w!AUG1-25-VR-NL&geo-redirect",
          tags: ["Finance", "Banking"],
        }
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-white font-bold text-xl">
                {"<RPF />"}
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/#skills" className="text-white/80 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="/#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl inline-block">
              <div className="inline-block backdrop-blur-sm bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-6">
                <Gift className="w-5 h-5 inline-block mr-2 text-white/90" />
                <span className="text-white/90 text-sm font-medium">Referral Links</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Services I
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Recommend
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Here are some services and platforms I personally use and recommend. Using these referral links helps
                support me while giving you great benefits too!
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {referralCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center mb-8">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-full p-2">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.referrals.map((referral, referralIndex) => (
                    <Link
                      href={referral.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={referralIndex}
                      className="block group"
                    >
                      <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl hover:scale-105 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {referral.name}
                            </h3>
                            <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                          </div>

                          <p className="text-white/80 mb-4 leading-relaxed">{referral.description}</p>

                          <div className="backdrop-blur-sm bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-4">
                            <p className="text-green-200 font-medium text-sm">🎁 {referral.benefit}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {referral.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="backdrop-blur-sm bg-white/20 border-white/30 text-white"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl inline-block">
              <p className="text-white/80 text-lg mb-4">
                💡 <strong className="text-white">Transparency Note:</strong> These are genuine recommendations for
                services I personally use.
              </p>
              <p className="text-white/70">
                Using these referral links provides benefits to both of us and helps support my work at no extra cost to
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <Link href="/" className="text-white font-bold text-xl mb-4 md:mb-0">
                {"<RPF />"}
              </Link>
              <div className="text-white/60 text-sm mt-4 md:mt-0">
                © {new Date().getFullYear()} Rowan-Paul Flynn. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
