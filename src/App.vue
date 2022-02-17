<template>
  <div id="app">
    <router-view :key="$route.path" />
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Permanent+Marker&family=Ubuntu+Mono&display=swap");
* {
  font-family: "Ubuntu Mono", monospace;
}
body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
@media (max-width: 850px) {
  body {
    overflow: scroll;
  }
}
body {
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
