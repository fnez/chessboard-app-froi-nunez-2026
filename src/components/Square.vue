<template>
  <div class="square" :class="{ dark, active }" @click="$emit('click')">
    <span class="label">{{ id }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  active: Boolean,
});

const file = props.id.charCodeAt(0) - 65;
const rank = parseInt(props.id[1], 10);

const dark = (file + rank) % 2 === 0;
</script>

<style scoped>
.square {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.square.dark {
  background: #769656;
}

.square:not(.dark) {
  background: #eeeed2;
}

.square.active {
  outline: 3px solid #ff9800;
}

.label {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 10px;
  opacity: 0.6;
}
</style>
