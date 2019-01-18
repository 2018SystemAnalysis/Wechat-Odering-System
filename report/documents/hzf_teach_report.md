## 学习报告之api设计

**学号：18214628    姓名：侯舟帆**

在接触了一个完整的项目后，知道了API设计的重要性，接下来对微信小程序的API设计的学习经验进行整理总结。

### 1. 为什么要进行功能建模

* 识别所有系统要提供的业务操作，给出严格的定义
* 通过识别这些操作，精确的估算工作量
* 完善系统实现的细节（消息、参数）等，构建RPC风格设计，或进一步完善领域模型与资源API设计

### 2. RPC风格API

RPC( Remote Procedure Call )（远程过程调用）是一种面向操作（功能）的架构风格，分布式系统常见的一种通信方法，通俗讲：可以一台计算机的程序调用另一台计算机的子程序（可以把它看成之前我们说的进程间通信，只不过这一次的进程不在同一台PC上了）。通过API，前端和后端得以分离实现，只要有API的文档便可以分别完成开发。

* **面向操作**：API的取名一般是动词，表示了需要做的操作。
* **基于HTTP**：微信对于微信小程序的权限有着严格控制，访问网络只能访问小程序报备的域名，并且强制要求https，因此API必须基于HTTP进行。小程序基于HTTP提供的GET、POST等方法访问API，后端回应json格式的数据。



学习材料：

1. https://sysu-sasd-project.github.io/swad-guide/10-functional%20modeling
2. https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317851&token=&lang=zh_CN




