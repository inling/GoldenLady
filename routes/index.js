var express=require('express');
var pool=require('../pool.js');
var router=express.Router();
router.get('/',(req,res)=>{
    var obj={};
    (async function () {
        await new Promise(function(open){
            var sql = `SELECT * FROM carousel`;
            pool.query(sql, [], (err, result) => {
                if (err) throw err;
                obj.carousel = result;
                open();
            }); 
        });
        await new Promise(function(open){
            var sql = `SELECT * FROM homeBase`;
            pool.query(sql, [], (err, result) => {
                if (err) throw err;
                obj.homeBase = result;
                open();
            });    
        });
        await new Promise(function(open){
            var sql='SELECT * FROM homeWeek';
            pool.query(sql,[],(err,result)=>{
                if(err) throw err;
                obj.homeWeek=result;
                open();
            });
        });
        res.send(obj);   
    })();
});


module.exports=router;