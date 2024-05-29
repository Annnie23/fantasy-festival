<template>
  <!-- Henvisning til fonttype -->
  <link
    rel="stylesheet"
    href="../assets/main.css"
    type="text/css"
    charset="utf-8"
  />
  <!-- Billedsektion hero -->
  <div class="image">
    <img class="img-fluid d-block w-100" src="../assets/img/hero1.jpg" alt="" />
  </div>
  <!-- Container til hovedindholdet -->
  <div class="container">
    <section variant="dynamic-xp">
      <!-- Overskrift og introduktionstekst -->
      <h1 class="text-4xl font-bold text-start py-4">
        Program for Fantasy Quest Esbjerg
      </h1>
      <h4 class="py-2">
        Er du klar til at leve dig ind i en anden verden, en magisk historie,
        hvor du er helten, der er på en quest for at overvinde de onde magter og
        redde hele verden?
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
    <!-- Sektion med de enkelte programitems lavet med dynamisk data
Vi har valgt at lave denne sektion med dynamisk data, da vi gerne vil kunne
opdatere programmet uden at skulle ind og ændre i koden.
-->
    <div v-for="item in filteredProgramItems" :key="item.id" class="row py-3">
      <div class="col-lg-6 image-container">
        <!-- Billede der er til programmet -->
        <img
          class="img-fluid img-thumbnail"
          :src="item.image"
          :alt="item.title"
        />
        <!-- Tekstkort med detaljer om programmet -->
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
/* Import af de dynamiske data */
import { ref, computed } from "vue";
import getProgramItems from "@/modules/getProgram";

const { programItems } = getProgramItems();

const filteredProgramItems = computed(() => programItems.value);
</script>

<style scoped>
/* Generel styling for billedsektionen */
.image {
  margin-bottom: 20px;
}

/* Generel styling for containeren */
.container {
  color: var(--mørkeblå);
}

/* Positionering for billedbeholderen */
.image-container {
  position: relative;
}

/* Styling for billeder med afrundede hjørner */
.img-thumbnail {
  border: none;
  border-radius: 10px;
}

/* Styling for tekstkortet 
Valget af denne styling er grunndet opstillingen fra Esbjergfestuge.dk, 
da der er blevet givet udtryk fra FantasyFestival at de gerne vil have vi tog inspiration fra deres hjemmeside.
*/
.text-card {
  position: absolute;
  bottom: 30px;
  right: -450px;
  background: rgb(14, 35, 66);
  opacity: 97%;
  color: var(--gul);
  padding: 10px;
  border-radius: 10px;
  width: calc(100% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Responsiv styling for tekstkort på skærme mindre end 1200px */
@media screen and (max-width: 1200px) {
  .text-card {
    right: -400px;
  }
}

/* Responsiv styling for tekstkort på skærme mindre end 992px */
@media screen and (max-width: 992px) {
  .text-card {
    position: static;
    width: 100%;
  }
}

/* Responsiv styling for tekstkort på skærme mindre end 768px */
@media screen and (max-width: 768px) {
  .text-card {
    position: static;
    width: 100%;
  }
}

/* Responsiv styling for tekstkort på skærme mindre end 480px */
@media screen and (max-width: 480px) {
  .text-card {
    padding: 15px;
  }
}

/* Styling for knapper */
button {
  background: rgb(14, 35, 66);
  color: var(--gul);
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 55px;
  transition: 0.3s;
}

/* Styling for knapper ved hover */
button:hover {
  background-color: var(--mørkeblå);
  box-shadow: 0 0 0 2px #023a6b;
  color: var(--orange);
}
</style>
