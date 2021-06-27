const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    adult: {
        type: Boolean
    },
    genre_ids: {
        type: Array
    },
    id: {
        type: Number
    },
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
    overview: {
        type: String
    },
    popularity: {
        type: Number
    },
    poster_path: {
        type: String
    },
    release_date: {
        type: Date
    },
    title: {
        type: String
    },
    video: {
        type: Boolean
    },
    vote_average: {
        type: Number
    },
    vote_count: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('movies', movieSchema);