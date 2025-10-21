"use client"

import { useState, useEffect } from "react"
import { Menu, User, Settings, Moon, Sun, Edit, Upload, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Exemplo de dados - substitua pela sua API
const EXAMPLE_USER = {
  name: "Tai Kamiya",
  bio: "Líder dos DigiDestined e parceiro do Agumon. Sempre pronto para uma aventura no Mundo Digital!",
  followers: 1247,
  following: 342,
  favoriteDigimons: [
    { id: 1, name: "Agumon" },
    { id: 4, name: "WarGreymon" },
    { id: 10, name: "Angemon" },
    { id: 8, name: "MetalGarurumon" },
  ],
}

export default function ProfilePage() {
  const [user, setUser] = useState(EXAMPLE_USER)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isIconAnimating, setIsIconAnimating] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode === "true") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsIconAnimating(true)
    setTimeout(() => setIsIconAnimating(false), 600)

    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] dark:from-[#7f1d1d] dark:via-[#7c2d12] dark:to-[#713f12] border-b-4 border-[#fbbf24] dark:border-[#ca8a04] shadow-[0_8px_30px_rgb(239,68,68,0.4)] dark:shadow-[0_8px_30px_rgb(202,138,4,0.3)]">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] dark:from-[#ca8a04] dark:to-[#a16207] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.6)] dark:shadow-[0_0_20px_rgba(202,138,4,0.5)] border-2 sm:border-4 border-white dark:border-[#78716c] animate-pulse">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] dark:from-[#1e40af] dark:to-[#1e3a8a] rounded-full shadow-inner" />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                DIGIDEX
              </h1>
            </div>

            <nav className="flex gap-1 sm:gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={toggleDarkMode}
                className="bg-white/90 hover:bg-white dark:bg-[#292524] dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-[#fbbf24] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <div className={`${isIconAnimating ? "animate-[spin_0.6s_ease-in-out]" : ""}`}>
                  {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white dark:bg-[#292524] dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">Menu</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white dark:bg-[#292524] dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">Conta</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white dark:bg-[#292524] dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">Config</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
        <div className="max-w-5xl mx-auto">
          {/* Edit Button */}
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => setIsEditMode(!isEditMode)}
              className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] dark:from-[#1e40af] dark:to-[#1e3a8a] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:shadow-[0_0_20px_rgba(30,64,175,0.3)] hover:scale-105 transition-all duration-300"
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditMode ? "Salvar Perfil" : "Editar Perfil"}
            </Button>
          </div>

          {/* Profile Card */}
          <Card className="bg-gradient-to-br from-[#475569] via-[#334155] to-[#1e293b] dark:from-[#292524] dark:via-[#1c1917] dark:to-[#0a0a0a] border-4 border-[#fbbf24] dark:border-[#ca8a04] shadow-[0_10px_40px_rgba(251,191,36,0.3)] dark:shadow-[0_10px_40px_rgba(202,138,4,0.2)] overflow-hidden">
            {/* Banner */}
            <div className="relative h-48 sm:h-64 bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] dark:from-[#7f1d1d] dark:via-[#7c2d12] dark:to-[#713f12] overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="border border-white/20" />
                  ))}
                </div>
              </div>
              {isEditMode && (
                <button className="absolute top-4 right-4 bg-white/90 dark:bg-[#292524]/90 hover:bg-white dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
                  <Upload className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Profile Picture */}
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 -mt-16 sm:-mt-20">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] dark:from-[#1e40af] dark:to-[#1e3a8a] rounded-full border-4 sm:border-6 border-white dark:border-[#78716c] shadow-[0_0_30px_rgba(59,130,246,0.6)] dark:shadow-[0_0_30px_rgba(30,64,175,0.5)] flex items-center justify-center overflow-hidden">
                    <div className="text-6xl sm:text-7xl">👤</div>
                  </div>
                  {isEditMode && (
                    <button className="absolute bottom-2 right-2 bg-white/90 dark:bg-[#292524]/90 hover:bg-white dark:hover:bg-[#1c1917] text-[#0f172a] dark:text-white p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
                      <Upload className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left pb-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-2">
                    {user.name}
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm sm:text-base">
                    <div className="flex items-center gap-2 text-[#cbd5e1] dark:text-[#a8a29e]">
                      <Users className="w-5 h-5 text-[#3b82f6] dark:text-[#fbbf24]" />
                      <span className="font-semibold text-white">{user.followers}</span>
                      <span>Seguidores</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#cbd5e1] dark:text-[#a8a29e]">
                      <Users className="w-5 h-5 text-[#10b981] dark:text-[#ca8a04]" />
                      <span className="font-semibold text-white">{user.following}</span>
                      <span>Seguindo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6 pb-6">
                <div className="bg-[#1e293b] dark:bg-[#000000] rounded-lg p-4 sm:p-6 border-2 border-[#64748b] dark:border-[#44403c] shadow-inner">
                  <h3 className="text-lg sm:text-xl font-bold text-[#fbbf24] mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] dark:from-[#ca8a04] dark:to-[#a16207] rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                    Biografia
                  </h3>
                  {isEditMode ? (
                    <textarea
                      className="w-full bg-[#0f172a] dark:bg-[#0a0a0a] text-[#cbd5e1] dark:text-[#a8a29e] p-3 rounded-lg border border-[#64748b] dark:border-[#44403c] focus:border-[#3b82f6] dark:focus:border-[#fbbf24] focus:outline-none transition-colors duration-300 min-h-[100px]"
                      defaultValue={user.bio}
                    />
                  ) : (
                    <p className="text-[#cbd5e1] dark:text-[#a8a29e] leading-relaxed">{user.bio}</p>
                  )}
                </div>
              </div>

              {/* Favorite Digimons */}
              <div className="pb-6 sm:pb-8">
                <div className="bg-[#1e293b] dark:bg-[#000000] rounded-lg p-4 sm:p-6 border-2 border-[#64748b] dark:border-[#44403c] shadow-inner">
                  <h3 className="text-lg sm:text-xl font-bold text-[#fbbf24] mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#ef4444] dark:text-[#dc2626] fill-current" />
                    Digimons Favoritos
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {user.favoriteDigimons.map((digimon) => (
                      <div
                        key={digimon.id}
                        className="bg-gradient-to-br from-[#334155] to-[#1e293b] dark:from-[#1c1917] dark:to-[#0a0a0a] rounded-lg p-4 border-2 border-[#64748b] dark:border-[#44403c] hover:border-[#3b82f6] dark:hover:border-[#fbbf24] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] cursor-pointer"
                      >
                        <div className="aspect-square bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/20 to-[#10b981]/30 dark:from-[#ca8a04]/30 dark:via-[#dc2626]/20 dark:to-[#7f1d1d]/30 rounded-lg border-2 border-dashed border-[#64748b] dark:border-[#44403c] flex items-center justify-center mb-3">
                          <div className="text-4xl">🔷</div>
                        </div>
                        <div className="text-center">
                          <p className="font-mono text-xs text-[#64748b] dark:text-[#78716c] mb-1">
                            #{String(digimon.id).padStart(3, "0")}
                          </p>
                          <p className="font-semibold text-white text-sm truncate">{digimon.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {isEditMode && (
                    <button className="mt-4 w-full bg-gradient-to-r from-[#10b981] to-[#059669] dark:from-[#065f46] dark:to-[#064e3b] hover:from-[#059669] hover:to-[#047857] text-white font-semibold py-3 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] dark:shadow-[0_0_15px_rgba(6,95,70,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Adicionar Digimon Favorito
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
