### 奶茶点餐系统的UI设计更新日志

#### 迭代1

##### Week 8(24/10/2018)
本周完成的是小程序首页的设计，这里参考目前已有的点餐微信小程序完成设计。参考的已有微信点餐小程序包括：美团外卖、一点点点餐、麦当劳点餐程序。
下面是首页的设计。

​![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/blob/master/assets/images/home.png)



##### Week 9(31/10/2018)

本周完成的是小程序菜单显示的设计，需要显示的信息包括：饮品图片、饮品名称
下面是首页的设计。

![menu](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_menu.png)



##### Week 10(7/11/2018)

本周完成单品的详情页面显示

![itemshow choose](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_itemshow1.png)
![itemshow reviews](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_itemshow2.png)



#### 迭代2

##### Week 11(14/11/2018)
本周完成订单详情页面显示界面，应该显示的基本内容包括：购物车的每一个饮品名称、饮品价格、饮品规格、饮品数量、最后的总金额以及用户备注信息。在用户付款完成后，还需要显示订单编号、订单时间。

![order_details1](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_order_check.png)
![order_details2](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_order_take.png)
![order_details3](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_order_done.png)
![order_details4](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_order_list.png)



##### Week 12(21/11/2018)

本周完成会员界面显示，显示的基本内容包括用户的个人昵称、已获得的积分、本店基本信息、客服电话等。

![order_mine](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_mine.png)



##### Week 13(28/11/2018)

本周完成所有界面的UI初始设计，根据会议意见，主页设计很是生硬，因此修改主页设计。

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_home-v2.png)



##### Week 14(5/12/2018)

本周继续修改饮品的详情显示界面，根据会议结果，由于用户在点击某个饮品查看详细信息的时候，会更希望内容的展现形式是弹窗，毕竟切换到另一个界面会使得用户需要点击返回才能看到菜单，界面的切换总是会比较耗时，影响用户体验，因此将饮品的详情界面展示方式修改为弹窗式。

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_itemshow1-v2.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U1_itemshow2-v2.png)





#### 迭代3

##### Week 15(12/12/2018)

在最后的测试阶段，上网查找了实际的UI数据，并更新到微信小程序上。根据第三次迭代会议意见，UI设计做如下修改：

1. 主页的设计，贴片式的饮品展示方式采用磁贴式，这样会比较浪费空间，其次，有些图太小，并不能看清，不利于商家放一些高清的广告图片吸引客户。因此，模仿已有的一款点餐系统的设计，广告图片的展示方式采用轮播式。
2. 最下方的导航栏不需要在每一页都显示，设计有点太淘宝风格，不是很好看。因此修改整体UI色调，选择更加浪漫温柔的风格，才能匹配奶茶针对的大部分年轻群体的青春气质，用情调吸引顾客。
3. 原来的设计没有考虑到点开购物车的显示界面，这是必须的。
4. 由于是饮品的详细信息显示是弹窗式的，因此不需要显示饮品的图片了，否则弹窗长度太长。
5. 饮品的评论显示部分，用户名称和评论同一行的显示不合理，用户名称长短不一，实际上无法做到对其，会使得评论的显示不够整洁，因此应该修改为名称单独一行，配上评论日期，再另起一行，才能保证界面的整洁。
6. 订单列表显示上，

综合以上意见，部分修改的UI设计如下所示：

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_home.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_menu.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_gouwuche.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_details.png)![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_review.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_order_list.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_order_check.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_order_take.png)

![home](https://github.com/2018SystemAnalysis/Wechat-Odering-System/tree/master/assets/UI/U2_reduction.png)



##### Week 16(19/12/2018)

根据小组成员讨论意见，UI设计基本满足测试过程中的功能需求，至此UI设计完成。
