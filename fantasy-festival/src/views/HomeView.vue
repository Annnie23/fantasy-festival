<template>


<div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="../assets/img/slide1.jpg" alt="Los Angeles" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide2.jpg" alt="Chicago" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide3.jpg" alt="New York" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide4.jpg" alt="New York" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide5.jpg" alt="New York" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide6.jpg" alt="New York" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide7.jpg" alt="New York" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/img/slide8.jpg" alt="New York" class="d-block w-100">
  </div>

</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>



<section class="bg-green">
      <div class="container py-6">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card-home">
              <a href="https://fantasyfestival.dk/">
                <img src="../assets/img/gnist.jpg" alt="" width="auto" height="44">
              </a>
              <div class="card-body">
                <h3 class="text-2xl font-bold">Fantasy Festival</h3>
                <p>Træd ind i det magiske univers, hvor monstre og mystiske væsner bor. Oplev spændende foredrag, fantastiske koncerter, det bedste fantasylitteratur, uhyggelige aktiviteter og som noget helt nyt: Fantasy Quest.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-home">
              <a href="https://www.linkedin.com/in/anne-sophie-nielsen/">
                <img src="../assets/img/sword.png" alt="" width="auto" height="44">
              </a>
              <div class="card-body">
                <h3 class="text-2xl font-bold">Fantasy Quest</h3>
                <p>Follow me on LinkedIn to see much more about my skills, education, and work.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-home">
              <a href="https://www.youtube.com/watch?v=WFMQ-o4lTuY">
                <img src="../assets/img/tickets.png" alt="" width="auto" height="44">
              </a>
              <div class="card-body">
                <h3 class="text-2xl font-bold">Billetter</h3>
                <p>Press play, and let me introduce myself right here in my video CV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
</script>


<style scoped>

.carousel {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.6);
   
  }

  .card-home {
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    text-align: center; 
    align-content: center;
    color: #5c3d89;
    padding: 1rem;
    border-radius: 0px;

  }

  .bg-green {
    margin-top: 100vh;
  }

  @media screen and (max-width: 768px){
    .bg-green {
      margin-top: 50vh;
    }

    /* .carousel{
      display: none;
    } */


    
  }

</style>
