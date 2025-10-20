<script lang="ts" setup>
import {ref, computed} from 'vue'

const modelValue = defineModel<File[] | null>()
const props = defineProps<{
  multiple?: boolean
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const files = computed({
  get: () => modelValue.value || [],
  set: (val) => (modelValue.value = val)
})

const handleFiles = (fileList: FileList | null)  => {
  if (!fileList?.length) return
  const fileArray = Array.from(fileList)
  files.value = props.multiple ? [...files.value, ...fileArray] as File[] : [fileArray[0]] as File[]
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false
  handleFiles(e.dataTransfer?.files ?? null)
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = true
}

const handleDragLeave = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false
}

const openFileDialog = () => fileInput.value?.click()

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  handleFiles(target.files)
  target.value = ''
}

const removeFile = (index: number) => {
  files.value = files.value.filter((_, i) => i !== index)
}
</script>

<template>
  <div
    :class="{ 'dropzone_dragging': isDragging }"
    class="dropzone"
    @dragleave="handleDragLeave"
    @dragover="handleDragOver"
    @drop="handleDrop"
  >
    <input
      ref="fileInput"
      :multiple="props.multiple"
      class="dropzone__input"
      type="file"
      @change="onFileChange"
    />
    
    <div class="dropzone__content">
      <div class="dropzone__text-block">
        <button class="dropzone__browse" type="button" @click="openFileDialog">
          Browse Files
        </button>
        <span class="dropzone__text">or drag & drop files here</span>
      </div>
      <div v-if="files.length" class="dropzone__pills">
        <div v-for="(file, i) in files" :key="i" class="dropzone__pill">
          <span class="dropzone__pill-name">{{ file.name }}</span>
          <button
            class="dropzone__pill-remove"
            type="button"
            @click.stop="removeFile(i)"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropzone {
  position: relative;
  width: 100%;
  @include font-graphik();
  @include responsive('font-size', 16px);
  color: #444;
  
  cursor: pointer;
  background: #fafafa;
  border: 1px dashed #dddfE1;
  border-radius: 4px;
  transition: border-color 0.2s ease, background 0.2s ease;
  
  @include responsive('min-height', 48px, 48px, 72px);
  @include responsive('padding', 12px 16px, 12px 16px, 24px 32px);
  
  &__input {
    display: none;
  }
  
  &__content {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    gap: 12px;
  }
  
  &__pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  &__pill {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    font-size: 14px;
    color: #004a99;
    background: #e9f3ff;
    border: 1px solid #b5d7ff;
    border-radius: 999px;
    user-select: none;
    gap: 6px;
  }
  
  &__pill-name {
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__pill-remove {
    font-size: 14px;
    line-height: 1;
    color: #004a99;
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #ff3b3b;
    }
  }
  
  &__text-block {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  &__browse {
    padding: 0;
    font-weight: 500;
    color: #0078ff;
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.2s ease;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  &__text {
    color: #555;
  }
  
  &_dragging {
    background: #f2f7ff;
    border-color: #0078ff;
  }
  
  &:hover {
    border-color: #b0b0b0;
  }
  
  &:focus-within {
    border-color: #0078ff;
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
  }
}
</style>
