const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    vote_average: {
        type: String
    },
    vote_count: {
        type: String
    },
    status: {
        type: String
    },
    release_date: {
        type: String
    },
    revenue: {
        type: String
    },
    runtime: {
        type: String
    },
    adult: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    budget: {
        type: String
    },
    homepage: {
        type: String
    },
    imdb_id: {
        type: String
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
        type: String
    },
    poster_path: {
        type: String
    },
    tagline: {
        type: String
    },
    genres: {
        type: String
    },
    production_companies: {
        type: String
    },
    production_countries: {
        type: String
    },
    spoken_languages: {
        type: String
    },
    keywords: {
        type: String
    },
})

const Filme = mongoose.model('Filme', filmeSchema)

module.exports = Filme