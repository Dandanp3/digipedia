import mongoose from "mongoose";
import axios from "axios";
import Digimon from "../models/Digimons.js"
import 'dotenv/config'; 

// Conecta no  MongoDB 
const mongoURI = process.env.MONGODB_URI;

async function importDigimons() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado ao mongo");

        // Pega os digimons da API
        const { data } = await axios.get("https://digimon-api.vercel.app/api/digimon");

        console.log(`Total de digimons na API: ${data.length}`);

        for (const digi of data) {
            console.log(digi);
            //verifica se ja existe
            const exists = await Digimon.findOne({ name: digi.name });
            if (!exists) {
                await Digimon.create({
                    name: digi.name,
                    level: digi.level,
                    image: digi.img
                });
                console.log(`Salvo: ${digi.name}`)
            } else {
                console.log(`Já existe: ${digi.name}`)
            }
        }

        console.log("importação finalizada!");
    } catch (error) {
        console.error("Erro ao importar Digimons:", error);
    } finally {
        mongoose.connection.close();
    }
}

importDigimons();