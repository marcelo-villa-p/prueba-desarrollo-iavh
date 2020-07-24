<template>
  <div>
    <h1 class="name" :style="style" :class="{ active }">{{name}}</h1>
  </div>
</template>

<style scoped>
.name {
  border: 3px solid;
  padding: 15px;
  font-size: calc(24px + 2vw);
  font-weight: 300;
}

.active {

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
    }
  },
  mounted() {
    this.$store.dispatch('addPlayer', this.$props);
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