<template>
  <div class="footer">
    <div>
      El objetivo de esta página es demostrar las funciones basicas de Vue.js, no profundice en el diseño, el repositorio de este proyecto esta en <a class="link-github" href="https://github.com/Sergio-Jacobo-Jauregui/personal_presentation">mi Github</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>


<style scoped>
.footer {
  height: 200px;
  background-color: rgb(0, 70, 46);
  padding: 30px;
}

.footer * {
  color: white;
}
</style>