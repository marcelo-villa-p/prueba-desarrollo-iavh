<template>
  <font-awesome-icon v-on:click="restartGame" id="restart-icon" icon="redo-alt" />
</template>

<style scoped>
#restart-icon {
  font-size: 4rem;
}
</style>

<script>
export default {
  name: 'Restart',
  methods: {
    restartGame() {
      this.$store.dispatch('resetCells');
      this.$root.$emit('restart-game');
    }
  }
}
</script>
