<template>
    <header class="app-header">
      <img src="../assets/logo.png" class="app-logo" alt="logo" />
      <div class="app-links">
        <a class="app-link" href="https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js#usage" target="_blank" title="SDK Documentation">SDK Documentation</a>
        <a class="app-link" href="https://ocap.arcblock.io" target="_blank" title="Go Playground">Go Playground</a>
        <a class="app-link" href="https://reactjs.org" target="_blank" title="Learn React">Learn Vue.js</a>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  background-color: #282c34;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 1vmin);
  color: white;
  padding: 0 10%;
}

.app-logo {
  height: 4vmin;
  margin-right: 30px;
}

.app-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
}

.app-link {
  color: #61dafb;
  padding: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  margin-right: 30px;
  cursor: pointer;
}

.app-link:last-of-type {
  margin-right: 0;
}

.app-link:hover {
  border: 1px solid #eee;
}
</style>
