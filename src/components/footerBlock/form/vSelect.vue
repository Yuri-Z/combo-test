<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
  placeholder?: string
  options: string[]
}>()

const modelValue = defineModel<string>()
const selectRef = ref<HTMLElement | null>(null)

const isOpened = ref<boolean>(false)
const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    toggleOpen(false)
  }
}

const toggleOpen = (forcedState?: boolean) => {
  if (typeof forcedState === 'boolean') {
    isOpened.value = forcedState
  } else {
    isOpened.value = !isOpened.value
  }
  
  if (isOpened.value) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
}

const selectOption = (option: string) => {
  modelValue.value = option
  toggleOpen(false)
}
</script>

<template>
  <div class="select"
       :class="{'select_open': isOpened}"
       ref="selectRef"
  >
    <div class="select__active-item"
         :class="{'select__active-item_placeholder': !modelValue, 'select__active-item_open': isOpened}"
         @click="toggleOpen()"
    >{{modelValue || props.placeholder}}</div>
    
    <div class="select__list" :class="{'select__list_open': isOpened}">
      <div v-for="option in options"
           class="select__item"
           :key="option"
           @click="selectOption(option)"
      >{{option}}</div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.select {
  position: relative;
  width: 100%;
  user-select: none;
  
  font-family: Graphik, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  
  &__active-item {
    background: #fff;
    border: 1px solid #DDDFE1;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: border-color 0.2s ease;
    position: relative;
    color: #000;
    
    @include responsive('height', 48px, 48px, 72px);
    @include responsive('padding', 12px 16px, 12px 16px, 24px 32px);
    
    &:hover {
      border-color: #b0b0b0;
    }
    &::after {
      content: "";
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      border: solid #777;
      border-width: 0 2px 2px 0;
      padding: 4px;
      transition: transform 0.2s ease;
    }
    
    &_open {
      border-color: #0078ff;
      box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
      
      &::after {
        transform: rotate(-135deg);
      }
    }
    
    &_placeholder {
      color: #767676;
    }
  }
  &__list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    max-height: 220px;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s ease, transform 0.15s ease;
    z-index: 5;
    
    &_open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  &__item {
    color: #767676;
    cursor: pointer;
    transition: background 0.2s ease;
    
    @include responsive('height', 48px, 48px, 72px);
    @include responsive('padding', 12px 16px, 12px 16px, 24px 32px);
    
    &:hover {
      background: #f2f7ff;
    }
    &_active {
      background: #eaf3ff;
      font-weight: 600;
    }
  }
}
</style>
