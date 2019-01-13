# API设计
本项目的API将按照功能为划分进行设计

## 与用户相关的接口(user)
'POST /register' 新用户注册

'GET /login' 用户登录

'POST /bindPhone' 用户绑定手机号

'GET /getMyInfo' 获取用户信息

## 与产品相关的接口（product）
'GET /getfoodList' 获取饮品列表
'GET /getShopTime' 获取营业时间

## 与管理员相关的接口(admin)
'POST /admin/login' 管理员登录

'POST /admin/addFood' 后台添加菜品

'POST /admin/updateFood' 更新菜品

'GET /admin/deleteFood' 删除菜品

## 评论功能的接口(commit)
'GET /getcommentList' 获取评论列表

'POST /addComment' 添加评论

'GET /getcomment' 获取具体评论


## 与订单相关的接口（order）
'POST /addOrder' 下单

'GET /getMyOrderList' 获取我的订单

'GET /getMyOrderDetail' 获取订单详情

'POST /printfOrder' 打印

'GET /catchMsg' 向用户发送取餐消息通知


## 与优惠劵相关（reduction）
'GET /getUserCanUseReductionList' 获取用户可领取的优惠券列表

'GET /getCut' 领取优惠券

'GET /getCutList' 用户所有优惠券列表

'GET /useCut' 使用优惠券


