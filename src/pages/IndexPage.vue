<template>
  <q-page>
    <div class="full-screen">
      <q-img
        class="bg-blue-7"
        src="icons\medico.jpg"
        style="width: 100%; height: 100%;"
      >
      <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); margin-top: 30%; height: 35%;margin-left: 580px;"
    >
      <q-card-section>
        <div class="text-h6">Digital Card- Cartão de saúde</div>
        <div class="text-subtitle2">by Tatiana Sabino</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); margin-top: 30%; height: 35%;margin-left:160px;"
    >
      <q-card-section>
        <div class="text-h6">Digital Card- Cartão de saúde</div>
        <div class="text-subtitle2">by Tatiana Sabino</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); margin-top: 30%; height: 35%;margin-left: 1000px;"
    >
      <q-card-section>
        <div class="text-h6">Digital Card- Cartão de saúde</div>
        <div class="text-subtitle2">by Tatiana Sabino</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    </q-img>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
