const { application } = require("express");
const router = require("./login");

router.get('/correoRec',(req, res) => {
    
    res.render('correoRec')
    res.redirect('/')
})
    
module.exports = router;
