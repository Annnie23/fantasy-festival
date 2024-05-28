<template>
    <link rel="stylesheet" href="../assets/main.css" type="text/css" charset="utf-8" />
  <div class="image">
    <img
      class="img-fluid d-block w-100"
      src="../assets/img/hero1.jpg"
      alt=""
    />
  </div>
  <div class="container">
    <section variant="dynamic-xp">
      <h1 class="text-4xl font-bold text-start py-4">
        Program for Fantasy Quest Esbjerg
        </h1>
        <h4 class="py-2">
          Er du klar til at leve dig ind i en anden verden, en magisk historie,
        hvor du er helten, der er på en quest for at overvinde de onde magter
        og redde hele verden?
          <br />
          Så gør dig klar til Fantasy Quest Esbjerg.
        </h4>
        <p class="py-1">
        <strong>
          Fantasy Quest Esbjerg får i 2024 både en svær aftenudgave og en
          familievenlig dagudgave under Fantasyfestivalen, som er skabt i
          samarbejde med YouTuberen Lakserytteren.
        </strong>
      </p>

    
    </section>

    <div v-for="item in filteredProgramItems" :key="item.id" class="row py-3">
      <div class="col-lg-6 image-container">
        <img
          class="img-fluid img-thumbnail"
          :src="item.image"
          :alt="item.title"
        />
        <div class="text-card">
          <h2>{{ item.title }}</h2>
          <p>
            {{ item.description }} <br />
            {{ item.date }} <br />
            {{ item.hour }}
          </p>
          <a :href="item.link" v-if="item.link" target="_blank">
            <button type="button">{{ item.linkText }}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import getProgramItems from "@/modules/getProgram";

const { programItems } = getProgramItems();

const filteredProgramItems = computed(() => programItems.value);
</script>

<style scoped>
.image {
  margin-bottom: 20px;
}

.container {
  color: var(--mørkeblå);
}

.image-container {
  position: relative;
}

.img-thumbnail {
  border: none;
  border-radius: 10px;
}

.text-card {
  position: absolute;
  bottom: 30px;
  right: -450px;
  background: rgb(14, 35, 66);
  opacity: 97%;
  color: var(--gul); /* Text color */
  padding: 10px;
  border-radius: 10px;
  width: calc(100% - 20px); /* Adjust width if necessary */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow for better visibility */
}

@media screen and (max-width: 1200px) {
  .text-card {
    position: absolute;
    bottom: 30px;
    right: -400px;
    background: rgb(14, 35, 66);
    opacity: 97%;
    color: var(--gul); /* Text color */
    padding: 10px;
    border-radius: 10px;
    width: calc(100% - 20px); /* Adjust width if necessary */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow for better visibility */
  }
}

@media screen and (max-width: 992px) {
  .text-card {
    position: static;
    background: rgb(14, 35, 66);
    opacity: 97%;
    color: var(--gul); /* Text color */
    padding: 10px;
    border-radius: 10px;
    width: 100%; /* Adjust width if necessary */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow for better visibility */
  }
}
@media screen and (max-width: 768px) {
  .text-card {
    position: static;
    background: rgb(14, 35, 66);
    color: var(--gul); /* Text color */
    padding: 10px;
    border-radius: 10px;
    width: 100%; /* Adjust width if necessary */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow for better visibility */
  }
}

@media screen and (max-width: 480px) {
  .text-card {
    padding: 15px;
  }
}

button {
  font-family: monospace;
  background: rgb(14, 35, 66);
  color: var(--gul);
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 55px;
  transition: 0.3s;
}

button:hover {
  background-color: var(--mørkeblå);
  box-shadow: 0 0 0 2px #023a6b;
  color: var(--orange);
}
</style>
