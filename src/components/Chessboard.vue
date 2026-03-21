<template>
  <div class="board">
    <div class="inner">
      <Square
        v-for="square in squares"
        :key="square"
        :id="square"
        :active="selected.includes(square)"
        @click="handleClick(square)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Square from "./Square.vue";

const selected = ref([]);
const history = ref([]);

const squares = computed(() => {
  const files = "ABCDEFGH".split("");
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
  return ranks.flatMap((rank) => files.map((file) => `${file}${rank}`));
});

const handleClick = (square) => {
  const exists = selected.value.includes(square);

  if (exists) {
    selected.value = selected.value.filter((s) => s !== square);
    return;
  }

  selected.value.push(square);
  history.value.push(square);

  emit("update:history", history.value);
};

const emit = defineEmits(["update:history"]);
</script>

<style scoped>
.board {
  max-width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.inner {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100%;
}
@media (max-width: 767px) {
  .board {
    width: 100%;
  }
}
</style>
