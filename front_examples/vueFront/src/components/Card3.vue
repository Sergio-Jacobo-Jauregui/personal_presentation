<template>
  <div class="horizontal-card center-flex background3">
    <h3>Soy el componente 3, recibo props del Componente 1</h3>

    <div class="contenedor-funciones">
      <p v-if="mostrarFuncion == ''">Selecciona algo del componente 1</p>
  
       <!-- div para methos -->
      <div v-if="mostrarFuncion == 'methods'">
        <button @click="sumNum">Aumentar num</button>
        <p>{{ num }}</p>
      </div>
      
      <!-- div para v-model -->
      <div v-if="mostrarFuncion == 'v-model'">
        <input v-model="text" type="text" placeholder="Escribe algo..." class="custom-input">
        <p>Texto del input: <span style="font-weight: bold;">{{ text }}</span></p>
      </div>
  
      <!-- div para v-show -->
      <div v-if="mostrarFuncion == 'v-show'">
        <p>v-show funciona con el contenido existiendo pero no mostrado, diferente del v-if donde no existe</p>
        <button @click="switchShow" class="custom-button">
          {{ isShowActive ? 'No mostrar' : 'Mostrar' }}
        </button>
        <div v-show="isShowActive">
          <p>Siempre existo pero a veces no me ves</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['mostrarFuncion'],
    data() {
      return {
        num: 0,
        text: '',
        isShowActive: false,
      }
    },
    methods: {
      switchShow() {
        this.isShowActive = !this.isShowActive
      },
      sumNum() {
        this.num = ++this.num
      },
    },
  }
</script>

<style scoped>
.background3 {
  background-color: rgba(183, 0, 255, 0.3);
}

.contenedor-funciones {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.contenedor-funciones > div {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.custom-button:hover {
  background-color: rgba(183, 0, 255, 0.3);
}
</style>
