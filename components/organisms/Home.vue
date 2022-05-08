<template>
  <Container>
    <div class="Home" id="home">
      <TitleHome />
      <Tiago />
    </div>
    <ToTop/>
  </Container>
</template>

<style lang="scss" scoped>
.Home {
  display: grid;
  grid-auto-flow: column;
  @include screen('medium') {
    grid-auto-flow: dense;
  }
}
</style>
