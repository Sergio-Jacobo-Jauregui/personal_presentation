<template>
  <div class="container">
    <div class="content">
      <Card1 @montarCard2="montarCard2" @changeFunction="changeFunction"/>
      <div class="car2-card3-container">
        <Card3 :mostrarFuncion="mostrarFuncion"/>
        <Card2 v-if="isCard2mounted" />
      </div>
    </div>
  </div>
</template>

<script>
  import Card1 from './Card1.vue'
  import Card2 from './Card2.vue'
  import Card3 from './Card3.vue'

  export default {
    name: 'Home',
    components: {Card1, Card2, Card3},
    data() {
      return {
        isCard2mounted: false,
        mostrarFuncion: '',
      }
    },
    methods: {
      montarCard2() {
        this.isCard2mounted = !this.isCard2mounted
      },
      changeFunction(value) {
        console.log('value', value);
        this.mostrarFuncion = value
      },
    },
  }
</script>

<style scoped>
.container {
  height: 85vh;
  width: 100%;
  padding: 0 100px;
}

.content {
  padding: 25px;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 30px
}

.car2-card3-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
}
</style>
