import { mount } from "@vue/test-utils";
import Sidebar from "../src/components/Sidebar.vue";

describe("Sidebar.vue", () => {
  // Test rendering of the history list
  it("renders history list", () => {
    const history = ["A1", "B2"];

    const wrapper = mount(Sidebar, {
      props: { history },
    });

    const items = wrapper.findAll("li");

    expect(items.length).toBe(2);
    expect(items[0].text()).toContain("A1");
    expect(items[1].text()).toContain("B2");
  });

  // Test updating when history changes
  it("updates when history changes", async () => {
    const wrapper = mount(Sidebar, {
      props: { history: [] },
    });

    await wrapper.setProps({ history: ["C3"] });

    expect(wrapper.findAll("li").length).toBe(1);
  });
});
