<template>


  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/slide1.jpg" alt="slide" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
          <div class="text-box-left">
            <h3>Welcome to My Website</h3>
            <p>This is the first slide of my carousel.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide2.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide3.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide4.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide5.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide6.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide7.jpg" alt="slide" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/slide8.jpg" alt="slide" class="d-block w-100">
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
              <img src="../assets/img/drage.png" alt="" width="auto" height="70">
            </a>
            <div class="card-body">
              <h3 class="text-2xl font-bold">Fantasy Festival</h3>
              <p>Træd ind i det magiske univers, hvor monstre og mystiske væsner bor. Oplev spændende foredrag,
                fantastiske koncerter, det bedste fantasylitteratur, uhyggelige aktiviteter og som noget helt nyt:
                Fantasy Quest.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-home">
            <a href="https://fantasyfestival.dk/fantasy-quest-esbjerg">
              <img src="../assets/img/program.png" alt="" width="auto" height="70">
            </a>
            <div class="card-body">
              <h3 class="text-2xl font-bold">Fantasy Quest</h3>
              <p>Er du klar til at leve dig ind i en anden verden, en magisk historie, hvor du er helten, der er på en
                "quest" for at overvinde de onde magter og redde hele verden? Så gør dig klar til Fantasy Quest Esbjerg.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-home">
            <a href="https://www.ticketmaster.dk/artist/fantasyfestival-billetter/1233494">
              <img src="../assets/img/quest.png" alt="" width="auto" height="70">
            </a>
            <div class="card-body">
              <h3 class="text-2xl font-bold">Billetter</h3>
              <p>Der er gratis adgang flere forskellige steder, men aktiviteter og foredrag kræver, at du køber et
                aktivitetsarmbånd. Bliv klogere på, hvad der er gratis, hvad du kan bruge aktivitetsarmbåndet til, hvad
                du gør med pladsreservation. </p>
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
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.6);

}

.carousel-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--gul);
  padding: 20px;
  border-radius: 5px;
}

.text-box h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-box p {
  font-size: 16px;
  line-height: 1.5;
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
  color: var(--blåsort);
  padding: 1rem;
  border-radius: 0px;
}

</style>
