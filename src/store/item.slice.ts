import { type StateCreator } from "zustand";

type IState = {
  items: Item[];
};

type IActions = {
  addItem: (item: Item) => void;
  deleteItem: (id: string) => void;
  editItem: (updatedItem: Item) => void;
};

export type IItemSlice = IState & IActions;

const base: IState = {
  items: [],
};

const createItemSlice: StateCreator<IItemSlice> = (set, get) => ({
  ...base,
  addItem: (item) => {
    const { items } = get();
    set({ items: [...items, item] });
  },
  deleteItem: (id) => {
    const { items } = get();
    set({ items: items.filter((i) => i.id !== id) });
  },
  editItem: (updatedItem) => {
    const { items } = get();
    set({
      items: items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    });
  },
});

export default createItemSlice;
