import { create } from "zustand";

const useStore = create((set) => ({
  dataItems: [],
  loading: false,
  selectCategory: [],
  setSelectCategory: (newCategory) => set({ selectCategory: newCategory }),
  resultDataModal: false,
  setResultDataModal: (value) => set({ resultDataModal: value }),
  fetchData: async () => {
    try {
      set({ loading: true });
      const response = await fetch(
        "https://68336dae464b499636ff6c5a.mockapi.io/my/users/filterItems"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      const dataItems = data.map((date) => date.data).flat();
      set({ dataItems });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
