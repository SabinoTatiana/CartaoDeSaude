<template>
  <q-page class="container" padding>
    <q-form @submit="onSubmit" class="login-form" >
      <div class="q-pa-md"
      >
        <p class="text-h4 text-center text-blue-10"
        style="background: radial-gradient(circle, #36aaec 0%, #f0b208 100%);max-width: 900px"

        >Cadastro do Paciente</p>

        <q-row justify="center" align="center" >
          <q-col sm="12" md="6">
            <q-input
            standout="bg-amber-5 text-white"
              icon="event"
              filled
              v-model="name"
              label="Digite o nome da crianca*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '']"
            />
            <q-input
            standout="bg-amber-5 text-white"
              icon="event"
              filled
              v-model="apelido"
              label="Digite o apelido*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '']"
            />

            <q-input
            standout="bg-amber-5 text-white"
              icon="event"
              filled
              v-model="Nome"
              label="Nome do Responsavel*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '']"
            />

            <q-input
            filled
            mask="date"
            label="Data de Nascimento"
            >

            <q-icon name="event" class="cursor-pointer" size="50px" color="amber-5">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
          </q-input>

            <q-input
            standout="bg-amber-5 text-white"
              filled
              type="password"
              v-model="password"
              label="Digite a senha*"
              text-color="Blue"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || '',
                val => val > 0 && val < 100 || ''
              ]"
                style="margin-top: 5%;"
            />
            <q-input
            standout="bg-amber-5 text-white"
              filled
              type="password"
              v-model="password"
              label="Confirme a senha*"
              text-color="Blue"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || '',
                val => val > 0 && val < 100 || ''
              ]"
            />
            <div>
              <q-btn
            label="Salvar"
            type="submit"
            color="primary"
            @click="Salvar"
            style="margin-left: 400px;"
            size="18px"

            />
            <q-btn label="Reset"
            type="reset"
            color="primary"
            flat
            size="20px"
            class="q-ml-sm" />
            </div>

          </q-col>

        </q-row>




      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {

  data() {
    return {
      name: '',
      password: ''


    };
  },
  methods: {
    onSubmit() {
      // Lógica de submissão do formulário
    },
    forgotPassword() {
      // Adicione lógica para redirecionar para a página/modal "Esqueceu a senha?"
      console.log('Redirecionar para a página/modal de recuperação de senha');
    }
  }
};
</script>



<style scoped>
.login-form {
  height: 100vh;
  display: flex;
  align-items: center;

  background: url('./icons/Nathan.jpeg');
  background-size: cover;
}

.login-content {
  /* Adicione estilos adicionais conforme necessário */
}

/* Adicione mais estilos conforme necessário */
</style>


