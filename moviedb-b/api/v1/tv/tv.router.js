const router = require('express').Router();
const tvModule = require('./tv.entity');
// const getDetailModule = require('./movieDetails.entity');

router.get('/alltv', async(req, res, next) => {
    try {
        const tvs = await tvModule.find()
        res.status(200).json(tvs);
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

router.get('/tv/:id', async(req, res) => {
    try {
        const tv = await tvModule.findById(req.params.id)
        res.send(tv)
    } catch (err) {
        return res.send({status: 404, message: "Tv not found !"})
    }
})

// router.get('/get-tv-details/:id', async(req, res) => {
//     try {
//         const movie = await getDetailModule.findById(req.params.id)
//         res.send(movie)
//     } catch (err) {
//         return res.send({status: 404, message: "Movie not found !"})
//     }
// })

module.exports = router;