<template>
  <q-page class="container" padding>
    <q-form @submit="onSubmit" @reset="reset" class="login-form">
      <div class="q-pa-md">
        <p class="text-h4 text-center text-blue-10" style="background: radial-gradient(circle, #ece936 0%, #e2a90c 100%); max-width: 900px">Cadastro do Paciente</p>

        <q-row justify="center" align="center">
          <q-col sm="12" md="6">
            <q-input
              standout="bg-amber-5 text-white"
              icon="event"
              filled
              v-model="name"
              label="Digite o nome da criança*"
              lazy-rules
              :rules="[ val => !!val || 'Por favor, escreva o nome']"
            />
            <q-input
              standout="bg-amber-5 text-white"
              icon="event"
              filled
              v-model="apelido"
              label="Digite o apelido*"
              lazy-rules
              :rules="[ val => !!val || '']"
            />
            <q-select v-model="model" :options="options" label="Nome do Responsável" />

            <q-input filled mask="date" v-model="date" label="Data de Nascimento">
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
              v-model="senha"
              label="Digite a senha*"
              text-color="Blue"
              lazy-rules
              :rules="[
                val => !!val || '',
                val => val.length > 0 && val.length < 100 || 'A senha deve ter entre 1 e 100 caracteres'
              ]"
              style="margin-top: 5%;"
            />
            <q-input
              standout="bg-amber-5 text-white"
              filled
              type="password"
              v-model="confirmPassword"
              label="Confirme a senha*"
              text-color="Blue"
              lazy-rules
              :rules="[
                val => !!val || '',
                val => val === senha || 'As senhas não coincidem'
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
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                size="20px"
                class="q-ml-sm"
              />
            </div>
          </q-col>
        </q-row>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    const name = ref('');
    const apelido = ref('');
    const model = ref(null);
    const options = ['Angela', 'Patricio', 'Tatiana', 'Sabino', 'Americo'];
    const date = ref('');
    const senha = ref('');
    const confirmPassword = ref('');

    const reset = () => {
      name.value = '';
      apelido.value = '';
      model.value = null;
      date.value = '';
      senha.value = '';
      confirmPassword.value = '';
    };

    return {
      name,
      apelido,
      model,
      options,
      date,
      senha,
      confirmPassword,
      reset,
    };
  },
  methods: {
    onSubmit() {
      // Lógica de submissão do formulário
    },
    forgotPassword() {
      // Lógica para redirecionar para a página/modal "Esqueceu a senha?"
      console.log('Redirecionar para a página/modal de recuperação de senha');
    },
    Salvar() {
      // Lógica para salvar
    },
  },
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
</style>
