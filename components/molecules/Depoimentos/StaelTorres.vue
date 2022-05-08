<template>
  <div class="Paciente">
    <Picture
      image_src="https://luseedmi.sirv.com/Images/stael.png"
      image_desc="Stael Torres Amaral"
    />
    <h2 class="NomePasciente">Stael Torres Amaral</h2>
    <p class="Relato">
      "Satisfeitíssima com o resultado da lipo de papada. Procedimento muito
      tranquilo de fazer no consultório odontológico. Excelente atendimento,
      ambiente agradável e, o mais importante: profissional altamente
      qualificado. Nota 10”.
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
