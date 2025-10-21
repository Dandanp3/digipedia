"use client"
import { createContext, useContext, useEffect, useState } from "react"

interface Digimon {
  id: number
  name: string
  level: string
}

const DigimonContext = createContext<{
  digimons: Digimon[]
}>({ digimons: [] })

export const DigimonProvider = ({ children }: { children: React.ReactNode }) => {
  const [digimons, setDigimons] = useState<Digimon[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/routes/digimons")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((digimon: any, index: number) => ({
          id: index + 1,
          name: digimon.name,
          level: digimon.level,
        }))
        setDigimons(formatted)
      })
      .catch((err) => console.error("Erro ao carregar Digimons:", err))
  }, [])

  return (
    <DigimonContext.Provider value={{ digimons }}>
      {children}
    </DigimonContext.Provider>
  )
}

export const useDigimons = () => useContext(DigimonContext)
