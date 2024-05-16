@import
<template>


<header>

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">
        <img src="../assets/img/logo.png" alt="Bootstrap" width="50" height="auto" style="pointer-events: none;">
      </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://esbjergfestuge.dk/program">
            <img src="../assets/img/calendar.png" alt="Bootstrap" width="auto" height="44">
          </a>
          <span v-if="isScrolled">Program</span>

        </li>
        <RouterLink to="/program" class="nav-item">
          <a class="nav-link" href="https://esbjergfestuge.dk/program?minefavoritter=true">
            <img src="../assets/img/heart.png" alt="Bootstrap" width="auto" height="44">
          </a>
          <span v-if="isScrolled">Aktiviteter</span>
        </RouterLink>
       
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
    const navEl = document.querySelector('.navbar');
    const navCollapseEl = document.querySelector('.navbar-collapse');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        this.isScrolled = true;
      } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
        this.isScrolled = false;
      }

      if (this.isScrolled && navCollapseEl.classList.contains('show')) {
        anime({
          targets: '.navbar-collapse',
          translateY: '-100%',
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: function(anime) {
            navCollapseEl.classList.remove('show');
            if (window.innerWidth <= 768) { // Add this condition
                navCollapseEl.style.transform = 'translateY(0)'; // Set translateY to its initial value
          }
            }
        });
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
    transition: all 0.7s !important;
    z-index: 1;
}

.navbar.navbar-scrolled{
    background-color: #023a6b !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
    margin-left: 20px;
}

.navbar-nav{
    margin-left: auto;
}

span{
    color: #f2b613;
    font-size: 15px;
    padding-left: 10px;
}

.nav-item {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  transition: flex-direction 1s;
}

.nav-item span {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.7s, transform 0.7s;
}

.nav-item:hover span {
  opacity: 0.7;
  transform: translateX(-10px);
}

.navbar-toggler {
  background-color: #f2b613;
}

.navbar-collapse {
  background-color: transparent;
  position: absolute;
  /* top: 100%; */
  width: 100%;
  padding-right: 24px;
}



@media screen and (max-width: 768px) {
    .navbar-brand {
        justify-content: center;
    }

    .navbar-collapse{
        top: 56px;
    }
    .navbar-collapse .nav-item span,
  .navbar-collapse .nav-item img {
    display: inline-block;
    /* padding-right: 20px !important; Add !important */
    transition: padding 0s !important; /* Add !important */
  }
    
 } 

</style>