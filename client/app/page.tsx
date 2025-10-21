"use client"

import { useState, useEffect } from "react"
import { Menu, User, Settings, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DigidexPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isIconAnimating, setIsIconAnimating] = useState(false)

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
  interface Digimon {
        name: string;
        level: string;
        image: String;
  }
  const [digimons, setDigimons] = useState<{ id: number; name: string; level: string }[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)

  useEffect(() => {
    // Req do back
    fetch("http://localhost:5000/routes/digimons")
    .then((res) => res.json())
    .then((data) => {
      // Mapear dados garantindo que cada digimon possua um ID
      const formatted = (data as Digimon[]).map((digimon, index) => ({
        id: index + 1,
        name: digimon.name,
        level: digimon.level,
        image: digimon.image
      }));
      setDigimons(formatted);
    })
    .catch ((err) => {
      console.error("Erro ao carregar Digimons:", err)
    });
  }, []);

  const selectedDigimon = digimons.find((d) => d.id === selectedId)

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] dark:from-[#1e1b4b] dark:via-[#312e81] dark:to-[#1e3a8a] border-b-4 border-[#fbbf24] dark:border-[#6366f1]">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] dark:from-[#818cf8] dark:to-[#6366f1] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.6)] dark:shadow-[0_0_20px_rgba(99,102,241,0.6)] border-2 sm:border-4 border-white dark:border-[#4338ca] animate-pulse">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] dark:from-[#c084fc] dark:to-[#a855f7] rounded-full shadow-inner" />
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
                className="cursor-pointer bg-white/90 hover:bg-white dark:bg-[#312e81] dark:hover:bg-[#1e1b4b] text-[#0f172a] dark:text-[#c084fc] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <div className={`${isIconAnimating ? "animate-[spin_0.6s_ease-in-out]" : ""}`}>
                  {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="cursor-pointer bg-white/90 hover:bg-white dark:bg-[#312e81] dark:hover:bg-[#1e1b4b] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">Menu</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="cursor-pointer bg-white/90 hover:bg-white dark:bg-[#312e81] dark:hover:bg-[#1e1b4b] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:inline">Conta</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="cursor-pointer bg-white/90 hover:bg-white dark:bg-[#312e81] dark:hover:bg-[#1e1b4b] text-[#0f172a] dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
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
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 max-w-[1600px] mx-auto h-auto lg:h-[700px]">
          {/* Left Side - Digimon Display */}
          <div className="w-full lg:w-[55%] h-auto lg:h-full bg-gradient-to-br from-[#475569] via-[#334155] to-[#1e293b] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 sm:border-4 border-[#fbbf24] flex flex-col">
            <div className="bg-[#0f172a] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#64748b] sm:border-2 h-auto lg:h-[560px] flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
              {/* Decorative Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-[#3b82f6]" />
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-square bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/20 to-[#10b981]/30 rounded-lg sm:rounded-xl border-2 sm:border-4 border-dashed border-[#64748b] flex items-center justify-center mb-4 sm:mb-6 shadow-[inset_0_0_30px_rgba(59,130,246,0.2)]">
                {selectedDigimon ? (
                  <img
                    src={selectedDigimon.image} // usa a URL da imagem
                    alt={selectedDigimon.name}
                    className="w-full h-full object-contain rounded-lg sm:rounded-xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">🔷</div>
                    <p className="text-[#cbd5e1] font-mono text-xs sm:text-sm">Imagem do Digimon</p>
                    <p className="text-[#64748b] font-mono text-[10px] sm:text-xs mt-1 sm:mt-2">(Conectar ao banco de dados)</p>
                  </div>
                )}
              </div>

              {/* Digimon Info */}
              {selectedDigimon && (
                <div className="relative z-10 text-center space-y-2 sm:space-y-3 bg-[#1e293b]/80 p-4 sm:p-6 rounded-lg border border-[#64748b] w-full backdrop-blur-sm">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fbbf24] tracking-wide">
                    {selectedDigimon.name.toUpperCase()}
                  </h2>
                  <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-3 sm:px-4 py-1 rounded-full font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {/*  {selectedDigimon.type} */}
                    </span>
                    <span className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-3 sm:px-4 py-1 rounded-full font-semibold shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                      {selectedDigimon.level}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] border-2 sm:border-4 border-[#dc2626] hover:scale-110 transition-transform duration-300" />
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full shadow-[0_0_20px_rgba(251,191,36,0.6)] border-2 sm:border-4 border-[#f59e0b] self-center hover:scale-110 transition-transform duration-300" />
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 sm:border-4 border-[#2563eb] self-center hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Right Side - Digimon List */}
          <div className="w-full lg:w-[45%] h-[500px] sm:h-[600px] lg:h-full bg-gradient-to-br from-[#475569] via-[#334155] to-[#1e293b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-4 border-[#3b82f6] flex flex-col">
            <div className="bg-[#1e293b] rounded-lg border border-[#64748b] sm:border-2 overflow-hidden flex-1 shadow-inner">
              <div className="h-full overflow-y-auto custom-scrollbar">
                {digimons.map((digimon) => {
                  const isSelected = digimon.id === selectedId
                  return (
                    <button
                      key={digimon.id}
                      onClick={() => setSelectedId(digimon.id)}
                      className={`w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left border-b border-[#334155] cursor-pointer transition-all duration-300 ease-in-out h-[60px] sm:h-[68px] lg:h-[72px] flex items-center ${
                        isSelected
                          ? "bg-gradient-to-r from-[#065f46] to-[#047857] border-l-2 sm:border-l-4 border-l-[#10b981]"
                          : "hover:bg-[#1e293b] hover:border-l-2 sm:hover:border-l-4 hover:border-l-[#64748b] hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full">
                        <span
                          className={`font-mono text-sm sm:text-base lg:text-lg font-bold flex-shrink-0 transition-colors duration-300 ease-in-out ${isSelected ? "text-[#fbbf24]" : "text-[#64748b]"}`}
                        >
                          {String(digimon.id).padStart(3, "0")}
                        </span>
                        <span
                          className={`text-base sm:text-lg lg:text-xl font-semibold flex-1 truncate transition-colors duration-300 ease-in-out ${isSelected ? "text-white" : "text-[#cbd5e1]"}`}
                        >
                          {digimon.name}
                        </span>
                        {isSelected && (
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-colors duration-300 ease-in-out" />
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Info Display */}
            <div className="mt-3 sm:mt-4 bg-[#1e293b] rounded-lg p-3 sm:p-4 border border-[#64748b] sm:border-2 backdrop-blur-sm">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[#cbd5e1]">Total de Digimons:</span>
                <span className="text-[#fbbf24] font-bold text-base sm:text-lg">{digimons.length}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 12px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f172a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 6px;
          border: 2px solid #0f172a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  )
}
