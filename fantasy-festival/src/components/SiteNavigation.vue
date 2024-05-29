<template>
  <header>
    <!-- Navbar starter -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <!-- Logo med RouterLink -->
        <RouterLink to="/" class="navbar-brand">
          <img src="../assets/img/logo.png" alt="Logo" width="150" height="auto" style="pointer-events: none;">
        </RouterLink>
        <!-- Navbar-togglingsknap til mobil -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Indholdet af den sammenklappelige navbar -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- Link til Program -->
            <RouterLink to="/program" class="nav-item program">
              <a class="nav-link" href="#">
                <img src="../assets/img/program2.png" alt="Program" width="auto" height="58">
              </a>
              <span v-if="isScrolled">Program</span> 
            </RouterLink>
            <!-- Link til Quest -->
            <RouterLink to="/quest" class="nav-item quest">
              <a class="nav-link" href="#">
                <img src="../assets/img/program.png" alt="Quest" width="auto" height="58">
              </a>
              <span v-if="isScrolled">Quest</span> 
            </RouterLink>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar slutter -->
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

    /* Eventlytter til scroll */
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        this.isScrolled = true;
      } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
        this.isScrolled = false;
      }

    /*   Hvis navbar er scrollet og sammenklapningen vises */
      if (this.isScrolled && navCollapseEl.classList.contains('show')) {
        anime({
          targets: '.navbar-collapse',
          translateY: '-100%',
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: function(anime) {
            navCollapseEl.classList.remove('show');
            if (window.innerWidth <= 768) {
              navCollapseEl.style.transform = 'translateY(0)';
            }
          }
        });
      }
    });
  }
}
</script>

<style scoped>
/* Styling for navbar */
.navbar { 
    background-color: transparent !important;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.7s !important;
    padding-top: 8px;
}

/* Styling for scrollet navbar */
.navbar.navbar-scrolled {
    background-color: var(--blåsort) !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    max-height: 135px;
}

/* Styling for navbar-brand */
.navbar-brand {
    margin-left: 20px;
    transition: transform 0.7s; 
}

/* Styling for scrollet navbar-brand */
.navbar.navbar-scrolled .navbar-brand {
  transform: scale(0.8); 
}

/* Styling for navbar-navigation */
.navbar-nav {
    margin-left: auto;
}

/* Styling for links */
span {
    color: var(--gul);
    font-size: large;
    text-decoration: none;
}

/* Styling for links */
a {
  text-decoration: none !important;
  padding-top: 0;
}

/* Styling for navbar-items */
.nav-item {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  transition: flex-direction 2s;
  padding: 0 10px;
  cursor: pointer;
  position: relative;
  z-index: 50;
}

/* Styling for hover-effekt på navbar-items */
.nav-item:hover {
  color: var(--gul); 
  transform: scale(1.1) !important; 
}

/* Styling for tekst på navbar-items */
.nav-item span {
  opacity: 1;
  transition: opacity 0.7s, transform 0.7s;
  margin-top: -10px;
}

/* Styling for tekst på navbar-items ved hover */
.nav-item:hover span {
  opacity: 0.7;
}

.navbar-toggler {
  background-color: var(--orange);
}

.navbar-collapse {
  background-color: transparent;
  position: relative;
  padding-right: 10px;
  width: 100%;
}


@media screen and (max-width: 768px) {
   
    .navbar-brand img{
        justify-content: center;
        display: flex;
        width: 100px;
    }

   
  .navbar-collapse .nav-item span,
  .navbar-collapse .nav-item img {
    display: inline-block;
    transition: padding 0s !important; 
    padding-left: 10px;
    padding-top: 10px;
  }

}

 @media (max-width: 767px) {
  .nav-item span {
    margin-top: 0; /* Adjust this value as needed */
  }
}

 @media screen and (max-width: 1100px){
    .nav-item span {
        font-size: medium;
    }
 }
 .navbar-collapse .nav-item span,
  .navbar-collapse .nav-item img {
    display: inline-block;
    transition: padding 0s !important; 
    padding-left: 10px;
    padding-top: 10px;
  }

</style>
