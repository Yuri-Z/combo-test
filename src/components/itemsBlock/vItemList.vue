<script lang="ts" setup>
import VItem from '@/components/itemsBlock/vItem.vue'
import {type iItem} from '@/stores/itemStore.ts'

const props = defineProps<{
  itemList: iItem[],
  showIfPicked?: boolean
}>()

const emits = defineEmits<{
  (e: 'onClick', payload: iItem): void
}>()

</script>

<template>
  <div v-if="props.itemList.length" class="item-list">
    <v-item v-for="item in props.itemList" :key="item.id" :show-if-picked="props.showIfPicked" :item="item" @on-click="emits('onClick', item)"/>
  </div>
  <div v-else class="item-list item-list_empty">
    no items in list
  </div>
</template>

<style lang="scss" scoped>
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  width: 100%;
  padding: 8px;
  border: 1px solid black;
  grid-gap: 8px;
  
  &_empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 58px;
  }
}
</style>
