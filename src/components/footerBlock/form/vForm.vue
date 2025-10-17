<script setup lang="ts">

import VInput from '@/components/footerBlock/form/vInput.vue'
import VSelect from '@/components/footerBlock/form/vSelect.vue'
import VTextarea from '@/components/footerBlock/form/vTextarea.vue'
import VFileUpload from '@/components/footerBlock/form/vFileUpload.vue'
import VButton from '@/components/footerBlock/vButton.vue'


const emits = defineEmits<{
  (e: 'onSubmit')
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
  
  &__row+&__row {
    margin-top: 24px;
    
    &_double-input {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 64px;
    }
    &_header-inline {
      display: grid;
      grid-template-columns: 0fr 1fr;
      grid-gap: 64px;
    }
  }
  &__header {
    display: flex;
    width: max-content;
    align-items: center;
    
    font-family: Graphik, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 170%;
  }
  &__submit-button {
    width: 100%;
  }
}
</style>
