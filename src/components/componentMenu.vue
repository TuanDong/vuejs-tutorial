<template>
  <div class="nav-bar">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/project">Go to</router-link>
    <router-link to="/project/vietName">VietName</router-link>
    <router-link to="/project/green/detail/5">Green</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.nav-bar {
  width: 100%;
  height: 20px;
  background-color: aqua;
  display: inline-flex;
  justify-content: space-evenly;
  padding: 20px;
}
</style>