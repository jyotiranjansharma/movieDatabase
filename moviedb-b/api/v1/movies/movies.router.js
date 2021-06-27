const router = require('express').Router();
const movieModule = require('./movies.entity');
// const getDetailModule = require('./movieDetails.entity');

router.get('/allmovies', async(req, res, next) => {
    try {
        const movies = await movieModule.find()
        res.status(200).json(movies);
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

router.get('/movie/:id', async(req, res) => {
    try {
        const movie = await movieModule.findById(req.params.id)
        // res.send(movie.id)
        res.send(movie)
    } catch (err) {
        return res.send({status: 404, message: "Movie not found !"})
    }
})

// router.get('/get-movie-details/:id', async(req, res) => {
//     try {
//         const movie = await getDetailModule.findById(req.params.id)
//         res.send(movie)
//     } catch (err) {
//         return res.send({status: 404, message: "Movie not found !"})
//     }
// })

module.exports = router;