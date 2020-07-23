export default {
  SET_ACTIVE_PLAYER(state, payload) {
    state.activePlayer.color = payload.color;
    state.activePlayer.name = payload.name;
    state.activePlayer.symbol = payload.symbol;
  }
}