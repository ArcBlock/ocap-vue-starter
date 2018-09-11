# ocap-vue-starter

![](https://img.shields.io/badge/powered%20by-arcblock-brightgreen.svg)

> OCAP DApp starter template with [@arcblock/ocap-js](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) integrated, bootstrapped using [@vue/cli](https://github.com/vuejs/vue-cli).

> 中文版文档请猛击 [README.cn.md](./README.cn.md)

## Usage

### 1. Use as vue-cli preset

Make sure you have vue-cli installed.

```shell
vue create --preset ArcBlock/ocap-vue-starter my-ocap-dapp
```

### 2. Use as starter template

```shell
git clone https://github.com/ArcBlock/ocap-vue-starter.git
cd ocap-vue-starter
yarn
yarn serve
```

## OCAP SDK Usage Example

- SDK 初始化和封装：[src/libs/ocap.js](./src/libs/ocap.js)
- 使用 SDK 做查询：[src/views/Query.vue](./src/views/Query.vue)
- 使用 SDK 做实时数据订阅：[src/views/Subscription.vue](./src/views/Subscription.vue)

## OCAP SDK Documentation

- [SDK Homepage](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [SDK API Specification](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md)
- [Bitcoin API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## Other OCAP Tools

- [OCAP Playground](https://ocap.arcblock.io)
- [OCAP Playbook](https://ocap.arcblock.io)

## Other Libraries Included

- [vue-router](https://router.vuejs.org/)
- [semantic-ui-vue](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue)
- [semantic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)

## Deployment

We recommend deploying your project to [now.sh](https://zeit.co/):

1. create an account at https://zeit.co/
1. install zeit cli: `npm install -g now`
1. login through zeit-cli, `now login`
1. change your domain alias in [deploy.sh](./deploy.sh)
1. run `npm run deploy`

Congratulations, your project is online.

## Important NOTE

The `template` folder just duplicate some files and folders in the root folder, you should not change any files in this folder by hand, the recommended way to update `template` folder is to run `npm run prepublish` command.
