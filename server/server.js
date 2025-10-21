import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import Digimon from './src/models/Digimons.js'

const app = express()
app.use(cors())
app.use(express.json())

// Conexão com o banco
const connectionString = process.env.MONGODB_URI;
try {
    await mongoose.connect(connectionString);
    console.log('Conectado ao Banco.')
} catch (error) {
    console.error('Erro ao conectar no banco.')
}

// Rota para buscar os digimons
app.get('/routes/digimons', async (req, res) => {
    try {
        const digimons = await Digimon.find()
        res.json(digimons)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar digimons.'})
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))