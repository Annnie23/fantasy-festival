import css from '../assets/main.css'
<template>
  <img src="../assets/img/footer.png" class="img-fluid" alt="...">
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="footer-card text-center">

<div class="card-header">
</div>

<div class="card-body">
<div class="card-foot" style="width: 18rem;">
<div class="card-header"></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> 
      <a href="https://oplev.esbjerg.dk/">Oplev Esbjerg</a> </li>
    <li class="list-group-item">
      <a href="https://fantasyfestival.dk/praktisk-info/hvor-og-hvornaar">Åbningstider</a> </li>
    <li class="list-group-item">
      <a href="https://fantasyfestival.dk/program-og-aktiviteter/program">Se program</a>
    </li>
  </ul>
</div>

<div class="card-foot" style="width: 18rem;">
<div class="card-header"></div>
<ul class="list-group list-group-flush">
    <li class="list-group-item"> 
      <a href="https://fantasyfestival.dk/praktisk-info/overnatning-i-esbjerg">Overnatning</a> </li>
    <li class="list-group-item">
      <a href="https://fantasyfestival.dk/praktisk-info/mad-og-drikke">Mad og drikke</a> </li>
    <li class="list-group-item">
      <a href="https://fantasyfestival.dk/praktisk-info/transport">Transport</a>
    </li>
  </ul>
</div>

<div class="card-foot" style="width: 18rem;">
<div class="card-header"></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <img src="../assets/img/kort.png" alt="Logo" width="34" height="auto" style="pointer-events: none;">
      <br>
      <a href="https://www.google.com/maps/place/Esbjerg+Hovedbibliotek/@55.4835185,8.4252528,14z/data=!4m10!1m2!2m1!1sesbjerg+bibliotek!3m6!1s0x464b212b84d27037:0x9e9ee79cad51f7ea!8m2!3d55.4694654!4d8.4542328!15sChFlc2JqZXJnIGJpYmxpb3Rla5IBDnB1YmxpY19saWJyYXJ54AEA!16s%2Fg%2F11dzt5qgl1?entry=ttu"></a>
    </li>
    <li class="list-group-item">
      <img src="../assets/img/instagram.png" alt="Logo" width="34" height="auto" style="pointer-events: none;">
      <br>
      <a href="https://www.instagram.com/fantasyfestivalen"></a>
    </li>
    <li class="list-group-item">
      <img src="../assets/img/facebook.png" alt="Logo" width="34" height="auto" style="pointer-events: none;">
      <br>
      <a href="https://www.facebook.com/fantasyfestivalen"></a>
    </li>
  </ul>
</div>
</div>

<div class="card-footer text-body-secondary">
  2024 Copyright: https://fantasyfestival.dk/
</div>

</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
.footer {
  background-color: #023a6b;
  padding: 200px 0;
}

.footer a {
  color: var(--gul);
  margin: 0;
  font-size: 16px;
  text-decoration: none;  /* Remove underline from all footer links */
}

.footer a:hover {
  text-decoration: underline;  /* Optional: Add underline on hover for better UX */
}
.footer p {
  color: var(--gul);
  margin: 0;
  font-size: 16px;
}

.card-body {
    display: flex;
    justify-content: space-evenly;
    border-radius: 0px;
}

.list-group-item {
    background-color: transparent;
    font-size: medium;
    border: none;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0px;
    transition: transform 0.3s ease-in-out;
}

.list-group-item:hover {
    transform: scale(1.08);
}

.footer-card {
    /* background-color: #1f2024; */
    /* color: #004f4d; */
    font-size: x-large;
    border-radius: 0px;
}

.card-header {
    font-size: 1.2em;
}

.card-footer{
    color: #c7c7c7 !important;
    font-size: small;
}

@media (max-width: 768px) {
  .card-body {
    flex-direction: column;
    align-items: center;
  }
}
  
</style>
