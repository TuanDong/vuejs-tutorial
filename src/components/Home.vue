<template>
  <div class="content">
    <h1>Home</h1>
    <p>vuex state: Count add task - {{this.count}}</p>
    <hr>
    <h5>{{ counter }} x 2 = {{ time2 }}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:this.$store.state.count,
      counter: this.$store.state.counter,

    }
  },
  created() {
    console.log(this.$store.state.count);
  }
}
</script>
<style>
.content {
  width: 100%;
  background-color: beige;
}
</style>