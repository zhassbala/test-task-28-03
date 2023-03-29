import * as Vuex from 'vuex'
import { getItems } from '~/mock/items'
import { Catalog, Category, Item } from '~/types'

export const state = (): Catalog => new Catalog()

export const getters: Vuex.GetterTree<Catalog, Catalog> = {
  filteredItems: (state) => {
    if (state.selectedCategory === 'all') {
      return state.items
    }
    const _filteredItems = state.items.filter(
      (item) => item.category === state.selectedCategory
    )
    if (state.sortBy === 'all') {
      return _filteredItems
    }
    return _filteredItems.sort((a, b) => {
      if (state.sortBy === '-price') {
        return a.price - b.price
      } else if (state.sortBy === '+price') {
        return b.price - a.price
      }
      return b.orderCount - a.orderCount
    })
  },
}

export const mutations: Vuex.MutationTree<Catalog> = {
  updateItems(state, items: Item[]) {
    state.items = items
  },
  changeCategory(state, newCategory: Category) {
    state.selectedCategory = newCategory
  },
  changeSort(state, newSort) {
    state.sortBy = newSort
  },
  likeItem(state, item: Item) {
    if (typeof window !== 'undefined') {
      if (state.likedItems.length && !state.likedItems.includes(item.id)) {
        localStorage.setItem(
          'liked_items',
          JSON.stringify([...state.likedItems, item.id])
        )
        state.likedItems = [...state.likedItems, item.id]
      } else {
        localStorage.setItem('liked_items', JSON.stringify([item.id]))
        state.likedItems = [item.id]
      }
    }
  },
  unlikeItem(state, item: Item) {
    if (typeof window !== 'undefined') {
      const prevLiked = JSON.parse(
        localStorage.getItem('liked_items') as string
      ) as number[] | null
      if (prevLiked !== null && prevLiked.includes(item.id)) {
        localStorage.setItem(
          'liked_items',
          JSON.stringify(prevLiked.filter((el) => el !== item.id))
        )
        state.likedItems = prevLiked.filter((el) => el !== item.id)
      }
    }
  },
  initLikedItems(state) {
    const liked = JSON.parse(localStorage.getItem('liked_items') as string) as
      | number[]
      | null
    state.likedItems = liked ?? []
  },
}

export const actions: Vuex.ActionTree<Catalog, Catalog> = {
  async fetchItems({ commit, state }) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        commit('updateItems', getItems(50))
        resolve(state.items)
      }, 1000)
    })
  },
}
