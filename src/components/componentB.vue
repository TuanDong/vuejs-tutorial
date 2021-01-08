<template>
  <h1>Detail</h1>
  <a @click.prevent="back">Back</a>
  <br>
  <router-link to="/">Home {{$route.params.name}}</router-link>
  <p>Name: {{propsDynamic.name}}</p>
  <p>Description: {{propsDynamic.description}}</p>
  <hr>
  <slotsComponent :task="propsDynamic">
    <template v-slot:header>
      <h1>Here might be a page title Slot</h1>
    </template>

    <template v-slot:other="data">
      <p>Here might be a page content with data Slot - data:{{data.item}}</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </slotsComponent>
</template>

<script>
import slotsComponent from "@/components/slotsComponent";
export default {
  components: {
    slotsComponent
  },
  props: {
    propsDynamic:Object,
  },
  methods: {
    back(){
        this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>