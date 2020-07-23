<template>
  <div id="app">
    <h1 id="title">Tic Tac Toe</h1>
    <div id="player-container">
      <Player :color="'#1976d2'" :name="'Jugador 1'" :symbol="'x'"></Player>
      <Controls></Controls>
      <Player :color="'#009688'" :name="'Jugador 2'" :symbol="'o'"></Player>
    </div>
    <Board></Board>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#title {
  color: #2c3e50;
  font-size: 5rem;
}
#player-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

<script>
import Board from './components/Board';
import Controls from './components/Controls';
import Player from './components/Player';

export default {
  name: 'App',
  components: {
    Board,
    Controls,
    Player
  }
}
</script>
