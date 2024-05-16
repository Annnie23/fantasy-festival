
@import css from '../assets/main.css'

<template>
    <div class="container">
      <div class="image">
        <img src="../assets/img/slide1.jpg" alt="">
      </div>
  
      <div class="headline --gul ">
        <h1 class="--gul">
          Program
        </h1>
        <h3>
            Family Quest - DagQuest
        </h3>
        <h3 class="--gul">
            Fantasy Quest - AftenQuest 
        </h3>
        <div class="card-container flex-box">
        <div v-for="programItem in filteredProgramItems" :key="programItem.id" class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="programItem.image" class="img-fluid rounded-start  sm:thumbnail " :alt="programItem.title">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title --gul">{{ programItem.title }}</h5>
                <p class="card-text">{{ programItem.description }}</p>
                <p class="card-text"><small>{{ programItem.date }} at {{ programItem.hour }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import getProgramItems from '@/modules/getProgram'
  
  const { programItems } = getProgramItems()
  
  const filteredProgramItems = computed(() => {
    // Implementer din filtreringslogik her
    return programItems.value // Indtil videre returnerer vi blot alle programelementer
  })
  </script>
  
  <style scoped>
  /* .container {
    display: flex;
    flex-direction: column;
  } */
  
  .headline {
    margin-top: 20px; /* Tilføjer lidt afstand over overskriften */
    align-items: flex-start;
  }
  
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrerer kortene horisontalt */
    margin-top: 20px; /* Tilføjer lidt afstand over kortene */
    background-color: var(--mørkeblå);
  }

  .card{
    background-color: var(--mørkeblå);
    border-color: var(--gul);
    color: var(--gul)
       
  }
  .p{
      color: var(--gul)
    };



    .image {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
    /* Brug de definerede variabler og klasser */
  .--gul {
      color: var(--gul);
  }

  .--mørkeblå{
    color: var(--mørkeblå)
  }

  </style>
  