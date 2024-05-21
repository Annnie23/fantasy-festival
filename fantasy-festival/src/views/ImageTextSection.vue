<template>
  <div class="container">
    <div class="section">
      <div class="row justify-content-evenly">
        <div class="col-lg-6">
          <img
            class="img-fluid img-thumbnail"
            :src="section.image"
            alt="Event Image"
          />
        </div>
        <div class="col-lg-6">
          <div class="section info text-card">
            <h3 v-if="section.h3">{{ section.h3 }}</h3>
            <h4>{{ section.title }}</h4>
            <p>{{ section.description }}</p>
            <h6 v-if="section.h6">{{ section.h6 }}</h6>
            <a :href="section.link" class="button-link">
              <button>{{ section.linkText }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: Object
  }
};
</script>

<style scoped>
.container {
  margin: 1rem 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col-lg-6 {
  flex: 1;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.text-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h3, h4, h6 {
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

.button-link {
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
