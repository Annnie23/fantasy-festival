<template>
    <div class="container py-6">
        <img src="../assets/img/slide1.jpg" class="img-fluid head" alt="Responsive image"></img>
    </div>

    <h1 class="justify-content">program</h1>

    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/img/gnist.jpg" class="img-fluid img-thumbnail rounded" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.head{
    height: auto;
    width: fit-content;
}

</style>