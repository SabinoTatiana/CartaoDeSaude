<template>
  <q-page class="container" padding>
    <q-form @submit.prevent="onSubmit" class="login-form">
      <div class="login-content">
        <p class="text-h4 text-center text-blue-10" style="background: radial-gradient(circle, #3f83c2 0%, #f3f3f7 100%)">
          Login
        </p>

        <q-row justify="center" align="center" class="q-mb-md">
          <q-col sm="12" md="6">
            <q-input
              icon="event"
              filled
              v-model="name"
              label="Digite o nome do usuário*"
              lazy-rules
              :rules="[val => val && val.length > 0 || '']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Digite a senha*"
              text-color="Blue"
              lazy-rules
              :rules="[val => val !== null && val !== '' || '', val => val > 0 && val < 100 || '']"
            />
          </q-col>
        </q-row>

        <q-row justify="center" align="center">
          <q-col sm="12" md="6">
            <q-btn label="Entrar" type="submit" color="primary" />
          </q-col>
        </q-row>

        <q-row justify="center" align="center" class="q-mt-md">
          <q-col sm="12" md="6">
            <q-btn
              label="Esqueceu a senha?"
              color="primary"
              @click="forgotPassword"
              flat
              dense
              style="margin-left: 130px;"
            />
          </q-col>
        </q-row>

        <q-row justify="center" align="center">
          <q-item clickable v-ripple to="/CadastroPaciente" active-class="my-menu-link">
            <q-item-section avatar>
              <q-btn
                label="Cadastrar"
                type="submit"
                color="primary"
                @click="Cadastrar"
                style="margin-left: 220px;"
              />
            </q-item-section>
          </q-item>
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
      password: '',
      accept: false
    };
  },
  methods: {
    onSubmit() {
      if (!this.accept) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Você precisa aceitar os termos e a licença primeiro'
        });
      } else {
        // Lógica de submissão do formulário
      }
    },
    forgotPassword() {
      // Adicione lógica para redirecionar para a página/modal "Esqueceu a senha?"
      console.log('Redirecionar para a página/modal de recuperação de senha');
    },
    Cadastrar() {
      // Adicione lógica para redirecionar para a página de cadastro de pacientes
      this.$router.push('/CadastroPaciente');
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
  background: url('./icons/medico.jpg') center center;
  background-size: cover;
}

.login-content {
  /* Adicione estilos adicionais conforme necessário */
}

/* Adicione mais estilos conforme necessário */
</style>
