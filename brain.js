    let read = require('read-file-utf8');
    let loki = require('lokijs');
    //let router = require('vue-router');
    let db = new loki('db.json');
    let data = read(__dirname + '/db.json');
    db.loadJSON(data);
    //window.Vue = require('vue');
    let produtos = db.getCollection('produtos');
    const estoque ={template:'pages/estoque.html'}
    const receita ={template:'pages/receita.html'}
    //console.log(db);
/*
    let routes={
        '/estoque':estoque,
        '/receita':receita
    }
    new Vue({
        el: 'body',
        data: {
            currentRoute:window.location.pathname,
            produtos: [],
            clientes:[],
            mode: '',
           
            product: {
                lote: '',
                dataLote: '',
                quantidade: '',
                contagem: '',
                dataContagem: '',
                viabilidade: '',
                dataViabilidade: '',
                contagemCorrigida: ''

            },


            computed: {
                ViewComponent () {
                  return routes[this.currentRoute] || NotFound
                },
            },
            render (h) { return h(this.ViewComponent) },
            
            openModal: false
        },
        
        ready: function() {
            this.produtos = produtos.data;
            console.log(this.produtos);
        },
        methods: {
            editProduct: function(product) {
                this.mode = 'editar';
                this.openModal = true;
                this.product = product;
            },
            createProduct: function() {
                this.mode = "cadastrar";
                this.openModal = true;
                this.product = {
                    lote: '',
                    dataLote: '',
                    quantidade: '',
                    contagem: '',
                    dataContagem: '',
                    viabilidade: '',
                    dataViabilidade: '',
                    contagemCorrigida: ''

                };
            },
            productStoreOrUpdate: function() {
                if (typeof this.product.$loki != 'undefined') {
                    produtos.update(this.product);
                    db.save();
                    this.openModal = false;
                } else {
                    produtos.insert(this.product);
                    db.save();
                    this.openModal = false;
                }
            }
        }
    })
*/
    function doLogin(){
    const loginBtn = document.getElementById('doLogin');
    const user = document.getElementById('user');
    const password = document.getElementById('password');

    loginBtn.addEventListener('click',function(event){
       
            modalLogin.style.display="none";
       
    })
    }