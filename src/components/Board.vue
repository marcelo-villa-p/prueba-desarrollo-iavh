<template>
  <div id='board-container' ref='board-container'></div>
</template>

<style scoped>
#board-container {
  width: 600px;
  height: 600px;
  margin: auto;
}
</style>

<script>
import * as d3 from 'd3';

export default {
  name: 'Board',
  data() {
    return {
      figurePadding: 50,
      gridColor: 'black',
      lineWidth: 4,
    };
  },
  computed: {
    activePlayer() {
      return this.$store.getters.activePlayer;
    }
  },
  methods: {
    renderEmptyBoard() {
      const parent = d3.select(this.$refs['board-container'])
      const width = parent.node().getBoundingClientRect().width;
      const height = parent.node().getBoundingClientRect().height;
      parent.html('');  // Delete any existing element
      this.svg = parent.append('svg')
        .attr('width', width)
        .attr('height', height);
      const cellWidth = width / 3;
      const cellHeight = height / 3;
      let x = 0;
      let y = 0;

      // Create array with upper left corner coordinates for each cell
      const data = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          data.push({ x, y });
          x += cellWidth;
        }
        x = 0;
        y += cellHeight;
      }

      // Draw grid and add click event to each rect
      this.svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
          .on('click', (d, i, n) => {
            const rect = d3.select(n[i]);
            if (this.activePlayer.symbol === 'o') {
              this.drawO(rect, this.activePlayer.color);
            } else if (this.activePlayer.symbol === 'x') {
              this.drawX(rect, this.activePlayer.color);
            } else {
              console.error('Symbol must be either "x" or "o"');
            }
            rect.attr('pointer-events', 'none');  // Disable interaction
            this.$root.$emit('toggle-active-player');
          })
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y)
          .attr('width', cellWidth)
          .attr('height', cellHeight)
          .attr('fill', 'white')
          .attr('stroke', this.gridColor)
          .attr('stroke-width', this.lineWidth);

      // Draw white rectangle to hide outer borders
      this.svg
        .append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', width)
          .attr('height', height)
          .attr('fill', 'none')
          .attr('stroke', 'white')
          .attr('stroke-width', this.lineWidth);
    },
    drawO(rect, color) {
      this.svg.append('circle')
        .attr('cx', +rect.attr('x') + (+rect.attr('width') / 2))
        .attr('cy', +rect.attr('y') + (+rect.attr('height') / 2))
        .attr('r', (+rect.attr('width') / 2) - this.figurePadding)
        .attr('fill', 'white')
        .attr('stroke', color)
        .attr('stroke-width', this.lineWidth);
    },
    drawX(rect, color) {
      this.svg.append('line')
        .attr('x1', +rect.attr('x') + this.figurePadding)
        .attr('y1', +rect.attr('y') + this.figurePadding)
        .attr('x2', +rect.attr('x') + +rect.attr('width') - this.figurePadding)
        .attr('y2', +rect.attr('y') + +rect.attr('height') - this.figurePadding)
        .attr('stroke', color)
        .attr('stroke-width', this.lineWidth);
      this.svg.append('line')
        .attr('x1', +rect.attr('x') + this.figurePadding)
        .attr('y1', +rect.attr('y') + +rect.attr('height') - this.figurePadding)
        .attr('x2', +rect.attr('x') + +rect.attr('width') - this.figurePadding)
        .attr('y2', +rect.attr('y') + this.figurePadding)
        .attr('stroke', color)
        .attr('stroke-width', this.lineWidth);
    }
  },
  mounted() {
    this.renderEmptyBoard();
    this.$root.$on('restart-game', () => {
      this.renderEmptyBoard();
    });
  }
};
</script>
