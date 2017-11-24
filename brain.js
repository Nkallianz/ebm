    let read = require('read-file-utf8');
    let loki = require('lokijs');
    let db = new loki('db.json');
    let data = read(__dirname + '/db.json');
    db.loadJSON(data);
    window.Vue = require('vue');
    let produtos = db.getCollection('produtos');
    //console.log(db);

    new Vue({
        el: 'body',
        data: {
            produtos: [],
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