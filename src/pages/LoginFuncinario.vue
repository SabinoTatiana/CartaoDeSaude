<template>
  <q-page class="container" padding>
    <q-form @submit="onSubmit" class="login-form">
      <div class="login-content">
        <p class="text-h3 text-center text-blue-10"
        style="background: radial-gradient(circle, #3f83c2 0%, #f3f3f7 100%)"
        >Login do Funcionario</p>

        <q-row justify="center" align="center" class="q-mb-md">
          <q-col sm="12" md="6">
            <q-input
              icon="event"
              filled
              v-model="name"
              label="Digite o nome do usuário*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '']"
            />

            <q-input
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
            />
          </q-col>
        </q-row>

        <q-row justify="center" align="center">
          <q-col sm="12" md="6">
            <q-btn label="Entrar" type="submit" color="primary"/>
           
          </q-col>
        </q-row>

        <!-- Adicionando o link "Esqueceu a senha?" -->
        <q-row justify="center" align="center" class="q-mt-md">
          <q-col sm="12" md="6">
            <q-btn
              label="Esqueceu a senha?"
              color="primary"
              @click="forgotPassword"
              flat
              dense
            />
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
  justify-content: center;
  background: url('./icons/estetoscopio.jpg') center center;
  background-size: cover;
}

.login-content {
  /* Adicione estilos adicionais conforme necessário */
}

/* Adicione mais estilos conforme necessário */
</style>
