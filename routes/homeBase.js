const express=require('express');
const router=express.Router();
const pool=require('../pool');
const url=require('url');

router.get('/',(req,res)=>{
    var hdid=req.query.hdid;
    var sql=`SELECT * FROM homeBase_d WHERE hdid=?`;
    pool.query(sql,[hdid],(err,result)=>{
        if(err) throw err;
        res.send(result[0]);
    })
});
module.exports=router;