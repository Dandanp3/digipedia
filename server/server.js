import 'dotenv/config'
import mongoose from 'mongoose'

const connectionString = process.env.MONGODB_URI;

try {
    await mongoose.connect(connectionString);
    console.log('Conectado ao Banco.')
} catch (error) {
    console.error('Erro ao conectar no banco.')
}