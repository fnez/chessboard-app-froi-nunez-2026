<template>
  <aside class="sidebar" ref="sidebarRef">
    <h2>Click History</h2>
    <ul>
      <li v-for="(item, i) in history" :key="i">{{ i + 1 }}. {{ item }}</li>
    </ul>
  </aside>

  <!-- 
   Possible enhancement, last move for UX purposes : 
   <div class="last-move">Last move: {{ history[history.length - 1] }}</div> -->
</template>

<script setup>
import { nextTick, ref, watch } from "vue";

const { history } = defineProps({ history: Array });
const sidebarRef = ref(null);

watch(
  () => history.length,
  async () => {
    await nextTick(); // wait for DOM update
    if (sidebarRef.value) {
      sidebarRef.value.scrollTop = sidebarRef.value.scrollHeight;
    }
  },
);
</script>

<style scoped>
.sidebar {
  flex: 0 0 20%;
  min-width: 120px;
  overflow-y: auto;
  background: #b5b0b0;
}

h2 {
  margin: 12px;
  font-size: 28px;
}

@media (max-width: 767px) {
  .sidebar {
    width: 100%;
    height: 200px;
  }
  h2 {
    position: absolute;
    background: white;
    margin: 0;
    right: 0;
    left: 0;
  }
}
</style>
