<template>
    <div class="container">
      <div class="section">
        <div class="tekst" v-html="section.content"></div>
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
  
  .tekst {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  p {
    margin: 0.5rem 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0.5rem 0;
  }
  
  strong {
    font-weight: bold;
  }
  </style>
  