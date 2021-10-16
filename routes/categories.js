var express = require('express');
var pool = require('./../config/db')
var router = express.Router();
var auth = require('../midelwares/authorization')

router.get('/getCategories', auth, (req, res) => {

    pool.query(`select * from categoriesparent`, (err, result) => {
        if (err) {
            console.log("Erreur dans la récupération des catégories : ", err);
            return res.status(500).json({})
        }
        else {
            return res.status(200).json(result);
        }
    })
})

module.exports = router;