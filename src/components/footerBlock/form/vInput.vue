<script setup lang="ts">
const modelValue = defineModel<string>()
const props = defineProps<{
  placeholder?: string
}>()
</script>

<template>
  <input
    type="text"
    v-model="modelValue"
    :placeholder="props.placeholder"
    class="input"
  />
</template>

<style scoped lang="scss">
.input {
  display: block;
  width: 100%;
  height: 72px;
  padding: 24px 32px;
  background: #fff;
  border: 1px solid #DDDFE1;
  border-radius: 4px;
  font-family: Graphik, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &::placeholder {
    color: #767676;
  }
  
  &:hover {
    border-color: #b0b0b0;
  }
  
  &:focus {
    border-color: #0078ff;
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    outline: none;
  }
}
</style>
