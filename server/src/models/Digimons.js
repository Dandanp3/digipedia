import mongoose from "mongoose"

const digimonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  level: { type: String, required: true },
  image: { type: String, required: false }
})

const Digimon = mongoose.models.Digimon || mongoose.model("Digimon", digimonSchema)
export default Digimon
