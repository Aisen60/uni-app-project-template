# uni-app-project-template

## 简介

该项目使用[uni-app](https://uniapp.dcloud.io/) 框架进行开发，官网地址：https://uniapp.dcloud.io/

该项目使用了[uView](https://uviewui.com/) 作为前端开发的 UI 库，官网地址：https://uviewui.com/

使用 yarn 作为项目资源（依赖）管理器

这是一个相对干净的空项目，集成了部分 uView 和常用的 api，可以在此项目的基础上快速创建新项目开发。

## 关于命令

- npm run serve 启动项目
- npm run build:testing 构建项目（测试环境） 需要在package.json 中的 script 新增命令
- npm run build:prod 构建项目（生产环境）

## 关于项目打包后页面空白的解决方案（资源路径错误问题）

安装完项目依赖后，修改 node_modules/@dcloudio/uni-cli-shared/lib 中的 manifest.js 文件 ，找到第 72 行，如下：

地址：/node_modules/@dcloudio/uni-cli-shared/lib

![manifest.js](https://img-blog.csdnimg.cn/20210126173233668.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwMDMzMjEz,size_16,color_FFFFFF,t_70)


修改成如下：

![修改内容](https://img-blog.csdnimg.cn/20210126173256584.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwMDMzMjEz,size_16,color_FFFFFF,t_70)


修改成功后，重新打包构建即可。
