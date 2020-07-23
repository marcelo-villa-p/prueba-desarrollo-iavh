<template>
  <div>
    <h1 id="name" :style="style">{{name}}</h1>
  </div>
</template>

<style scoped>
#name {
  font-size: 3rem;
}
</style>

<script>
export default {
  name: "Player",
  props: {
    first: {
      required: false,
      type: Boolean,
      defautl: false
    },
    color: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    symbol: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      active: this.first
    }
  },
  computed: {
    style() {
      return `color: ${this.color}`;
    },
    test() {
      console.log(this.$store.getters.currentPlayer);
      return true;
    }
  },
  mounted() {
    if (this.active) {
      this.$store.dispatch('setActivePlayer', this.$props);
    }
    this.$root.$on('toggle-active-player', () => {
      this.active = !this.active;
      if (this.active) {
        this.$store.dispatch('setActivePlayer', this.$props);
      }
    });
  }
};
</script>