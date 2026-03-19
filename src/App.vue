<template>
  <div class="layout">
    <div class="board-wrapper">
      <ChessBoard />
    </div>
    <Sidebar :history="history" />
  </div>
</template>

<script setup>
import ChessBoard from "./components/ChessBoard.vue";
import Sidebar from "./components/Sidebar.vue";
import { useBoardState } from "./composables/useBoardState";

const { history } = useBoardState();
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
}

/* Desktop */
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }

  .board-wrapper {
    flex: 1;
  }

  .sidebar {
    width: 260px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .layout {
    flex-direction: column;
  }

  .board-wrapper {
    width: 100%;
  }

  .sidebar {
    width: 100%;
    height: 200px;
  }
}
</style>
