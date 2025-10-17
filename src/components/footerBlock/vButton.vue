<script lang="ts" setup>
const props = defineProps<{
  color: 'primary' | 'secondary'
}>()
const emits = defineEmits<{
  (e: 'onClick'): void
}>()
</script>

<template>
  <button :class="[`button_${props.color}`]" class="button" @click="emits('onClick')">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  
  font-family: Monument Extended, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 110%;
  text-transform: uppercase;
  vertical-align: middle;
  
  cursor: pointer;
  
  &_primary {
    color: #fff;
    background-color: #45B7F4;
  }
  &_secondary {
    color: #45B7F4;
    background-color: #fff;
  }
}
</style>
