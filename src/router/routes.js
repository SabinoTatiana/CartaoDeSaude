const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
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
    path: '/cadastroPaciente',
    component: () => import('layouts/cadastroPacienteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CadastroPaciente.vue') },

    ]
  },

  {
    path: '/cadastrar',
    component: () => import('layouts/CadastroPacienteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CadastroPaciente.vue') },

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
  {
    path: '/404',
    component: () => import('pages/ErrorNotFound.vue'),

  },
  // Rota padrão para capturar qualquer caminho não correspondido
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
];

export default routes;
