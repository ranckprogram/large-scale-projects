# 大型项目搭建demo

### 工具

- lerna 多模块管理工具,一个git地址管理多个项目模块
- 




### lerna

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

```



