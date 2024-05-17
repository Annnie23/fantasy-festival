<template>


<header>

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">
        <img src="../assets/img/logo.png" alt="Logo" width="150" height="auto" style="pointer-events: none;">
      </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <RouterLink to="/" class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <img src="../assets/img/hjem.png" alt="Forside" width="auto" height="80">
          </a>
          <span v-if="isScrolled">Forside</span>
        </RouterLink>

        <RouterLink to="/program" class="nav-item">
          <a class="nav-link" href="#">
            <img src="../assets/img/program.png" alt="Program" width="auto" height="80">
          </a>
          <span v-if="isScrolled">Program</span>
        </RouterLink>
       
          <RouterLink to="/quest" class="nav-item">
          <a class="nav-link" href="#">
            <img src="../assets/img/quest.png" alt="Quest" width="auto" height="80">
          </a>
          <span v-if="isScrolled">Quest</span>
        </RouterLink>
        
        <li class="nav-item">
          <a class="nav-link" href="https://fantasyfestival.dk/">
            <img src="../assets/img/drage.png" alt="Festival" width="auto" height="80">
            </a>
            <span v-if="isScrolled">Fantasy Festival</span>
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
    background-color: var(--blåsort) !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
    margin-left: 20px;
}

.navbar-nav{
    margin-left: auto;
}

span{
    color: var(--gul);
    font-size: 25px;
    padding-left: 15px;
    text-decoration: none;
}

a {
  text-decoration: none !important;

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
  background-color: var(--orange);
}

.navbar-collapse {
  background-color: transparent;
  position: absolute;
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
    transition: padding 0s !important; 
  }
    
 } 

</style>