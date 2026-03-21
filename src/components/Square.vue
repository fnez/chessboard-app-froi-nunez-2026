<template>
  <div class="square" :class="[{ dark: isDark, active }]" @click="handleClick">
    <span class="label">{{ id }}</span>
  </div>
</template>

<script setup>
const { id, active } = defineProps({
  id: String,
  active: Boolean,
});

const file = id.charCodeAt(0) - 65;
const rank = parseInt(id[1], 10);
const isDark = (file + rank) % 2 === 0;

const emit = defineEmits(["click"]);
const handleClick = () => emit("click");
</script>

<style scoped>
.square {
  cursor: pointer;
  aspect-ratio: 1 / 1;
}

.square.dark {
  background: #769656;
}

.square:not(.dark) {
  background: #eeeed2;
}

.square.active {
  background-color: goldenrod;
}

.label {
  /* position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 10px;
  opacity: 0.6; */
}
</style>
