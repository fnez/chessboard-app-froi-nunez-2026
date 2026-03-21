<template>
  <div class="layout">
    <ChessBoard @update:history="history = $event" />
    <Sidebar :history="history" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChessBoard from "./components/ChessBoard.vue";
import Sidebar from "./components/Sidebar.vue";

const history = ref([]);
</script>

<style>
.layout {
  display: flex;
  height: 100dvh;
  overflow: hidden;
}

@media (max-width: 767px) {
  .layout {
    flex-direction: column;
  }
}
</style>
