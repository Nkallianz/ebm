// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let loki = require('lokijs');
let db = new loki('db.json');
let clientes = db.addCollection('clientes');

function ready(fn) {
    if(document.readyState!='loading'){
        fn();
    }else{
        document.addEventListener('DOMContentLoaded', fn);
        }
}

ready(function(){
document.querySelector('#save').addEventListener('click',function(e){
    e.preventDefault();
    let data = {
        name:document.querySelector('#name').value,
        cpf:document.querySelector('#cpf').value,
        fone:document.querySelector('#fone').value
    }
    clientes.insert(data);
    db.save();
    alert('Salvo com sucesso!');
    document.querySelector('#cadastro-cliente').reset();
})

})