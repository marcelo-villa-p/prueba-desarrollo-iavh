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
    name: 'Player',
    props: {
        color: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        symbol: {
            required: true,
            type: String
        }
    },
    computed: {
        style() {
            return `color: ${this.color}`
        }
    }
}
</script>