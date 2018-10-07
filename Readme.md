## Marx, 一个在线考试系统

技术栈
- Mysql
- Redis
- Express
- Nginx
- Vue

方案
- 使用Navicat从概念模型开始、到物理模型建模，直接生成sql语句
- 使用Swagger设计API，并编写API文档，导出为JSON后直接生成Axios请求代码和express 路由代码

需要注意的地方
- 数据库函数用async封装了一个名为execute的方法
- service、models里大量使用了promise和async/await
- router里负责顶层调用，即与session，传参的处理
- service负责调用一到多个models里的功能
- models负责提供原子功能