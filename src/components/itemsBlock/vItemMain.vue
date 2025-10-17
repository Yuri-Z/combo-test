<script setup lang="ts">
import VItemList from '@/components/itemsBlock/vItemList.vue'
import {useItemStore} from '@/stores/itemStore.ts'
import VItem from '@/components/itemsBlock/vItem.vue'

const itemStore = useItemStore()
</script>

<template>
  <div class="item-main">
    <div class="item-main__selections">
      <div class="item-main__column">
        <v-item-list :item-list="itemStore.selectionList" @on-click="itemStore.onSelectUserItem"/>
        <div class="item-main__selections-counter">User items selected: <b>{{itemStore.selectionList?.length || 0}}/6</b></div>
      </div>
      <div class="item-main__column">
        <div class="item-main__storage-item">
          <v-item v-if="itemStore.selectedStorageItem" :item="itemStore.selectedStorageItem" @on-click="itemStore.onSelectStoreItem"/>
          <div v-else >no item selected</div>
        </div>
      </div>
    </div>
    <div class="item-main__lists">
      <div class="item-main__column">
        <v-item-list :item-list="itemStore.userItems" @on-click="itemStore.onSelectUserItem"/>
      </div>
      
      <div class="item-main__column">
        <v-item-list :item-list="itemStore.storageItems" @on-click="itemStore.onSelectStoreItem"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-main {
  margin: auto;
  padding: 8px;
  max-width: 1680px;
  
  &__selections {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__selections-counter {
    padding: 8px;
    text-align: center;
  }
  &__storage-item {
    display: flex;
    justify-content: end;
  }
  &__lists {
    display: flex;
    justify-content: space-between;
  }
  &__column {
    flex-grow: 1;
    max-width: 538px;
  }
}
</style>
