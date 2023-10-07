import omit from 'lodash-es/omit'

const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ['tuna']), true),
}))

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  }))
)

import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore = create(devtools(store))
// Usage with a redux store, it will log full action types
const useReduxStore = create(devtools(redux(reducer, initialState)))

import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore1 = create(devtools(store, { name, store: storeName1 }))
const usePlainStore2 = create(devtools(store, { name, store: storeName2 }))
// Usage with a redux store, it will log full action types
const useReduxStore = create(devtools(redux(reducer, initialState)), , { name, store: storeName3 })
const useReduxStore = create(devtools(redux(reducer, initialState)), , { name, store: storeName4 })