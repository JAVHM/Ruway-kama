const express = require('express');
const router = express.Router();

router.get("/verProyecto", (req, res) => {
    res.render('verProyecto')
})
module.exports = router;