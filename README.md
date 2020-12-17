# 大型项目搭建 demo

### 工具

- lerna 多模块管理工具,一个 git 地址管理多个项目模块
-

### lerna

多模块管理工具,一个 git 地址管理多个项目模块, 可以同时开发多个相互依赖性很高的项目，且可以统一发布

```
npm i lerna -g

lerna init

mkdir packages/ui
mkdir packages/util
mkdir packages/other


lerna create base

lerna bootstrap // 启动 代替 每个包下的npm install，和包的link

lerna add vue // 添加依赖，统一添加

lerna add base --scope=ui  // 把base 加入 ui里去


lerna publish  // 发布包


lerna exec --scope=ui  yarn remove lodash // 卸载

lerna import  // 导入本地已经存在的包




```



### plop 

根据模板生成文件，可以设置多个参数，可以生成多个文件



- 生成组件基础文件
- 增加路由 type modify
- 


使用场景考虑

- 创建 view
- 创建 component
- 修改 router
- 单元测试用例代码 test

