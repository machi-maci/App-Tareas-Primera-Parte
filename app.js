const fs = require('fs');

let data = fs.readFileSync('./data/tareas.json');
let dataDescomprimidaAArray = JSON.parse(data);

switch (process.argv[2]) {
    case 'Listar':
        listar();
        break;
    case undefined:
        console.log('Atencion!. Tenes que pasar una acción \nLas acciónes: Listar');
        break;
    default:
        console.log('No entiendo que quieres hacer ');
        break;        
}

function listar () {

    dataDescomprimidaAArray.forEach(element => {
        console.log(`El titulo: ${element.titulo} esta en estado ${element.estado}`);
    });
}