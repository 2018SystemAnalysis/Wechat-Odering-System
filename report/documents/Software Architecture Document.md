# Software Architecture Document
## 架构问题
### 可靠性和可用性
- 用户重复提交订单时进行处理
- 提供用户友好的订餐功能

## 解决方案说明
### 防止用户重复提交订单
使用一个实时生成的token判断用户是否重复提交。在前端部分为提交的订单生成一个token储存在会话中，提交订单时检测token是否已经存在，若存在则判断为重复提交订单。token会有一个时间戳，超过特定时间（如1分钟）就会被会话丢弃。
### 提供易于理解和使用的用户界面
引导客户使用微信扫码功能扫描二维码，访问点餐小程序。点餐网站返回前端代码，由前端代码专门负责提供用户界面，与用户进行交互。前后端有着独立的代码逻辑（用户交互和执行业务），彼此之间通过REST API 交换数据。

## 逻辑视图
![lanhsh](https://github.com/2018SystemAnalysis/Wechat-Odering-System/blob/master/assets/images/logic_view.png)

## 物理视图
![lanhsh](https://github.com/2018SystemAnalysis/Wechat-Odering-System/blob/master/assets/images/Physics_View.png)
