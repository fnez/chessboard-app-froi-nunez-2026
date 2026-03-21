import { mount } from "@vue/test-utils";
import Square from "../src/components/Square.vue";

describe("Square.vue", () => {
  // Test rendering of the square with correct id
  it("renders id label", () => {
    const wrapper = mount(Square, {
      props: { id: "A1", active: false },
    });

    expect(wrapper.text()).toContain("A1");
  });

  // Test click event
  it("emits click when clicked", async () => {
    const wrapper = mount(Square, {
      props: { id: "A1", active: false },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  // Test active state when clicked
  it("applies active class when active", () => {
    const wrapper = mount(Square, {
      props: { id: "A1", active: true },
    });

    expect(wrapper.classes()).toContain("active");
  });
});
