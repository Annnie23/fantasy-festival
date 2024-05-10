<template>


<header>

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.png" alt="Bootstrap" width="auto" height="44">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://esbjergfestuge.dk/program">
            <img src="../assets/img/calendar.png" alt="Bootstrap" width="auto" height="44">
          </a>
          <span v-if="isScrolled">Kalender</span>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://esbjergfestuge.dk/program?minefavoritter=true">
            <img src="../assets/img/heart.png" alt="Bootstrap" width="auto" height="44">
          </a>
          <span v-if="isScrolled">Favoritter</span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fantasyfestival.dk/">
            <img src="../assets/img/sword.png" alt="Bootstrap" width="auto" height="44">
          </a>
          <span v-if="isScrolled">Quest</span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fantasyfestival.dk/fantasy-quest-esbjerg">
            <img src="../assets/img/tickets.png" alt="Bootstrap" width="auto" height="44">
            </a>
            <span v-if="isScrolled">Billetter</span>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <!-- <div class="navbar fixed-top ">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" alt="Bootstrap" width="auto" height="100">
            </a>
            <nav class="content">
                <ul class="nav-links">
                    <li>
                        <a href="https://esbjergfestuge.dk/program">
                            <img src="../assets/img/calendar.png" alt="Bootstrap" width="auto" height="44">
                        </a>
                        <span v-if="isScrolled">Kalender</span>
                    </li>
                    <li>
                        <a href="https://esbjergfestuge.dk/program?minefavoritter=true">
                            <img src="../assets/img/heart.png" alt="Bootstrap" width="auto" height="44">
                        </a>
                        <span v-if="isScrolled">Favoritter</span>
                    </li>
                    <li>
                        <a href="https://fantasyfestival.dk/">
                            <img src="../assets/img/sword.png" alt="Bootstrap" width="auto" height="44">
                        </a>
                        <span v-if="isScrolled">Quest</span>
                    </li>
                    <li>
                        <a href="https://fantasyfestival.dk/fantasy-quest-esbjerg">
                            <img src="../assets/img/tickets.png" alt="Bootstrap" width="auto" height="44">
                        </a>
                        <span v-if="isScrolled">Billetter</span>
                    </li>
                </ul>
            </nav>
        </div> -->
</header>

  
</template>

<script>

export default {
    data() {
        return {
            isScrolled: false
        }
    },
    mounted() {
        const navE1 = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if(window.scrollY >= 56){
                navE1.classList.add('navbar-scrolled');
                this.isScrolled = true;
            } else if(window.scrollY < 56){
                navE1.classList.remove('navbar-scrolled');
                this.isScrolled = false;
            }
        });
    }
}


</script>

<style scoped>


.navbar { 
    background-color: transparent !important;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s !important;
    z-index: 1;
}

.navbar.navbar-scrolled{
    background-color: #062540 !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
    margin-left: 20px;
}



.content {
    margin-right: 20px;
}

span{
    color: #f2b613;
    font-size: 18px;
    padding-left: 10px;
}



.nav-item li {
    display: inline;
    margin-right: 15px;
}

@media screen and (max-width: 768px) {
    .navbar-brand {
        justify-content: center;
    }
    
 } 

</style>