<template>
  <div class="board">
    <Square
      v-for="square in squares"
      :key="square"
      :id="square"
      :active="selected.has(square)"
      @click="handleClick(square)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBoardState } from "../composables/useBoardState";
import Square from "./Square.vue";

const { selected, toggleSquare } = useBoardState();

const squares = computed(() => {
  const files = "ABCDEFGH".split("");
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  return ranks.flatMap((rank) => files.map((file) => `${file}${rank}`));
});

const handleClick = (square) => {
  toggleSquare(square);
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  min-width: 264px;
  min-height: 264px;
}
</style>
