<template>
  <div class="footer-wrapper">
    <img src="../assets/img/footer.png" class="img-fluid image" alt="..." />
    <footer class="footer">
      <section class="py-3 py-md-4 py-xl-7">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-lg-0 justify-content-xl-between">
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget logo">
                <a href="#!">
                <img
                  src="../assets/img/logo.png"
                  alt=""
                  class="img-fluid mb-4"
                  width="175"
                  height="auto"
                />
              </a>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget">
                <h4 class="widget-title mb-3">Hvor og hvornår?</h4>
                <h5 class="widget-title mb-1">Festivallen afholdes:</h5>
                <when class="mb-4">
                  14.-15. september 2024. <br />
                  Lørdag 14. september <br />
                  kl. 10-18. <br />
                  Søndag 15. september <br />
                  kl. 10-16.
                </when>
                <p class="">
                  <a
                    class="link-secondary text-decoration-none"
                    href="https://fantasyfestival.dk/praktisk-info/hvor-og-hvornaar#:~:text=Aktiviteter%20og%20foredrag%20og%C2%A0%20foreg%C3%A5r%C2%A0p%C3%A5"
                    >Se lokalitioner her</a
                  >
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 col-xl-2">
              <div class="widget">
                <h4 class="widget-title mb-4">Informationer</h4>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="https://fantasyfestival.dk/praktisk-info/transport" class="link-secondary text-decoration-none"
                      >Transport</a
                    >
                  </li>
                  <li class="mb-2">
                    <a href="https://fantasyfestival.dk/praktisk-info/overnatning-i-esbjerg" class="link-secondary text-decoration-none"
                      >Overnatning</a
                    >
                  </li>
                  <li class="mb-2">
                    <a href="https://fantasyfestival.dk/praktisk-info/mad-og-drikke" class="link-secondary text-decoration-none"
                      >Mad og drikke</a
                    >
                  </li>
                  <li class="mb-2">
                    <a href="https://fantasyfestival.dk/program-og-aktiviteter/program" class="link-secondary text-decoration-none"
                      >Program til <br />
                      fantasyfestivalen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-lg-3 col-xl-4">
              <div class="widget">
                <h4 class="widget-title mb-4">Oplev Esbjerg</h4>
                <a href="https://oplev.esbjerg.dk/">
                  <img
                    src="../assets/img/oplevesbjerg.png"
                    alt=" Logo"
                    width="175"
                    height="auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="py-3 py-md-4 py-xl-7 border-top border-light-subtle footer-wrapper"
      >
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-md-0 align-items-md-center">
            <div class="col-md-7">
              <div class="copyright text-center text-md-start">
                &copy; 2024. Fantasyfestival Esbjerg.
              </div>
            </div>
            <div class="col-md-5">
              <div class="social-icons-container gap-4 py-6">
                <!-- lokation icon -->
                <a href="https://www.google.com/maps/place/Esbjerg+Hovedbibliotek/@55.4835185,8.4252528,14z/data=!4m10!1m2!2m1!1sesbjerg+bibliotek!3m6!1s0x464b212b84d27037:0x9e9ee79cad51f7ea!8m2!3d55.4694654!4d8.4542328!15sChFlc2JqZXJnIGJpYmxpb3Rla5IBDnB1YmxpY19saWJyYXJ54AEA!16s%2Fg%2F11dzt5qgl1?entry=ttu" class="button-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                    />
                    <path
                      d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                    />
                  </svg>
                </a>
                <!-- Facebook icon -->
                <a href="https://www.facebook.com/fantasyfestivalen" class="button-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                    />
                  </svg>
                </a>
                <!-- instagram icon -->
                <a href="https://www.instagram.com/fantasyfestivalen" class="button-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: -20px !important;
}
when {
  font-size: 1rem;
}

svg{
  width: 30px;
  height: 30px;

}
.social-icons-container {
  display: flex;
  justify-content: flex-end; /* Placerer ikonerne til højre */
  align-items: center; /* Justerer ikonerne lodret i midten */
}

@media (max-width: 767px) {
  .social-icons-container {
    justify-content: center; /* Centrerer ikonerne, når skærmen er smal */
  }
}
.image {
  position: relative;
  top: 50px !important; /* Juster dette tal efter behov for at flytte billedet ned */
  z-index: 0; /* Sætter billedet bag footeren */
}
footer {
  position: relative;
  background-color: var(--blåsort);
  color: var(--gul);
  z-index: 1; /* Make sure footer is below image */
}
footer a {
  color: var(--gul) !important;
}
.logo {
  padding-top: 20px;
}
.border-top {
  border-top-color: rgb(245, 200, 66, 0.5) !important;
}
</style>
