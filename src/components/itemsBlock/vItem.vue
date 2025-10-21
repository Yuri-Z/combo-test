<script setup lang="ts">
import {type iItem, useItemStore} from '@/stores/itemStore.ts'
import {computed} from 'vue'

const props = defineProps<{
  item: iItem,
  showIfPicked?: boolean
}>()

const itemStore = useItemStore()

const isPicked = computed(() => {
  return props.showIfPicked && (
    itemStore.selectionList.find(item => item.id === props.item.id)
    ||
    itemStore.selectedStorageItem?.id === props.item.id
  )
})

const emits = defineEmits<{
  (e: 'onClick', payload: iItem): void
}>()

</script>

<template>
  <div class="item" :class="{'item_picked': isPicked}" @click="emits('onClick', props.item)">
    <div class="item__name">
      {{props.item.name}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 80px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  
  &_picked {
    background-color: #DDEFFD;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  
  &__name {
    font-size: 20px;
  }
}
</style>
