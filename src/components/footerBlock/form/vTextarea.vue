<script setup lang="ts">
const modelValue = defineModel<string>()
const props = defineProps<{
  placeholder?: string
  rows?: number
}>()
</script>

<template>
  <textarea
    v-model="modelValue"
    :placeholder="props.placeholder"
    :rows="props.rows || 4"
    class="textarea"
  />
</template>

<style scoped lang="scss">
.textarea {
  display: block;
  width: 100%;
  min-height: 144px;
  background: #fff;
  border: 1px solid #DDDFE1;
  border-radius: 4px;
  font-family: Graphik, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  @include responsive('padding', 12px 16px, 12px 16px, 24px 32px);
  
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
