const Home = {
    template: '<h1>Accueil</h1>',
    name: 'Home'
}
const UserSettings = {
    template: '<h1>Paramètres utilisateur</h1>',
    name: 'UserSettings'
}
const WishList = {
    template: '<h1>Liste de souhaits</h1>',
    name: 'WishList'
}
const ShoppingCart = {
    template: '<h1>Panier</h1>',
    name: 'ShoppingCart'
}

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/usersettings', component: UserSettings},
        {path: '/wishlist', component: WishList},
        {path: '/shopping', component: ShoppingCart}
    ]
})

const vue = new Vue({
    router
}).$mount('#app');