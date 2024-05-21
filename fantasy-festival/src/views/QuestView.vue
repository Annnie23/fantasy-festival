


<template>
    <div class="image">
      <img
        class="img-fluid d-block w-100"
        src="../assets/img/header.png"
        alt=""
      />
    </div>

  
  <div class="main-content">
    <component 
      v-for="section in sections" 
      :key="section.id" 
      :is="getComponent(section.type)" 
      :section="section"
    />
  </div>
</template>

<script>
import getSections from '@/modules/getInfo.js';
import ImageTextSection from './ImageTextSection.vue';
import TextSection from './TextSection.vue';

export default {
  components: {
    ImageTextSection,
    TextSection
  },
  setup() {
    const { sections } = getSections();

    const getComponent = (type) => {
      switch(type) {
        case 'imageText':
          return 'ImageTextSection';
        case 'text':
          return 'TextSection';
        default:
          return null;
      }
    };

    return { sections, getComponent };
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
