<template>
  <div class="Paciente">
    <Picture
      image_src="https://luseedmi.sirv.com/Images/ana-paula.jpeg"
      image_desc="Ana Paula Alberto"
    />
    <h2 class="NomePasciente">Ana Paula Alberto</h2>
    <p class="Relato">
      “Excelente profissional. Muito dedicado e atencioso em todos os pontos.
      Tive acompanhamento pós-operatório, onde obtive resultados positivos com o
      tratamento. Grata pela atenção e profissionalismo”.
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
