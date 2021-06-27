const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));
router.use('/tv', require('./tv'));
router.use('/category', require('./genres'));

module.exports = router;