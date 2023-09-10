<template>
  <div class="q-pa-md">
    <q-input v-model="text" label="Nome" :dense="dense"></q-input>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
  
    const text = ref('')
    const dense = ref(false)

    return {
      text,
      dense
    }
  }
}
</script>
