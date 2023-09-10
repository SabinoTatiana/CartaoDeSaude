
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/cadastroPaciente', component: () => import('pages/CadastroPaciente.vue') },

    ]
  },
  {
    path: '/paciente',
    component: () => import('layouts/LoginPacienteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPaciente.vue') },

    ]
  },
  {
    path: '/funcionario',
    component: () => import('layouts/LoginFuncionarioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginFuncionario.vue') },

    ]
  },
  {
    path: '/gestao',
    component: () => import('layouts/LoginGestaoLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginGestao.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
