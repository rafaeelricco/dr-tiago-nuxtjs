<template>
  <div class="Tiago">
    <img
      class="tiago-picture"
      src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1652049684/AVIF%20Img/tiago_swg5n5_oshhtq.webp"
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
