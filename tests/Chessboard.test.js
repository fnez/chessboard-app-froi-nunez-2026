import { mount } from "@vue/test-utils";
import ChessBoard from "../src/components/ChessBoard.vue";
import Square from "../src/components/Square.vue";

describe("ChessBoard.vue", () => {
  // Test rendering of proper 64 squares
  it("renders 64 squares", () => {
    const wrapper = mount(ChessBoard);

    const squares = wrapper.findAllComponents(Square);
    expect(squares.length).toBe(64);
  });

  // Test click on a square and add to history
  it("adds square to history on click", async () => {
    const wrapper = mount(ChessBoard);
    const firstSquare = wrapper.findComponent(Square);

    await firstSquare.trigger("click");

    const emitted = wrapper.emitted("update:history");

    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toEqual([firstSquare.props("id")]);
  });

  // Test toggling selection (clicking the same square twice should not add to history)
  it("toggles selection (click twice removes active)", async () => {
    const wrapper = mount(ChessBoard);

    const square = wrapper.findComponent(Square);

    await square.trigger("click"); // select
    await square.trigger("click"); // deselect

    // should only emit once (first click)
    const emitted = wrapper.emitted("update:history");

    expect(emitted.length).toBe(1);
  });
});
