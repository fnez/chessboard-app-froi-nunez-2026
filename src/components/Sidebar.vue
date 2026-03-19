<template>
  <aside class="sidebar">
    <h3>Click History</h3>
    <ul>
      <li v-for="(item, i) in history" :key="i">{{ i + 1 }}. {{ item }}</li>
    </ul>
  </aside>
</template>

<script setup>
defineProps({
  history: Array,
});
</script>

<style scoped>
.sidebar {
  padding: 12px;
  overflow-y: auto;
  border-left: 1px solid #ddd;
}
</style>
