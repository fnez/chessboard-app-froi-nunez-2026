import { ref } from "vue";

const selected = ref([]);
const history = ref([]);

export function useBoardState() {
  const toggleSquare = (square) => {
    const exists = selected.value.includes(square);

    if (exists) {
      selected.value = selected.value.filter((s) => s !== square);
      return;
    }

    selected.value.push(square);
    history.value.push(square);
  };

  return {
    selected,
    history,
    toggleSquare,
  };
}
