<template>
  <div id="app">
    <sui-menu inverted>
      <sui-container>
        <a href="/" is="sui-menu-item" class="header">
          <img src="./assets/logo.png" class="logo">
          OCAP Vue.js Starter
        </a>

        <router-link to="/" is="sui-menu-item">Home</router-link>
        <router-link to="/query" is="sui-menu-item">Query Demo</router-link>
        <router-link to="/subscription" is="sui-menu-item">Subscription Demo</router-link>
      </sui-container>
    </sui-menu>
    <sui-container class="main">
      <router-view/>
    </sui-container>
  </div>
</template>

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
  color: #2c3e50;
}

.main {
  margin-top: 1em;
  text-align: left;
}

.logo {
  margin-right: 10px !important;
}
</style>
