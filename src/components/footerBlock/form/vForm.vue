<script setup lang="ts">

import VInput from '@/components/footerBlock/form/vInput.vue'
import VSelect from '@/components/footerBlock/form/vSelect.vue'
import VTextarea from '@/components/footerBlock/form/vTextarea.vue'
import VFileUpload from '@/components/footerBlock/form/vFileUpload.vue'
import VButton from '@/components/footerBlock/vButton.vue'


const emits = defineEmits<{
  (e: 'onSubmit'): void
}>()
const options = ['Partnership', 'Service request', 'Career', 'Other']


</script>

<template>
  <div class="form">
    <div class="form__row">
      <span class="form__header">Get in touch with us</span>
    </div>
    <div class="form__row">
      <v-input placeholder="Full name"/>
    </div>
    <div class="form__row form__row_double-input">
      <v-input placeholder="Company name"/>
      <v-input placeholder="Phone number"/>
    </div>
    <div class="form__row">
      <v-input placeholder="Email"/>
    </div>
    <div class="form__row form__row_header-inline">
      <div class="form__header">Type of request</div>
      <v-select placeholder="Choose type of request" :options="options"/>
    </div>
    <div class="form__row">
      <div class="form__header">Tell us about the project</div>
    </div>
    <div class="form__row">
      <v-textarea placeholder="Short description of the project"/>
    </div>
    <div class="form__row form__row_header-inline">
      <div class="form__header">Attachments</div>
      <v-file-upload :multiple="true" />
    </div>
    <div class="form__row">
      <v-button color="primary" class="form__submit-button" @on-click="emits('onSubmit')">Send</v-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
  width: 100%;
  max-width: 1072px;
  
  &__row + &__row {
    @include responsive('margin-top', 8px, 8px, 24px);
    
    &_double-input {
      display: grid;
      @include responsive('grid-template-columns', 1fr, 1fr, 1fr 1fr);
      @include responsive('grid-gap', 8px, 8px, 64px);
    }
    &_header-inline {
      display: grid;
      @include responsive('grid-template-columns', 1fr, 1fr, 0fr 1fr);
      @include responsive('grid-gap', 8px, 8px, 64px);
    }
  }
  &__header {
    display: flex;
    width: max-content;
    align-items: center;
    
    @include font-graphik();
    @include responsive('font-size', 18px);
  }
  &__submit-button {
    width: 100%;
  }
}
</style>
