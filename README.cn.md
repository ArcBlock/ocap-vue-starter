# ocap-vue-starter

![](https://img.shields.io/badge/powered%20by-arcblock-brightgreen.svg)

> 集成了 [OCAP JS SDK](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) 的种子项目，使用 [@vue/cli](https://github.com/vuejs/vue-cli) 初始化。

> For English documentation, please checkout [README.md](./README.md)

## 使用方法

### 1. 作为 vue-cli 的 preset 使用

确保系统中已经安装 [vue-cli](https://github.com/vuejs/vue-cli)，直接运行如下命令，初始化项目

```shell
vue create --preset ArcBlock/ocap-vue-starter my-ocap-dapp
cd my-ocap-dapp
yarn
yarn serve
```

### 2. 作为种子项目：直接克隆使用

```shell
git clone https://github.com/ArcBlock/ocap-vue-starter.git
cd ocap-vue-starter
yarn
yarn serve
```

## OCAP SDK 代码示例

- SDK 初始化和封装：[src/libs/ocap.js](./src/libs/ocap.js)
- 使用 SDK 做查询：[src/views/Query.vue](./src/views/Query.vue)
- 使用 SDK 做实时数据订阅：[src/views/Subscription.vue](./src/views/Subscription.vue)

## OCAP SDK 文档

- [SDK 源码和文档首页](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [Bitcoin API 列表和响应格式](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API 列表和响应格式](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## OCAP 提供的工具

- [OCAP Playground：快速执行查询、预览结果](https://ocap.arcblock.io)
- [OCAP Playbook：记录、分享基于区块链的数据研究](https://ocap.arcblock.io)

## 项目内含的三方库

- [vue-router](https://router.vuejs.org/)
- [semantic-ui-vue](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue)
- [semantic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)

## 项目部署

如果看到这里，恭喜你，马上就可以把项目部署到公网，给大家试用了，我们建议使用 [now.sh](http://zeit.now/) 部署应用，步骤如下：

1. 到 [https://zeit.co](https://zeit.co) 创建账号
1. 安装 zeit cli: `npm install -g now`
1. 登录 zeit-cli, `now login`
1. 在 [deploy.sh](./deploy.sh) 中设置项目的域名 alias
1. 执行 `npm run deploy`

部署成功！很期待你的应用出现在我们的 [APP Gallery](https://hack.arcblock.io/app-gallery/) 里面。

## 重要提示

`template` 目录仅仅重复了根目录下的部分文件给 vue-cli 用，里面的文件不需要手动修改，如果需要更新，直接运行 `npm run prepublish`。
