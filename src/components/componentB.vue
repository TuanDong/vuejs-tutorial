<template>
  <h1>Component B</h1>
  <p>Name: {{propsDynamic.name}}</p>
  <p>Description: {{propsDynamic.description}}</p>
</template>

<script>
export default {
  props: {
    propsDynamic:Object,
  }
}
</script>

<style>

</style>