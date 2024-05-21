<template>
  <div class="image">
    <img
      class="img-fluid d-block w-100"
      src="../assets/img/header.png"
      alt=""
    />
  </div>

  <!-- Første sektion -->
  <div class="container">
    <div class="section">
      <h1>Fantasy Quest Esbjerg</h1>
      <h3>
        Er du klar til at træde ind i en verden fyldt med magi og eventyr?
        <br />
        Tag rollen som helten i din egen episke "quest" for at besejre de mørke
        kræfter og redde hele verden!
      </h3>
    </div>
  </div>

  <!-- Anden sektion -->
  <div class="container">
    <div class="section">
      <h2>
        <strong>
          Velkommen til Fantasy Quest Esbjerg - hvor fantasi bliver til
          virkelighed.
        </strong>
      </h2>
    </div>
  </div>

  <!-- Tredje sektion -->
  <div class="container">
    <div class="section">
      <div class="tekst">
        <p>
          Forestil dig ”Fangerne på Fortet” tilsat en masse magi, noget teater
          og rollespil, nogle helte og skurke og selvfølgelig kampen mellem det
          gode og det onde, så er du godt på vej til Fantasy Quest Esbjerg.
        </p>
        <p>
          Fantasy Quest Esbjerg får i 2024 både en svær aftenudgave og en
          familievenlig udgave i dagstimerne under Fantasyfestivalen, der er
          skrevet i samarbejde med YouTuberen Lakserytteren, hvor alle kan være
          med.
        </p>
        <h5>
          Har du lyst til lidt større udfordringer, så skrues sværhedsgraden op,
          når tusmørket lægger sig over Esbjergs gader.
        </h5>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="section">
      <div class="row justify-content-evenly">
        <div class="col-lg-6">
          <img
            class="img-fluid img-thumbnail"
            :src="section.image"
            alt="Event Image"
          />
        </div>
        <div class="col-lg-6">
          <div class="section info text-card">
            <h3 v-if="section.h3">{{ section.h3 }}</h3>
            <h4>{{ section.title }}</h4>
            <p>{{ section.description }}</p>
            <h6 v-if="section.h6">{{ section.h6 }}</h6>
            <a :href="section.link" class="button-link">
              <button>{{ section.linkText }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSections from "@/modules/getInfo.js";



</script>

<style scoped>
/* Billedsektion */
.image {
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Generel containerstil */
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
}

/* Generel sektionsstil */
.section {
  margin-top: 60px;
  padding: 0;
  border-radius: 8px;
  color: var(--mørkeblå);
}

.text-card {
  width: 50%; /* Juster bredden på tekstboksen */
  margin-left: -90px; /* Juster forskydningen */
  /*   margin-top: 260px; */ /* Juster forskydningen */
  background-color: rgba(2, 58, 107, 0.75);
  padding: 10px;
  color: var(--gul);
  border-radius: 10px; /* Tilføj rundede kanter */
  text-align: left; /* Centrer tekst */
  position: absolute;
}

/* Knapper */
button {
  font-family: monospace;
  background-color: var(--mørkeblå);
  color: var(--gul);
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 55px;
  transition: 0.3s;
}

button:hover {
  background-color: var(--blå);
  box-shadow: 0 0 0 2px #023a6b;
  color: var(--orange);
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-container {
  position: relative;
  width: calc(
    25% - 20px
  ); /* Beregning for at have maksimalt 4 billeder pr. række med en margin på 10px på hver side */
  margin: 10px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.img-thumbnail {
  border: none;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(2, 58, 107, 0.75);
  text-align: center;
  opacity: 0;
  transition: bottom 0.3s ease, opacity 0.3s ease;
}

.overlay p {
  color: var(--gul);
  font-size: 20px;
}

.image-container:hover img {
  transform: scale(1.2);
}

.image-container:hover .overlay {
  bottom: 0;
  opacity: 1;
}

/* Medierækkevidder for responsivitet */
@media screen and (max-width: 768px) {
  .image-container {
    width: calc(
      50% - 20px
    ); /* To billeder pr. række på skærme, der er mindre end 768px brede */
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(2, 58, 107, 0.75);
    text-align: center;
    opacity: 1;
    transition: none;
  }

  .overlay p {
    color: var(--gul);
    font-size: 20px;
  }

  .image-container img {
    transform: none; /* Disable zoom effect on smaller screens */
  }
}

@media screen and (max-width: 480px) {
  .image-container {
    width: calc(
      100% - 20px
    ); /* Et billede pr. række på skærme, der er mindre end 480px brede */
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(2, 58, 107, 0.75);
    text-align: center;
    opacity: 1;
    transition: none;
  }

  .overlay p {
    color: var(--gul);
    font-size: 20px;
  }

  .image-container img {
    transform: none; /* Disable zoom effect on smaller screens */
  }
}
</style>
