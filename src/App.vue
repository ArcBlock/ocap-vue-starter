<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>

    <div class="app-content">
      <h2>Welcome to OCAP Starter Project for Vue.js</h2>
      <p v-if="loading">
        Loading account summary for {{dataSource.name.toUpperCase()}} account:
        {{dataSource.demoAddress}}
      </p>
      <Loading v-if="!summary" />
      <div v-if="summary" class="app-json">
        <p>
          Account summary for {{dataSource.name.toUpperCase()}} account:
          {{dataSource.demoAddress}}
        </p>
        <pre>
<code>{{JSON.stringify(summary, true, '  ')}}</code>
        </pre>
      </div>
      <p class="alert">
        Open BROWSER CONSOLE to view methods provided by OCAPClient.
      </p>
    </div>

    <div class="app-content">
      <p>
        For guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <div class="vue-sections">
        <div class="vue-section">
          <h3>Installed CLI Plugins</h3>
          <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
          </ul>
        </div>
        <div class="vue-section">
          <h3>Vue Links</h3>
          <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
          </ul>
        </div>
        <div class="vue-section">
          <h3>Vue Libs</h3>
          <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
import OCAPClient from '@arcblock/ocap-js';

const dataSources = [
  {
    name: 'btc',
    demoAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  },
  {
    name: 'eth',
    demoAddress: '0xe65d3128feafd14d472442608daf94bceb91e333',
  },
];

// Create clients for BTC and ETH
const clients = dataSources.reduce((obj, ds) => {
  obj[ds.name] = new OCAPClient({
    dataSource: ds.name,
    enableSubscription: true,
    enableMutation: false,
  });

  return obj;
}, {});

export default {
  name: 'app',
  components: {
    Header,
    Loading,
  },
  data() {
    return {
      dataSource: dataSources[0],
      summary: null,
      message: null,
      timestamp: null,
      loading: false,
    };
  },

  async mounted() {
    this.loading = true;

    const client = this.getClient();
    console.log(client);

    const summary = await client.accountByAddress({
      address: this.dataSource.demoAddress,
    });

    // Subscription
    // const subscription = await client.newBlockMined();
    // subscription.on('data', data => {
    //   this.timestamp = new Date();
    //   this.message = data;
    // });

    this.loading = false;
    this.summary = summary;
  },

  methods: {
    getClient() {
      return clients[this.dataSource.name];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-content {
  padding: 0 10%;
  text-align: left;
  margin-bottom: 90px;
}

.app-json pre {
  background: #f0f0f0;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.vue-sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.vue-section {
  text-align: left;
}

.alert {
  color: red;
}
</style>
