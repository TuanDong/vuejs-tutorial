<template>
  <div class="content">
    <h1>Home</h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$store.state);
  }
}
</script>
<style>
.content {
  width: 100%;
  background-color: beige;
}
</style>