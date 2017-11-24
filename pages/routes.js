const NotFound = { template: "Não sei como você chegou aqui, mas não tem nada aqui pra ver!" }

const Routes = {
    "../index.html": home,
    "/estoque": Estoque,
    "/about": SobreNos,
    "/help": Ajuda
}

new Vue({
    el: "#App",
    data: {
        currentRoute: window.location.pathname

    },
    computed: {
        ViewComponent() {
            return Routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})