/**
 * Created by lupeng on 18/5/5.
 */

import {sequelize} from '../sql.js'


var moment = require('moment')

//获取评价列表
let getcommentList =async(ctx,next)=>{

    let comments = await (sequelize.query("select * from comment",{
        type: sequelize.QueryTypes.SELECT
    }))
    
    return ctx.response.body={
        "code":0,
        "data":comments,
    }
}

//获取具体评价
let getcomment =async(ctx,next)=>{
    let comment = await (sequelize.query("select * from comment where food_name = '"+ctx.query.food_name+"'",{
        type: sequelize.QueryTypes.SELECT
    }));
    
    return ctx.response.body={
        "code":0,
        "data":comment,
    }
}

//添加评论
let addComment= async(ctx,next)=>{
    //接受的参数
    //console.log(ctx);
    let crb=ctx.request.body;
    console.log(crb);
    let timeF = function (t) {
       return moment(t).format('YYYY-MM-DD HH:mm:ss')
    }
    let addComment = await (sequelize.query("INSERT INTO `comment` (`food_name`,`degree`,`content`,`date`,`user`) VALUES " +
                "('"+crb.food_name+"','"+crb.degree+"','"+crb.content+"','"+timeF(crb.date)+"','"+crb.user+"')",{
                type: sequelize.QueryTypes.INSERT
            }))
    return ctx.response.body={
        "code":0,
        "msg":"评论成功",
    }
};

let test =async(ctx,next)=>{
    

    return  ctx.response.body = `<h1>Index</h1>
    <form action="/addComment" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Degree: <input name="food_name" value="芋香草莓"></p>
        <p>Degree: <input name="degree" value="1"></p>
        <p>Content: <input name="content" value="content"></p>
        <p>User: <input name="user" value="baiyang"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;

}

module.exports = {
    'GET /test':test,
    'GET /getcommentList':getcommentList,//获取评论列表
    'POST /addComment':addComment, //添加评论
    'GET /getcomment':getcomment,//获取具体评论
    // 'GET /getShopTime':getShopTime,//获取营业时间
    // 'GET /updateShopTime':updateShopTime,//后台更改营业时间
};s