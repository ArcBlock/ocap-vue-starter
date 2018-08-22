<template>
  <div class="app-content">
    <h2>Subscription Demo</h2>
    <p class="alert">
      Open BROWSER CONSOLE to view methods provided by OCAPClient.
    </p>
    <p v-if="!subscribed">
      Try to subscribe to {{dataSource.name.toUpperCase()}}.newBlockMined
    </p>

    <p v-if="subscribed">
      {{dataSource.name.toUpperCase()}}.newBlockMined subscription success!
    </p>

    <div v-if="subscribed && !message">
      <p>Waiting for new data</p>
      <Loading />
    </div>

    <div v-if="message" class="app-json">
      <p>New {{dataSource.name.toUpperCase()}} blocked mined at {{timestamp.toString()}}:</p>
      <pre>
<code>{{JSON.stringify(message, true, '  ')}}</code>
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
      dataSource: dataSources[1],
      message: null,
      timestamp: null,
      subscribed: false,
    };
  },

  async mounted() {
    const client = getClient(this.dataSource.name);
    console.log(client);

    // Subscription
    const subscription = await client.newBlockMined();
    subscription.on('data', data => {
      this.timestamp = new Date();
      this.message = data;

      setTimeout(() => {
        this.message = null;
      }, 5000);
    });

    this.subscribed = true;
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
