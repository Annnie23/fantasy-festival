<template>
    <div class="container">
      <div class="image">
        <img src="../assets/img/slide1.jpg" alt="">
      </div>
  
      <div class="headline --gul ">
        <h1 class="--gul">
          Program
        </h1>
        <h6>
          Er du klar til at leve dig ind i en anden verden, en magisk historie, hvor du er helten, der er på en "quest" for at overvinde de onde magter og redde hele verden? 
          <br> Så gør dig klar til Fantasy Quest Esbjerg.
        </h6>
        <h3 class="--gul"></h3>
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
  body {
    margin: 0; /* Fjern standardmarginer for at sikre, at farven dækker hele siden */
    padding: 0; /* Fjern standardfyldning for at sikre, at farven dækker hele siden */
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .headline {
    margin-top: 20px; /* Tilføjer lidt afstand over overskriften */
    align-items: flex-start;
  }
  
  
  
  .image {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  
  .--gul {
    color: var(--gul);
  }
  
  .--mørkeblå {
    background-color: var(--mørkeblå); /* Baggrundsfarve for hele siden */
  }
  </style>
  