<template>
  <componentA props-static="Hello" :nameComponent="this.title" @my-event="eventFunction"></componentA>
  <componentB v-if="toggle" :props-dynamic="this.task"></componentB>
</template>

<script>
import componentA from "@/components/componentA";
import componentB from "@/components/componentB";

export default {
  provide() {
    return {dataApp: this.getData()}
  },
  components: {
    componentA,
    componentB
  },
  data() {
    return {
      toggle: false,
      task: '',
      title: 'Components A'
    }
  },
  methods: {
    eventFunction(task) {
      this.toggle = true;
      this.task = task;
      this.title = task.name;
    },
    getData() {
      return this.title;
    }
  },
}
</script>

<style>
</style>
