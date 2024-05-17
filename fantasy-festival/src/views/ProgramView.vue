<template>
  <div class="image">
      <img class="img-fluid d-block w-100" src="../assets/img/slide2.jpg" alt="">
    </div>
  <div class="container">
    <section variant="dynamic-xp" class="">
      <h2 class="--mørkeblå fw-bolder">Program</h2>
      <p class="--mørkeblå">
        Er du klar til at leve dig ind i en anden verden, en magisk historie, hvor du er helten, der er på en "quest" for at overvinde de onde magter og redde hele verden? 
        <br> Så gør dig klar til Fantasy Quest Esbjerg.
      </p>
    </section>

    <div class="grid-container mb-5">
      <div v-for="item in filteredProgramItems" :key="item.id" class="card">
        <div class="card-wrapper">
          <div class="image-card">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="text-card">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.description }} <br>
              {{ item.date }} <br>
              {{ item.hour }}
            </p>
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
    return programItems.value
  })
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding:0;
  margin-bottom: 120px;
}

section {
  margin-top: 60px;
  padding: 0px;
  border-radius: 8px;
  color: var(--mørkeblå);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 250px; /* Juster mellemrum mellem kortene efter behov */
}

.card {
  grid-column: span 3; /* Kortet fylder 3 ud af 5 kolonner */
  margin-top: 30px;
  margin-bottom: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Tilpas bredden efter behov */
  height: 200px; /* Tilpas højden efter behov */
  position: relative;
  border-radius: 10px; /* Tilføj rundede kanter */
}

.card-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px; /* Juster mellemrum mellem image-card og text-card */
  position: relative;
}

.image-card, .text-card {
  grid-column: span 5; /* Både image-card og text-card fylder hele kortets bredde */
}

.image-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Gør billedet dækker kortets område */
}

.text-card {
  position: absolute;
  bottom: 0;
  right: -280px; /* Ændret fra 0 til -20px for at strække sig 20px ind over billedet til højre */
  background-color: rgb(2, 58, 107, 0.8);
  padding: 10px;
  color: var(--gul);
  border-radius: 10px;
  justify-content: center;
  align-items: center;  
}

.text-card h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    grid-column: span 2; /* Kortet fylder 2 ud af 2 kolonner */
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .card {
    grid-column: span 1; /* Kortet fylder 1 ud af 1 kolonner */
  }
}

.image {
  width: 100%;
  height: 450px;
  overflow: hidden;
}
</style>
