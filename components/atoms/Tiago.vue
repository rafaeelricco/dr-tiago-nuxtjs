<template>
  <div class="Tiago">
    <img
      class="tiago-picture"
      src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1651923694/Img/tiago_swg5n5.png"
      alt="Tiago Machado de Souza"
    />
  </div>
</template>

<style lang="scss" scoped>
.Tiago {
  display: grid;
  justify-items: center;
}
img {
  margin: 1rem 0;
  width: 20rem;
  height: auto;
  @include screen("infinity") {
    width: 30rem;
  }
  @include screen("small") {
    margin-top: 2rem;
  }
}
</style>
