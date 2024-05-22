<template>
  <div class="image">
    <img class="img-fluid d-block w-100" src="../assets/img/slide2.jpg" alt="">
  </div>
  <div class="container">
    <section variant="dynamic-xp" class="">
      <h2 class="--mørkeblå fw-bolder">Program</h2>
      <p class="--mørkeblå">
        Er du klar til at leve dig ind i en anden verden, en magisk historie, hvor du er helten, der er på en "quest" for at overvinde de onde magter 
        og redde hele verden? 
        <br> Så gør dig klar til Fantasy Quest Esbjerg.
      </p>
      <p>
        <strong>Fantasy Quest Esbjerg får i 2024 både en svær aftenudgave og en familievenlig dagudgave under Fantasyfestivalen, som er skabt i samarbejde med YouTuberen Lakserytteren.</strong>
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
            <a :href="item.link" v-if="item.link" target="_blank">
              <button type="button">{{ item.linkText }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import getProgramItems from '@/modules/getProgram';
  
  const { programItems } = getProgramItems();
  
  const filteredProgramItems = computed(() => {
    return programItems.value;
  });
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
}

section {
  margin-top: 60px;
  padding: 0;
  border-radius: 8px;
  color: var(--mørkeblå);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  border: none;
}

.card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.image-card {
  width: 60%;
  height: auto;
  flex-shrink: 0;
}

.image-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.text-card {
  width: 70%;
  margin-left: 700px;
  margin-top: 260px;
  background: linear-gradient(270deg, rgba(80,180,165,1) 0%, rgba(14,35,66,0.8576680672268908) 0%);  padding: 10px;
  color: var(--gul);
  border-radius: 10px;
  text-align: left;
  position: absolute;
}

.text-card h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .card-wrapper {
    flex-direction: column;
  }

  .image-card, .text-card {
    width: 100%;
  }

  .text-card {
    margin-left: 0;
    margin-top: 0px;
    position: sticky;
  }
}

.image {
  width: 100%;
  height: 450px;
  overflow: hidden;
}

button {
  font-family: monospace;
  background-color: var(--mørkeblå);
  color: var(--gul);
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: 0.3s;
}

button:hover {
  background-color: var(--blå);
  box-shadow: 0 0 0 5px #023A6B;
  color: var(--orange);
}
</style>
