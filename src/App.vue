<template>
  <div id="app">
    <h1 id="title">Tic Tac Toe</h1>
    <div id="player-container">
      <Player :first="true" :color="'#1976d2'" :name="'Jugador 1'" :symbol="'x'"></Player>
      <Controls></Controls>
      <Player :color="'#009688'" :name="'Jugador 2'" :symbol="'o'"></Player>
    </div>
    <Board></Board>
  </div>
</template>

<style>
@import '../node_modules/typeface-roboto/index.css';

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#title {
  margin: 3rem 0;
  color: #2c3e50;
  font-size: calc(36px + 4vw);
  font-weight: 100;
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
