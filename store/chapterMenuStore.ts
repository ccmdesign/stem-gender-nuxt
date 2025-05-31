import { defineStore } from 'pinia'

export const useChapterMenu = defineStore('chapterMenu', {
  state: () => ({
    isChapterMenuOpen: false,
    chapters: [] as any[]
  }),
  actions: {
    toggleChapterMenu() {
      this.isChapterMenuOpen = !this.isChapterMenuOpen
    },
    setChapters(list: any[]) {
      this.chapters = list
    }
  }
})