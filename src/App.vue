<template>
  <componentA props-static="Hello" :nameComponent = "this.title" @my-event="eventFunction"></componentA>
  <componentB v-if="toggle" :props-dynamic ="this.task"></componentB>
</template>

<script>
import componentA from "@/components/componentA";
import componentB from "@/components/componentB";
export default {
  name: 'App',
  components: {
    componentA,
    componentB
  },
  data() {
    return {
      toggle:false,
      task: '',
      title:'Components A'
    }
  },
  methods: {
    eventFunction(task){
      this.toggle = true;
      this.task = task;
      this.title = task.name;
    }
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
  margin-top: 60px;
}
</style>
