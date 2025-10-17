<script setup lang="ts">
import {type iItem} from '@/stores/itemStore.ts'

const props = defineProps<{
  item: iItem
}>()

const emits = defineEmits<{
  (e: 'onClick', payload: iItem): void
}>()

</script>

<template>
  <div class="item" @click="emits('onClick', props.item)">
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
  
  &__name {
    font-size: 20px;
  }
}
</style>
