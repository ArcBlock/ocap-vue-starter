# ocap-vue-starter

> OCAP DApp starter template with [@arcblock/ocap-js](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) integrated, bootstrapped using [@vue/cli](https://github.com/vuejs/vue-cli).

## OCAP SDK Usage Example

- [src/libs/ocap.js](./src/libs/ocap.js)
- [src/pages/Query/index.vue](./src/pages/Query/index.vue)
- [src/pages/Subscription/index.vue](./src/pages/Subscription/index.vue)

## OCAP SDK Documentation

- [SDK Homepage](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [SDK API Specification](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md)
- [Bitcoin API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## Other OCAP Tools

- [OCAP Playground](https://ocap.arcblock.io)
- [OCAP Playbook](https://ocap.arcblock.io)

## Other Libraries Included

- [react-navigation](https://reactnavigation.org/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Use as vue-cli preset

Make sure you have vue-cli installed.

```shell
vue create --preset ArcBlock/ocap-vue-starter my-ocap-dapp
```

## Use as starter template

```shell
git clone https://github.com/ArcBlock/ocap-vue-starter.git
yarn
yarn run serve
```

### Compiles and minifies for production

```shell
yarn run build
```

### Lints and fixes files

```shell
yarn run lint
```

## Important NOTE

The `template` folder just duplicate some files and folders in the root folder, you should not change any files in this folder by hand, the recommended way to update `template` folder is to run `npm run prepublish` command.
