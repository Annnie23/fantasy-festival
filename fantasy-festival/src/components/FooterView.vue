<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>&copy; 2024 Your Company</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
.footer {
  background-image: url('../assets/img/footer.png'); /* Set the background image */
  background-size: 100% 100%; /* Scale the image to cover the entire element */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  color: rgb(189, 54, 54); /* Text color */
  padding: auto; /* Padding */
  height: 600px; /* Adjust this value to match the aspect ratio of your image */
}

@media (max-width: 768px) {
  .footer {
    height: 400px;
  }
}

/* Adjust the height for small screens */
@media (max-width: 576px) {
  .footer {
    height: 200px;
  }
}
</style>
