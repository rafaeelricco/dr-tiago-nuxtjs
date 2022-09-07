<template>
  <div class="TitleHome">
    <div class="title">
      <h1 class="titleText">Qualidade e sofisticação em um só lugar.</h1>
      <p class="titlePargh">
        Conheça mais sobre meu trabalho e carreira profissional
        <b>clicando no botão abaixo</b>.
      </p>
    </div>
    <div class="buttons">
      <ButtonExplorar />
      <GhostButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TitleHome {
  margin: 4rem 0 0 0;
  padding: 0rem 8rem 0rem 0rem;
  @include screen("small") {
    padding: 0;
    margin: 0;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
}
.titleText {
  font-size: 3rem;
  line-height: 3rem;
  margin: 1.618rem 0 1rem 0;
  font-family: Hellix Bold;
  @include screen("infinity") {
    font-size: 4rem;
    line-height: 4rem;
  }
}
.title {
  display: grid;
  justify-items: start;
  align-content: center;
}

.buttons {
  display: grid;
  grid-template-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 0.618rem;
}

.titlePargh {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  color: #c1c1c1;
  font-family: Hellix Normal;
  @include screen("small") {
    font-size: 1rem;
  }
}
</style>
