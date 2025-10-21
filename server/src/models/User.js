import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bio: {
        type: String,
        maxlength: 140,
        default: ""
    },
    digimonsFavoritos: [{
        type: String
    }],
    seguindo : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    seguidores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})