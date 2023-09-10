<template>
  <q-page class="conteiner" padding>
   <q-form class="row justify-center">
     <p class="text-h3 text-center text-blue-7 ">Login gestao</p>

     <div class="col-12 col-sm-6" style="margin-top: 20%;" >
        <q-input label="Utilizador" v-model="Utilizador"  lazy-rules
  :rules="[val => val && val.length > 0 || 'Preencha o campo']" />
      </div>
   </q-form>
  </q-page>
</template>

<script>

</script>
