<template>
  <div class="card center-flex background1" style="width: 50%;">
    <h3>Mucho gusto, soy el componente 1</h3>
    <p>Tengo responsividad, aqui hay una demostracion de las funciones basicas de Vue:</p>

    <select v-model="mostrarFuncion" name="" class="custom-select">
      <option value="v-model">Probar v-model</option>
      <option value="v-show">Probar v-show</option>
      <option value="methods">Probar Funciones (methods)</option>
    </select>

    <br>
    <br>

    <div style="display: flex;flex-direction: column;">
      <p>Probemos tambien montando un componente</p>
      <button @click="switchComponente2" class="custom-button">
        {{isCard2Mounted ? 'Desmontar componente 2' : 'Montar componente 2'}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card1',
    data() {
      return {
        mostrarFuncion: '',
        isCard2Mounted: false,
        card2MountedCount: 0,
      }
    },
    methods: {
      switchComponente2() {
        this.card2MountedCount = ++this.card2MountedCount
        if (this.card2MountedCount == 10) {
          console.log('!!!!!! Has montado/desmontado el componente 10 veces, el componente se ha mareado !!!!!!');
        }

        this.isCard2Mounted = !this.isCard2Mounted
        this.$emit('montarCard2');
        if (!this.isCard2Mounted) {
          console.log('Desmontaste al pobre componente 2 :c');
        }
      },
    },
    watch: {
      mostrarFuncion(newValue, oldValue) {
        this.$emit('changeFunction', newValue)
      }
    }
  }
</script>

<style scoped>
.background1 {
  background-color: rgba(0, 255, 55, 0.3);
}

.custom-button:hover {
  background-color: rgba(0, 255, 55, 0.3);
}
</style>
