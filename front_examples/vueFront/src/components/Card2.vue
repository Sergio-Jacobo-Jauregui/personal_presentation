<template>
  <div class="horizontal-card center-flex background2">
    <h3>Hola!, soy el componente 2</h3>
    <p>Soy una prueba del metodo Mounted</p>
    <p>Cuando este montado veras logs en la consola</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted() {
      this.demostracion1()
      this.demostracion2()
    },
    methods: {    
      demostracion1() {
        console.log('El componente 2 se ha montado!');
      },
      demostracion2() {

      },
    },
  }
</script>

<style scoped>
.background2 {
  background-color: rgba(0, 255, 200, 0.3);
}
</style>
