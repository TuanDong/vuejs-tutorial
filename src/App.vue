<template>
  <componentMenu />
  <router-view></router-view>
</template>

<script>
  import componentMenu from "@/components/componentMenu";
export default {
  name: 'App',
  components: {
    componentMenu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
