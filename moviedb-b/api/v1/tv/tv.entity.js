const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvSchema = new Schema({
    origin_country: {
        type: String
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
    original_name: {
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
    backdrop_path: {
        type: String
    },
    first_air_date: {
        type: Date
    },
    name: {
        type: String
    },
    vote_average: {
        type: Number
    },
    vote_count: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('tvshows', tvSchema);