const fs = require('fs');
const path = require('path');
const { transferableAbortSignal } = require('util');

let data = fs.readFileSync('./data/tareas.json');
let dataDescomprimidaAArray = JSON.parse(data);



let obj = {titulo: "Argentina vs Paises Bajos", estado: "Terminado"};
let dataComprimida = JSON.stringify(obj);

dataDescomprimidaAArray.push(dataComprimida);

//fs.writeFileSync(path.resolve(__dirname.'./data/tareas.json'));







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
        console.log(`El titulo: ${element.titulo} esta en estado: ${element.estado}`);
    });
}




