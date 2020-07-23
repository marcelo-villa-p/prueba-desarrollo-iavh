<template>
  <div id="controls-container">
    <Restart></Restart>
  </div>
</template>

<script>
import Restart from "./controls/Restart";

export default {
  name: "Controls",
  components: { Restart },
};
</script>