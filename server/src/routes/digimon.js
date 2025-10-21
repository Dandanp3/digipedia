import express from 'express'
import Digimon from '../models/Digimons'

const router = express.Router()

router.get("/", async(req, res) => {
    try {
        const digimons = await Digimon.find()
        res.json(digimons)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router