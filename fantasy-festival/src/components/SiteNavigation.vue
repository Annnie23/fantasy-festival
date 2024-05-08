<template>


<header>
        <div class="navbar fixed-top ">
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
        </div>
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
    
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s;
    z-index: 1;
}

.navbar-scrolled{
    background-color: #023a6b;
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



.nav-links li {
    display: inline;
    margin-right: 15px;
}

 @media screen and (max-width: 768px) {
    .navbar-brand {
        display: block;
        text-align: center;
    }
    
 }

</style>