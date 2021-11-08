const express = require('express');
const router = express.Router();

router.get('/nosotros', async (req, res) => {
    res.render('nosotros', {
    })
})
module.exports = router;