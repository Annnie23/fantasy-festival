<template>
  <link
    rel="stylesheet"
    href="../assets/main.css"
    type="text/css"
    charset="utf-8"
  />
  <img src="../assets/img/footer.png" class="img-fluid img-footer" alt="..." />


  <footer class="d-flex flex-wrap justify-content align-items-center">
    <div class="col-md-4 d-flex align-items-center">
      <a href="">
        <img src="../assets/img/gnist.jpg" class="icon" width="30" height="24" alt="" />
      </a>
    </div>
  </footer>
  <div>
    <footer class="d-flex flex-wrap justify-content-between align-items-center">
  <div class="col-md-4 d-flex align-items-center">
    <span class="mb-3 mb-md-0 text-body-secondary">
      <p class="text-center">
        ©2024 Copyright: https://fantasyfestival.dk/
      </p>
    </span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
  </ul>
</footer>

  </div>
</template>

<script setup>

</script>

<style scoped>
footer{
  background-color: var(--blåsort);
  color: var(--gul);
}

.img-footer{
  padding-bottom: -10px;
}
</style>