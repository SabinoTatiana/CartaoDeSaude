<template>
  <q-page class="container" padding>
    <q-form class="row justify-center">
      <p class="text-h3 text-center text-blue-7">Login Paciente</p>
      <div class="row justify-center" style="max-width: 400px">

        <p class="text-h6 text-center">Informe seu nome:</p>
        <q-input v-model="text" label="Nome" :dense="dense"></q-input>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    // Variáveis reativas
    const text = ref('')
    const dense = ref(false)

    return {
      text,
      dense
    }
  }
}
</script>
