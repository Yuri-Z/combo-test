<script lang="ts" setup>

import {computed, ref} from 'vue'
import VForm from '@/components/footerBlock/form/vForm.vue'
import VButton from '@/components/footerBlock/vButton.vue'

const pagesList = {
  header: 'Pages',
  items: ['About', 'EZ Smartboxes', 'EZ Smartgrid', 'Our cases', 'News', 'Careers']
}
const socialMediaList = {
  header: 'Social Media',
  items: ['Telegram', 'Facebook', 'Instagram', 'Twitter', 'Medium', 'LinkedIn']
}

const formIsShown = ref<boolean>(false)

const toggleForm = () => {
  formIsShown.value = !formIsShown.value
}

const animationState = computed(() => {
  return formIsShown.value ? 'forwards' : 'backwards'
})
</script>

<template>
  <div :class="[`animation-coloring_${animationState}`]" class="footer-wrapper animation-coloring">
    <div class="footer">
      <button :class="[`animation-fade-in_${animationState}`]" class="footer__back-button animation-fade-in" @click="toggleForm">Go back</button>
      <div :class="[`animation-slide_${animationState}`]" class="footer__row footer__row_flex-column animation-slide">
        <div class="footer__banner">Let's Build</div>
        <div class="footer__banner footer__banner_large">Future together</div>
      </div>
      <div :class="[`animation-fade-out_${animationState}`]" class="animation-fade-out footer__row-wrapper">
        <div class="footer__row footer__row_space">
          <v-button class="footer__button" color="secondary" @on-click="toggleForm">Contact Us</v-button>
          <div class="footer__lists">
            <div class="footer__list-wrapper">
              <div class="footer__list-header">{{ pagesList.header }}</div>
              <ul class="footer__list">
                <li v-for="item in pagesList.items" class="footer__list-item">{{ item }}</li>
              </ul>
            </div>
            <div class="footer__list-wrapper">
              <div class="footer__list-header">{{ socialMediaList.header }}</div>
              <ul class="footer__list">
                <li v-for="item in socialMediaList.items" class="footer__list-item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__row footer__row_table-like">
        <div class="footer__legal-information-item">
          EZ Blockchain © 2022 All Rights Reserved
          <span class="footer__legal-information-subitem">Terms of service</span>
        </div>
        <div class="footer__legal-information-item">
          +1 (888) 890-15-16
        </div>
        <div class="footer__legal-information-item">
          311 S Wacker Drive, Suite 1410, Chicago, IL 60606
        </div>
        <div class="footer__legal-information-item">
          Info@ezblockchain.net
        </div>
      </div>
      </div>
      <div :class="[`animation-fade-in_${animationState}`]" class="animation-fade-in">
        <div class="footer__row footer__row_form">
        <span class="footer__plain-text">
          EZ Blockchain believes that modern technologies and hard teamwork can significantly benefit energy businesses and reduce CO2 emissions.
          Let's talk about how we can do it together.
        </span>
        </div>
        <div class="footer__row footer__row_form">
          <v-form @on-submit="toggleForm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer-wrapper {
  width: 100%;
  
  @include responsive('min-height', 700px, 590px, 420px, 590px);
}

.footer {
  position: relative;
  display: flex;
  flex-flow: column;
  max-width: 1680px;
  margin: auto;
  @include responsive('padding', 32px 8px 16px, 32px 8px 36px, 40px 12px 36px, 100px 12px 36px);
  
  &__back-button {
    position: absolute;
    height: initial !important;
    
    color: #45B7F4;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
    
    @include font-monument();
    @include responsive('font-size', 14px);
    @include responsive('right', 8px, 8px, initial);
    @include responsive('top', 80px, 80px, initial);
  }
  
  &__row + &__row, &__row-wrapper {
    @include responsive('margin-top', 12px, 12px, 16px, 45px);
  }
  &__row {
    display: flex;
    width: 100%;
    
    &_flex-column {
      flex-flow: column;
    }
    &_space {
      @include responsive('align-items', center, center, flex-start);
      justify-content: space-between;
      @include responsive('flex-flow', column, column, initial);
    }
    &_form {
      @include responsive('padding-left', 0px, 0px, 200px, 200px, 230px);
    }
    &_table-like {
      @include responsive('flex-flow', column, column, row)
    }
  }
  &__banner {
    @include font-monument();
    @include responsive('font-size', 16px, 16px, 32px, 40px);
    
    text-transform: uppercase;
  }
  &__banner_large {
    @include font-monument();
    @include responsive('font-size', 26px, 28px, 48px, 80px);
  }
  &__button {
    @include responsive('width', 100%, 100%, 288px);
    @include responsive('height', 48px, 48px, 72px);
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
    
    @include responsive('width', 100%, 100%, 50%);
    @include responsive('padding', 0 12px, 0 12px, 0);
  }
  &__list-wrapper {
    display: flex;
    flex-flow: column;
  }
  &__list-header {
    margin-bottom: 16px;
    @include font-monument(); // 80px
    @include responsive('font-size', 16px);
  }
  &__list {
    display: grid;
    grid-auto-flow: column;
    @include responsive('grid-template-rows', repeat(6, 1fr), 1fr 1fr 1fr);
    @include responsive('grid-row-gap', 8px, initial);
    @include responsive('grid-column-gap', 20px, 20px, 40px);
  }
  &__list-item {
    display: block;
    @include font-graphik();
    @include responsive('font-size', 16px);
    
  }
  &__legal-information-item {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    
    @include font-graphik();
    @include responsive('font-size', 14px, 14px, 14px, 16px);
    
    border: 1px solid #ffffff;
    border-bottom-width: 0;
    
    @include responsive('padding', 16px 8px, 16px 8px, 16px 8px, 21px);
    @include responsive('border-left-width', 0, 0, 1px);
    @include responsive('border-right-width', 0, 0, 1px);
    
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
  }
  &__legal-information-subitem {
    @include font-graphik();
    @include responsive('font-size', 16px);
    opacity: .6;
  }
  
  &__plain-text {
    max-width: 570px;
    @include font-graphik();
    @include responsive('font-size', 16px);
    @include responsive('width', 100%, 100%, 50%);
    color: #495160;
  }
}

.animation-slide {
  transition: padding-left .5s;
  &_forwards {
    @include responsive('padding-left', 0px, 0px, 200px, 200px, 230px);
  }
  &_backwards {
    padding-left: 0;
    transition-delay: 1s;
  }
}
.animation-coloring {
  transition: color .5s, background-color .5s;
  
  &_forwards {
    color: #398BF5;
    background-color: #fff;
    transition-delay: .5s;
  }
  &_backwards {
    color: #FFFFFF;
    background-color: #308AFC;
    transition-delay: .5s;
  }
}
.animation-fade-in {
  overflow-y: hidden;
  transition-duration: 0.5s;
  transition-property: opacity, max-height;
  
  &_forwards {
    max-height: 950px;
    opacity: 1;
    transition-delay: 1s;
  }
  &_backwards {
    max-height: 0;
    pointer-events: none;
    opacity: 0;
  }
}
.animation-fade-out {
  overflow-y: hidden;
  transition-duration: 0.5s;
  transition-property: opacity, max-height;
  
  &_forwards {
    max-height: 0;
    pointer-events: none;
    opacity: 0;
    transition-delay: .5s, .5s;
  }
  &_backwards {
    @include responsive('max-height', unset, unset, 360px);
    opacity: 1;
    transition-delay: .5s;
    transition-duration: 0.5s, 0.1s;
  }
}


</style>

