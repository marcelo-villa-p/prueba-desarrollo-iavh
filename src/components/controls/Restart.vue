<template>
  <font-awesome-icon v-on:click="restartGame" class="control" icon="redo-alt" />
</template>

<style scoped>
.control {
  padding: 15px;
  font-size: calc(24px + 2vw);
  border: 3px solid #2c3e50;
  border-radius: 50%;
  cursor: pointer;
  color: #2c3e50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.control:hover {
  color: white;
  background-color: #2c3e50;
  border: 3px solid #2c3e50;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
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
