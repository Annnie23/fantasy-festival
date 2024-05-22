<template>
  <img src="../assets/img/footer.png" class="img-fluid" alt="...">
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="footer-card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <div class="card-foot" style="width: 30%;">
                <div class="card-header"></div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a href="https://oplev.esbjerg.dk/">Oplev Esbjerg</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://fantasyfestival.dk/praktisk-info/hvor-og-hvornaar">Åbningstider</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://fantasyfestival.dk/program-og-aktiviteter/program">Se program</a>
                  </li>
                </ul>
              </div>

              <div class="card-foot" style="width: 30%;">
                <div class="card-header"></div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a href="https://fantasyfestival.dk/praktisk-info/overnatning-i-esbjerg">Overnatning</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://fantasyfestival.dk/praktisk-info/mad-og-drikke">Mad og drikke</a>
                  </li>
                  <li class="list-group-item">
                    <a href="https://fantasyfestival.dk/praktisk-info/transport">Transport</a>
                  </li>
                </ul>
              </div>

              <div class="card-foot" style="width: 30%;">
                <div class="card-header"></div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a href="https://www.google.com/maps/place/Esbjerg+Hovedbibliotek/@55.4835185,8.4252528,14z/data=!4m10!1m2!2m1!1sesbjerg+bibliotek!3m6!1s0x464b212b84d27037:0x9e9ee79cad51f7ea!8m2!3d55.4694654!4d8.4542328!15sChFlc2JqZXJnIGJpYmxpb3Rla5IBDnB1YmxpY19saWJyYXJ54AEA!16s%2Fg%2F11dzt5qgl1?entry=ttu">
                    <img src="../assets/img/kort.png" alt="Logo" width="34" height="auto">
                  </a>

                  </li>
                  <li class="list-group-item">
                    <a href="https://www.instagram.com/fantasyfestivalen">
                    <img src="../assets/img/instagram.png" alt="Logo" width="34" height="auto" >
                  </a>
                  </li>

                  <li class="list-group-item">
                    <a href="https://www.facebook.com/fantasyfestivalen">
                    <img src="../assets/img/facebook.png" alt="Logo" width="34" height="auto" >
                  </a>
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
export default {
}
</script>

<style scoped>
.footer {
  background-color: var(--blåsort);
  padding-top: 70px; 
  padding-bottom: 10px;
  margin-top: -24px; 
}

.footer a {
  color: var(--gul);
  margin: 0;
  font-size: 18px; 
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer p {
  color: var(--gul);
  margin: 0;
  font-size: 16px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  border-radius: 0px;
}

.list-group-item {
  background-color: transparent;
  font-size: 20px;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0px;
  transition: transform 0.3s ease-in-out;
}

.list-group-item:hover {
  transform: scale(1.08);
}


.card-footer {
  color: var(--gul) !important;
  font-size: medium;
  padding: 1rem;
}

@media (max-width: 768px) {
  .card-body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 600px;
    align-items: center;
  
  }
  .footer a {
    font-size: 20px;
  }
}
</style>
