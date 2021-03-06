## Inception 2



小组于2018年11月14号开启第二次会议，目的在于总结目前的开发进度，发现问题并提出解决方案，开启下一个迭代周期，确认下一个迭代周期的目标。



### 1. 进度总结

目前各个方面的进度都尚且还在把控当中，项目进度完成情况：目前为止，每周各个岗位的人员都尚且能够按时完成任务。每周都能够写自己的周报kanban，总结自己一周的进度，并且安排自己下一周需要完成的事。由于目前进度尚且能够按照规划完成，因此项目经理不打算加快开发进度，按照目前的速度继续开发即可。





### 2. 问题提出与解决

**问题1：** 目前的UI设计偏向传统，感觉其美观程度和吸引力都存在不足。

**解决1：** UI设计师需要根据目前的点餐系统，进一步的学习模仿，修改已有的设计方案，让其看起来更加的和谐活泼，调动用户的点餐心情。感觉要避免使用冷色调的配色，应该使用暖色调的配色，不要只使用白色+暖色的搭配，可以稍微再丰富一点，但是不要太花。

**问题2：** 在微信的小程序每一页上面展示该店的名称是有必要的吗？

**解决2：** 根据讨论结果得出，除了留下最上面的返回按钮的空间，不需要留下标题，屏幕空间应该尽可能用来展示菜单，以及其他信息。

**问题3：** 在微信小程序的首页设计中，需要对推荐的饮品显示其部分评论吗？显示的话，按照什么标准筛选呢？

**解决3：** 根据队员讨论结果，目前的解决方案是将评论放在首页，目的是让客户通过其他用户的评论对本店的饮品有一个初步的了解，吸引客户去点餐。为了达到吸引的目的，需要将评论里较长的、好评的排在前面进行展示。如果有差的评论，应该考虑不予展示。

**问题4：** 人员目前开始搭建了微信小程序的初始框架。不知道是不是部分数据可以直接存在手机端的数据库上，减少网络交互带来的延迟。

**解决4：** 根据讨论结果可得，例如部分用户个人信息可以考虑放在手机端。如果没有再从服务端请求。但是这里需要保证客户端的数据和服务器端数据的一致性。需要定期更新，或者后期发现更大的问题，可能还是需要每次都从服务端取。



### 3. 下一迭代周期目标

现在是第11周，开启第二个迭代周期，经过前期的产品调研和以及规划，目前产品的定位和创新点都已经基本确定。UI基本设计也已经准备好了，可以开始实现产品的基本功能。这一阶段需要实现的产品功能有：

客户端（顾客）：

1. 进入小程序首页，能够点击点餐按钮，查看菜单。
2. 能够查看菜品的详情显示，并且加入菜单。详情包括：容量规格、糖度、加料、温度的选择，价格显示和商家对这个单品的评论信息。
3. 程序下方显示已选的菜品总价，以及是否结算的按钮。
4. 用户选择饮品时，后台需要根据商家的设定进行判断，该饮品是否可选，最多可选几杯等。
5. 结算后，显示用户订单，并且支持微信或者支付宝付款，用户付完款之后，需要对商家发起订单，客户端显示订单详情，状态设定为这在“制作中”。
6. 当商家制作完成订单之后，商家设置完成订单，用户可点击确认。这样一次点餐操作完成。
7. 根据会员制度，在下订单时，需要判断用户的本次消费行为是否满足优惠制度，如果优惠则需要修改付款金额。



客户端（商家）（根据项目进度选择实现）：

1. 进入小程序首页，可以查看本店摆出的所有单品
2. 单击某个单品，可以修改商品价格、其他用料配置的选项设置，选择是否该商品库存不足
3. 收到订单以后制作订单，完成后点击完成订单



服务端：

1. 负责数据库、个性推荐等算法的实现





思维会议导图

by fjc

![fjc report 2](https://github.com/2018SystemAnalysis/Wechat-Odering-System/blob/master/assets/images/fjc_report_2.png)

by lanhsh

![lhs report 2](https://github.com/2018SystemAnalysis/Wechat-Odering-System/blob/master/assets/images/lhs_report_2.png)
