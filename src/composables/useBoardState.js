import { ref } from "vue";

export function useBoardState() {
  const selected = ref(new Set());
  const history = ref([]);

  const toggleSquare = (square) => {
    const next = new Set(selected.value);

    if (next.has(square)) {
      next.delete(square);
      selected.value = next;
      return;
    }

    next.add(square);
    selected.value = next;

    history.value.push(square);
  };

  return {
    selected,
    history,
    toggleSquare,
  };
}
