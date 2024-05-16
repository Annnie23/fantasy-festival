<template>
    <img src="../assets/img/slide1.jpg" alt="">

    <div class="section py-6">
        <div class="container py-6">
            <h1 class="--gul">Program</h1>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card-home">
                        <a href="https://fantasyfestival.dk/">
                            <img src="../assets/img/gnist.jpg" alt="" width="auto" height="44">
                        </a>
                        <h2>Velkommen til Fantasy
                            Festival</h2>
                        <p>Vi glæder os til at byde dig velkommen til en verden fyldt med magi, mystik og eventyr. Vi har
                            sammensat et program, der byder på noget for enhver smag. Vi glæder os til at se dig!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
/* Importer base.css */
@import '../assets/base.css';

/* Brug de definerede variabler og klasser */
.--gul {
    color: var(--gul);
}
</style>
