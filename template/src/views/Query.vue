<template>
  <div class="app-content">
    <h2>Welcome to OCAP Starter Project for Vue.js</h2>
    <p class="alert">
      Open BROWSER CONSOLE to view methods provided by OCAPClient.
    </p>
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
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import { dataSources, getClient } from '../libs/ocap';

export default {
  name: 'app',
  components: {
    Loading,
  },
  data() {
    return {
      dataSource: dataSources[0],
      summary: null,
      loading: false,
    };
  },

  async mounted() {
    this.loading = true;

    const client = getClient(this.dataSource.name);
    console.log(client);

    const summary = await client.accountByAddress({
      address: this.dataSource.demoAddress,
    });

    this.loading = false;
    this.summary = summary;
  },
};
</script>

<style>
.app-json pre {
  background: #f0f0f0;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.alert {
  color: red;
}
</style>
