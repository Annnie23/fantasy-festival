<template>

<header>
    <div class="container">
        <h1 class="logo">Your Site</h1>
        <nav>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

  
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
    background-color: #333;
    color: #fff;
    padding: 20px 0;
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
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links li a:hover {
    color: #ffd700; /* Change to desired hover color */
}

</style>