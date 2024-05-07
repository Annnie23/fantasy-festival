<template>

<main>
    <div class="container">
        <section>
            <h2>About Us</h2>
            <p>This is a brief description of our company.</p>
        </section>

        <section>
            <h2>Our Services</h2>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </section>

        <section>
            <h2>Contact Us</h2>
            <p>For inquiries, please email us at info@example.com.</p>
        </section>
    </div>
</main>

</template>

<script setup>

</script>
<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

/* Style the main content */
main {
    padding: 20px 0;
}

section {
    margin-bottom: 30px;
}

section h2 {
    color: #333;
}

</style>