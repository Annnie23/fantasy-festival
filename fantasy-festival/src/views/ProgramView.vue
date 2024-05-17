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

    <div class="card">
        <div v-for="programItem in filteredProgramItems" :key="programItem.id" class="card mb-3"
        <h2

            <h2> slot="title"> Se festugens spændende program</h2>

            <p slot="text">
                Glæd dig til fede koncerter, forfriskende yoga, kunst på havnen og opleveler for hele familien. Esbjerg Festuge 2024 byder på lidt godt til alle!
            </p>

            <div slot="link">
                <bui-web-button class="moliri-solid" size="small">
                    <a href="https://esbjergfestuge.dk/program" target="_self" onclick="trackLinkClick(event, this, 'href', 'esbjergfestuge.dk', '_self')">Program</a>
                </bui-web-button>
            </div>

       

    </div>
    </div>


    <div style="display: flex; align-items: center; color: var(--gul); padding: 20px; border-radius: 10px;">
    <div style="flex: 1;">
      <img :src="programItems.image" alt="" style="width: 100%; height: auto; border-radius: 10px;">
    </div>
    <div style="flex: 2; padding-left: 20px;">
      <h2>Se festugens spændende program</h2>
      <p>
        Glæd dig til fede koncerter, forfriskende yoga, kunst på havnen og oplevelser for hele familien. Esbjerg Festuge 2024 byder på lidt godt til alle!
      </p>
      <a href="https://esbjergfestuge.dk/program" target="_self" @click="trackLinkClick('https://esbjergfestuge.dk/program')" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #FFF; text-decoration: none; border-radius: 5px;">Program</a>
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
  