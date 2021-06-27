const router = require('express').Router();
const genreMod = require('./genre.entity');

router.get('/genres', async(req, res) => {
    try {
        const genres = await genreMod.find()
        res.status(200).json(genres);
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

module.exports = router;