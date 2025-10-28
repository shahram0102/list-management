import { create, type StoreApi, type UseBoundStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import createItemSlice, { type IItemSlice } from "./item.slice";

// !: Don't touch this part
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

// !: Don't touch this part
function createSelectors<S extends UseBoundStore<StoreApi<object>>>(_store: S) {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
}

// * update store from here
const useStoreBase = create<IItemSlice>()(
  persist(
    devtools((...args) => ({
      ...createItemSlice(...args),
    })),
    {
      name: "list-management",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => Object.fromEntries(Object.entries(state)),
    }
  )
);

const useStore = createSelectors(useStoreBase);

export default useStore;
