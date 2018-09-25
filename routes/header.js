const express=require('express');
const router=express.Router();
const pool=require('../pool.js');

router.get('/', (req, res) => {
    var sql = "SELECT hdid,hdSmallImg FROM homeBase_d";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        res.send(result.slice(0, 9));
    });
});
module.exports=router;