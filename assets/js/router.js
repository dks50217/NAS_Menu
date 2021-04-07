const routes = [
    { path: '/test', name: 'test', component: Vue.defineAsyncComponent(() => loadModule('assets/components/my-component.vue', options)) },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})