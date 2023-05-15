## 基于 koa2 的 nodejs 后台模板

> 采用 EsModules 实现

#### 集成了 mysql2 数据库

#### 集成了 nacos 注册中心

#### 集成了 winston 日志管理

### startup

* 安装

```shell
npm i # 请选用 nodejs 14+ 的版本
```

* 开发时运行

```shell
npm run dev # 集成了 nodemon
```

* 部署时

```shell
npm start
```

目前个人采用的是 pm2 多项目部署方案
