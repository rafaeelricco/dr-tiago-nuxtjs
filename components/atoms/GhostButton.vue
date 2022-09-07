<template>
  <div class="GhostBtn">
    <vs-button id="ghost-vs" class="ghost-button">
      <a id="ghost" href="#footer">Entre em contato</a>
    </vs-button>
  </div>
</template>
<style lang="scss" scoped>
#ghost-vs:hover {
  -webkit-box-shadow: 0px 10px 20px -10px #d4d4d4 !important;
  box-shadow: 0px 10px 20px -10px #d4d4d4 !important;
  -webkit-transform: translate(0, -3px);
  transform: translate(0, -3px);
}
#ghost {
  text-decoration: none;
  font-size: 1rem;
  font-weight: medium;
  color: #b5b5b5;
  @include screen("medium") {
    font-size: 1rem;
  }
}
.ghost-button {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: Hellix Medium;
  background-color: #ffff;
  width: 10rem;
  height: 2.3rem;
  border-radius: 0.6rem;
  border-style: solid;
  border-color: #d4d4d4;
  border-width: 1px;
}
</style>
