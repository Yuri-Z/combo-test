import { ref } from 'vue'
import { defineStore } from 'pinia'
import {STORAGE_LIST, USER_LIST} from '@/constants/items.ts'

export interface iItem {
  id: number
  name: string
}

export const useItemStore = defineStore('itemStore', () => {
  const userItems = ref<iItem[]>(JSON.parse(JSON.stringify(USER_LIST)))

  const storageItems = ref<iItem[]>(JSON.parse(JSON.stringify(STORAGE_LIST)))

  const selectionList = ref<iItem[]>([])

  const selectedStorageItem = ref<iItem | null>(null)

  const onSelectUserItem = (newItem: iItem) => {
    const index = selectionList.value.findIndex(item => item.id === newItem.id)

    if (index >= 0) {
      selectionList.value.splice(index, 1)
    } else {
      selectionList.value.push(newItem)
    }
  }
  const onSelectStoreItem = (newItem: iItem) => {
    selectedStorageItem.value = selectedStorageItem.value?.id === newItem.id
      ? null
      : newItem
  }

  return { userItems, storageItems, selectionList, selectedStorageItem, onSelectUserItem, onSelectStoreItem }
})
