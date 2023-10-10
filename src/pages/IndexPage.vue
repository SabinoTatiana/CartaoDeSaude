<template>
  <q-page class="container" padding>
    <div class="full-screen">
      <q-img

      src="icons\medico.jpg"
        style="width: 100%; height: 100%; background: radial-gradient(circle, #35a2ff 50%, #fde50a 100%); margin-top: 30%; "
      >
<q-div>

<q-row>
<q-linear-progress query style="margin-top: 30%;"/>

<q-linear-progress indeterminate color="warning" class="q-mt-sm center"  />
<h3 class="text-center text-white " style="background: radial-gradient(circle, #2990eb 10%, #f7e226 100%);">SabinoCare Card - Cartão de saúde</h3>
<q-linear-progress indeterminate rounded color="blue" class="q-mt-sm" />
<q-linear-progress query color="warning" class="q-mt-sm"  />
</q-row>

</q-div>



  <!--  <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #f3e524 100%); margin-top: 10%; height: 35%;margin-left: 100px; width: 30%;"
    >
      <q-card-section>
        <div class="text-h6">Digital Card- Cartão de saúde</div>
        <div class="text-subtitle2">by Tatiana Sabino</div>
        <q-img class="bamber-5"
        src="icons\banana.jpg"
        style="width: 100%; height: 100%;"
      >>

        </q-img>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card> -->
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
