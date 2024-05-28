
<template>
  <img src="../assets/img/footer.png" class="img-fluid" alt="..." />
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="flex flex-row gap-4">
            <a href="">
              <h5>
                Oplev Esbjerg
              </h5>
            </a>
            <a href="">
              <h5>
                Hvor og hvornår
              </h5>
            </a>
            <a href="">
              <h5>
                Se program
              </h5>
            </a>
          </div>
        </div>
      </div>
      </div>
  </footer>
</template>
<script>
export default {};
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
    flex-direction: row;
    flex-wrap: nowrap;
    max-height: 600px;
    align-items: center;
  }
  .footer a {
    font-size: 15px;
  }
  .footer p {
    font-size: 14px;
  }
}
</style>
