<template>
  <header>
    <ul class="lista-menu">
      <a href="">
        <div class="menu-botones-izq">
          Volver al Inicio
        </div>
      </a>
      <div class="menu-botones-derecha">
        <a href=""><li>Este es</li></a>
        <a href=""><li>un ejemplo</li></a>
        <a href=""><li>de Menu</li></a>
      </div>
    </ul>
  </header>
  <div class="container-espacio"></div>
</template>

<script>
  export default {
    name: 'Menu',
  }
</script>


<style scoped>
header {
  padding: 10px;
  background-color: hsla(160, 100%, 37%, 1);
  height: 60px;
  width: 100%;
  color: rgb(255, 255, 255);
  position: fixed;
}

header * {
  font-weight: 600;
  font-size: 16px;
}

.lista-menu {
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: space-between;
}

.menu-botones-izq {
  margin-left: 20px;
}

.menu-botones-derecha {
  display: flex;
  gap: 55px;
  margin-right: 20px;
}

.container-espacio {
  height: 60px;
  width: 100%;
}
</style>