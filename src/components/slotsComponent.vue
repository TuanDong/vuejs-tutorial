<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="other" :item="task.name"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  <hr>
  <p>Data is passed on to children or grandchildren (provide and inject) data:{{this.dataApp}}</p>
</template>

<script>

export default {
  inject: ['dataApp'],
  props: {
    task: Object
  },
}
</script>

<style>
</style>
