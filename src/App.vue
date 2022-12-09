<template>
  <div class="movie-app__container">
    <RouterView />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.movie-app__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    background-color: #111;
    min-height: 100vh;
    color: red;
    font-family: 'Bebas Neue', cursive;
    position: relative;
}
</style>