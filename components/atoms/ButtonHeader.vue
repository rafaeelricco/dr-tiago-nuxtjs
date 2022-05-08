<template>
  <div class="LayoutButton">
    <vs-button id="vs-button" class="ButtonVisita">
      <a
        class="AgVisita"
        href="https://www.instagram.com/tiagobucomaxilo.odt/?hl=pt-br"
      >
        Agende uma visita
      </a>
      <svg
        class="SetaSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="#FFFF"
          d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM502.6 9.367C496.8 3.578 488.8 0 480 0h-160c-17.67 0-31.1 14.32-31.1 31.1c0 17.67 14.32 31.1 31.99 31.1h82.75L178.7 290.7c-12.5 12.5-12.5 32.76 0 45.26C191.2 348.5 211.5 348.5 224 336l224-226.8V192c0 17.67 14.33 31.1 31.1 31.1S512 209.7 512 192V31.1C512 23.16 508.4 15.16 502.6 9.367z"
        />
      </svg>
    </vs-button>
  </div>
</template>
<style>
.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content {
  -webkit-transform: translate(-100%);
          transform: translate(-100%);
}
.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate {
  -webkit-transform: translate(0%);
          transform: translate(0%);
}
.LayoutButton {
  display: grid;
}

.AgVisita {
  font-family: Hellix Medium;
  text-decoration: none;
  font-size: 0.8rem;
  color: #ffff;
}

#vs-button {
  padding: 0.1rem;
  background: linear-gradient(
    90deg,
    #3b8d9f 0%,#52adc1 100%
  );
  color: rgba(255, 255, 255, 1);
}

.SetaSvg {
  margin: 0.1rem 0.1rem 0.1rem 0.4rem;
  display: grid;
  width: 0.8rem;
  height: auto;
}
</style>
