    let read = require('read-file-utf8');
    let loki = require('lokijs');
    let db = new loki('db.json');
    let data = read(__dirname +'/db.json');
    db.loadJSON(data);
    window.Vue = require('vue');
    let clientes = db.getCollection('clientes');
    //console.log(db);

    new Vue({
      el:'body',
      data:{
        clientes:[],
        mode:'',
        client:{
                name:'',
                cpf:'',
                fone:''
        },
        openModal:false
      },
      ready:function(){
        this.clientes = clientes.data;
        console.log(this.clientes);
      },
      methods:{
          editClient:function(client){
              this.mode = 'editar';
            this.openModal = true;
            this.client = client;
          },
          createClient:function(){
              this.mode="cadastrar";
              this.openModal = true;
              this.client={
                name:'',
                cpf:'',
                fone:'' 
            };  
          },
          clientStoreOrUpdate:function(){
              if(typeof this.client.$loki !='undefined'){
                  clientes.update(this.client);
                  db.save();
                  this.openModal=false;
              }else{
            clientes.insert(this.client);
            db.save();
            this.openModal=false;
              }
          }
      }
    })
  
  