<template>
  <div class="board">
    <div class="grid">
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

const emit = defineEmits(["update:history"]);

const squares = computed(() => {
  const files = "ABCDEFGH".split("");
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  return ranks.flatMap((rank) => files.map((file) => `${file}${rank}`));
});

const handleClick = (square) => {
  if (selected.value.includes(square)) {
    selected.value = selected.value.filter((s) => s !== square);
    return;
  }

  selected.value.push(square);
  history.value.push(square);

  emit("update:history", history.value);
};
</script>

<style scoped>
.board {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.grid {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 767px) {
  .board {
    padding: 12px;
  }

  .grid {
    max-width: 100%;
  }
}
</style>
