<template>
  <aside class="sidebar" ref="sidebarRef">
    <h2>History</h2>

    <ul>
      <li v-for="(item, i) in history" :key="i">{{ i + 1 }}. {{ item }}</li>
    </ul>
  </aside>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";

const props = defineProps({
  history: Array,
});

const sidebarRef = ref(null);

watch(
  () => props.history.length,
  async () => {
    await nextTick();

    const el = sidebarRef.value;
    if (!el) return;

    const lastItem = el.querySelector("li:last-child");
    if (lastItem && lastItem.scrollIntoView) {
      lastItem.scrollIntoView({ behavior: "smooth" });
    }
  },
);
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: #b5b0b0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

h2 {
  position: sticky;
  top: 0;
  background: white;
  padding: 12px;
  margin: 0;
  font-size: 18px;
  z-index: 1;
}

ul {
  list-style: none;
  margin: 0;
  padding: 8px 12px;
}

li {
  padding: 4px 0;
  font-size: 14px;
}

@media (max-width: 767px) {
  .sidebar {
    width: 100%;
    height: 160px;
    border-top: 1px solid #ccc;
  }
}
</style>
