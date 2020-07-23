<template>
    <div id="board-container">
        <svg ref="board" width=600 height=600></svg>
    </div> 
</template>

<style scoped>
#board-container {
    height: 100%
}
</style>

<script>
import * as d3 from "d3";

export default {
    name: 'Board',
    data() {
        return {
            gridColor: 'black',
            lineWidth: 4
        }
    },
    methods: {
        render() {
            const el = d3.select(this.$refs['board']);
            const width = el.node().getBoundingClientRect().width
            const height = el.node().getBoundingClientRect().height
            const cellWidth = width / 3;
            const cellHeight = height / 3;
            let x = 0;
            let y = 0;

            // Create array with upper left corner coordinates for each cell
            const data = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    data.push({ x, y })
                    x += cellWidth
                }
                x = 0;
                y += cellHeight;
            }

            // Draw grid
            el.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', d => d.x)
                .attr('y', d => d.y)
                .attr('width', cellWidth)
                .attr('height', cellHeight)
                .attr('fill', 'none')
                .attr('stroke', this.gridColor)
                .attr('stroke-width', this.lineWidth);

            // Draw white rectangle to hide outer borders
            el.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', width)
                .attr('height', height)
                .attr('fill', 'none')
                .attr('stroke', 'white')
                .attr('stroke-width', this.lineWidth)
                .attr('pointer-events', 'none');  // Disable interaction
        }
    },
    mounted() {
        this.render();
    }
}
</script>