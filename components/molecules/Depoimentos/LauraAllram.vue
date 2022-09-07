<template>
  <div class="Paciente">
    <Picture
      image_src="https://luseedmi.sirv.com/Images/laura.png"
      image_desc="Laura Allram"
    />
    <h1 class="NomePasciente">Laura Allram</h1>
    <p class="Relato">
      “Agradeço e parabenizo o Dr. Tiago pelo seu trabalho, pois, quando
      realizei minhas extrações de siso, se mostrou muito experiente e educado,
      me deixando ciente de todos os processos, além de ter me atendido de forma
      muito agradável!”.
    </p>
  </div>
</template>

<script lang="ts">
import Picture from './Avatar.vue'

export default {
  components: {
    Picture
  }
}
</script>
