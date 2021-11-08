const express = require('express');
const router = express.Router();

router.get("/mensajeria", (req, res) => {
    res.render('mensajeria')
})
module.exports = router;