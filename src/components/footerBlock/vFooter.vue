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
  <div class="footer-wrapper animation-coloring" :class="[`animation-coloring_${animationState}`]">
    <div class="footer">
      <button class="footer__back-button animation-fade-in" :class="[`animation-fade-in_${animationState}`]" @click="toggleForm">Go back</button>
      <div class="footer__row footer__row_flex-column animation-slide" :class="[`animation-slide_${animationState}`]">
        <div class="footer__banner">Let's Build</div>
        <div class="footer__banner footer__banner_large">Future together</div>
      </div>
      <div style="margin-top: 45px;" class="animation-fade-out" :class="[`animation-fade-out_${animationState}`]">
        <div class="footer__row footer__row_space">
          <v-button color="secondary" class="footer__button" @on-click="toggleForm">Contact Us</v-button>
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
      <div class="animation-fade-in" :class="[`animation-fade-in_${animationState}`]">
        <div class="footer__row footer__row_narrow">
        <span class="footer__plain-text">
          EZ Blockchain believes that modern technologies and hard teamwork can significantly benefit energy businesses and reduce CO2 emissions.
          Let's talk about how we can do it together.
        </span>
        </div>
        <div class="footer__row footer__row_narrow">
          <v-form @on-submit="toggleForm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  min-height: 590px;
}

.footer {
  display: flex;
  flex-flow: column;
  max-width: 1680px;
  margin: auto;
  padding: 100px 0 36px;
  font-family: Monument Extended, sans-serif;
  font-weight: 400;
  
  letter-spacing: 0;
  
  &__back-button {
    background-color: transparent;
    position: absolute;
    font-family: Monument Extended, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    text-transform: uppercase;
    color: #45B7F4;
    cursor: pointer;
    height: initial !important;
  }
  
  &__row +&__row {
    margin-top: 45px;
  }
  &__row {
    display: flex;
    width: 100%;
    
    &_flex-column {
      flex-flow: column;
    }
    &_space {
      align-items: flex-start;
      justify-content: space-between; /* кнопка слева, списки справа */
    }
    &_narrow {
      padding-left: 230px;
    }
  }
  &__banner {
    font-size: 40px;
    text-transform: uppercase;
  }
  &__banner_large {
    font-size: 80px;
  }
  &__button {
    width: 288px;
    height: 72px;
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 26px;
  }
  &__list-wrapper {
    display: flex;
    flex-flow: column;
  }
  &__list-header {
    font-family: Monument Extended, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
    margin-bottom: 16px;
  }
  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 40px;
  }
  &__list-item {
    display: block;
    font-family: Graphik, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;
    
  }
  &__legal-information-item {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    padding: 21px;
    
    font-family: Graphik, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
    
    border-top: 1px solid;
    border-right: 1px solid;
    border-left: 1px solid;
    border-color: #ffffff;
    
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
  }
  &__legal-information-subitem {
    font-family: Graphik, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
    opacity: .6;
  }
  
  &__plain-text {
    width: 50%;
    max-width: 570px;
    font-family: Graphik, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #495160;
  }
}

.animation-slide {
  transition: padding-left .5s;
  &_forwards {
    padding-left: 230px;
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
  transition-property: opacity, max-height;
  transition-duration: 0.5s;
  overflow-y: hidden;
  
  &_forwards {
    opacity: 1;
    transition-delay: 1s;
    max-height: 950px;
  }
  &_backwards {
    opacity: 0;
    pointer-events: none;
    max-height: 0;
  }
}
.animation-fade-out {
  transition-property: opacity, max-height;
  transition-duration: 0.5s;
  overflow-y: hidden;
  
  &_forwards {
    opacity: 0;
    max-height: 0;
    pointer-events: none;
    transition-delay: .5s, .5s;
  }
  &_backwards {
    opacity: 1;
    transition-delay: .5s;
    transition-duration: 0.5s, 0.1s;
    max-height: 270px;
  }
}
</style>

