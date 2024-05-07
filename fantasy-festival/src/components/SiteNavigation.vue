<template>

<div class="sticky-top">
<header>
  

    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="../assets/img/logo.png" alt="Bootstrap" width="auto" height="100">
        </a>
        <nav>
            <ul class="nav-links">
                <li>
                    <img src="../assets/img/calendar.png" alt="Bootstrap" width="auto" height="44">
                </li>
                <li>
                    <img src="../assets/img/heart.png" alt="Bootstrap" width="auto" height="44">
                </li>
                <li>
                    <img src="../assets/img/sword.png" alt="Bootstrap" width="auto" height="44">
                </li>
                <li>
                    <img src="../assets/img/tickets.png" alt="Bootstrap" width="auto" height="44">
                </li>
            </ul>
        </nav>
    </div>
</header>
</div>
  
</template>

<script>

</script>

<style scoped>

/* Reset some default styles for the page */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

/* Styling for the header section */
header {
    background-color: #023a6b;
    color: #f2b613;
    padding: 20px 0;
    z-index: 1000;
}

.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-links li {
    display: inline;
    margin-right: 15px;
}

.nav-links li a {
    color: #f2b613;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links li a:hover {
    color: #ffd700; /* Change to desired hover color */
}

</style>