import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    // Rutas dinamicas -> Parametros 
    // productos/ -> lista
    // productos/:id -> detalle
    // productos/editar/:id -> formulario edicion
    // productos/crear -> formulario creacion
    // -> parametro opcionar -> ?
    path: '/productos/:view?',
    name: 'Productos',
    component: () => import('../views/ProductosView.vue'),
    props: true
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/NosotrosView.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


