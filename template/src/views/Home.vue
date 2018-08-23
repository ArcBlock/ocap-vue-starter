<template>
  <div class="app-content">
    <h2>OCAP Vue Starter</h2>
    <p>
      This is a starter project with
      <a
        href="https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js"
        target="_blank"
      >
        @arcblock/ocap-js
      </a>
      integrated for Vue.js Developers. It's bootstrapped by
      <a
        href="https://github.com/vuejs/vue-cli"
        target="_blank"
        rel="noopener"
      >
        @vue/cli
      </a>.
    </p>
    <div class="link-sections">
      <div class="link-section">
        <h3>OCAP SDK Usage Demos</h3>
        <ul>
          <li>
            <router-link to="/query" rel="noopener">
              Query Demo
            </router-link>
          </li>
          <li>
            <router-link to="/subscription" rel="noopener">
              Subscription Demo
            </router-link>
          </li>
        </ul>
      </div>
      <div class="link-section">
        <h3>OCAP SDK Documentation</h3>
        <ul>
          <li>
            <a
              href="https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js"
              target="_blank"
              rel="noopener"
            >
              SDK Homepage
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md"
              target="_blank"
              rel="noopener"
            >
              SDK API Specification
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md"
              target="_blank"
              rel="noopener"
            >
              Bitcoin API and Response Formats
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md"
              target="_blank"
              rel="noopener"
            >
              Ethereum API and Response Formats
            </a>
          </li>
        </ul>
      </div>
      <div class="link-section">
        <h3>Vue.js Libraries Integrated</h3>
        <ul>
          <li>
            <a
              href="https://router.vuejs.org/"
              target="_blank"
            >
              vue-router
            </a>
          </li>
          <li>
            <a href="https://semantic-ui-vue.github.io/#/" target="_blank">
              semantic-ui-vue
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Semantic-Org/Semantic-UI-CSS"
              target="_blank"
            >
              semantic-ui-css
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.link-sections {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.link-section {
  text-align: left;
  margin-bottom: 30px;
}
</style>
