<template>
    <div>
      <!-- Your main content goes here -->
      
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2024 Your Website</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </template>
  

<script>

</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #f8f9fa;
  color: black;
  text-align: center;
  padding: 20px 0; /* Add padding for better spacing */
  position: fixed;
  bottom: 0; /* Position the footer at the bottom */
  left: 0;
}

.footer-content {
  max-width: 960px; /* Limit the width of footer content */
  margin: 0 auto; /* Center align content */
}

.footer ul {
  list-style: none; /* Remove default list styles */
  padding: 0;
}

.footer ul li {
  display: inline-block;
  margin-right: 10px;
}

.footer ul li:last-child {
  margin-right: 0;
}

.footer ul li a {
  color: black;
  text-decoration: none;
}
</style>
