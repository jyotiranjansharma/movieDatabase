const router = require('express').Router();
const movieModule = require('./movies.entity');
// const getDetailModule = require('./movieDetails.entity');

router.get('/allmovies', async(req, res, next) => {
    try {
        const movies = await movieModule.aggregate([
            {$lookup: {
                from: 'moviedetails',
                localField: 'id',
                foreignField: 'id',
                as: 'details'
            }}
        ])
        res.status(200).json(movies);
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

router.get('/movie/:id/:name', async(req, res) => {
    try {
        const movie_id = req.params.id;
        const movie = await movieModule.aggregate([
            { $match: { 
                id: parseInt(movie_id),
                title: req.params.name
            }},
            { $lookup: {
                from: 'moviedetails',
                localField: 'id',
                foreignField: 'id',
                as: 'details'
            }}
        ])
        res.send(movie[0].details)
    } catch (err) {
        return res.send({status: 404, message: "Movie not found !"})
    }
})

module.exports = router;