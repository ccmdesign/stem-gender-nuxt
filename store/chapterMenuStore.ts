import { defineStore } from 'pinia'

export const useChapterMenu = defineStore('chapterMenu', {
  state: () => ({
    isChapterMenuOpen: false,
  }),
  actions: {
    toggleChapterMenu() {
      this.isChapterMenuOpen = !this.isChapterMenuOpen
    },
    setChapterMenu(open) {
      this.isChapterMenuOpen = open
    }
  }
})