<template>
  <div class="square" :class="{ dark: isDark, active }" @click="emit('click')">
    <span class="label">{{ id }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  active: Boolean,
});

const emit = defineEmits(["click"]);

const fileIndex = props.id.charCodeAt(0) - "A".charCodeAt(0);
const rank = Number(props.id[1]);

const isDark = (fileIndex + rank) % 2 === 0;
</script>

<style scoped>
.square {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
}

.square.dark {
  background: #769656;
}

.square:not(.dark) {
  background: #eeeed2;
}

.square.active {
  background: goldenrod;
}

.label {
  font-size: 10px;
  margin: 4px;
  color: #555;
}
</style>
