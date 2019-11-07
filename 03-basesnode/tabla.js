
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', {
                num: {
                    demand: true,
                    alias: 'n'
                },
                limite: {
                    alias: 'l',
                    default: 10
                }
            })
            .command('crear', 'crea un archivo con la tabla de multiplicar', {
                num: {
                    demand: true,
                    alias: 'n'
                },
                limite: {
                    alias: 'l',
                    default: 10
                }
            })
            .argv;

const { crearArchivo, listar} = require('./multiplicar/multiplicar')


// let argv2 = process.argv;
// let parametro = argv[2];

// let num = parametro.split('=')[1];
// node tabla --base='num'

let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        listar(argv.num, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.num, argv.limite).then(archivo => console.log(`Archivo creado`)).catch(e => console.log(e))
    break;

    default:
        console.log('comando no reconocido');
}


// let data = '';

// for (i=1; i<=10; i++) {
//     data += `${num} * ${i} = ${ num * i}\n`;
// }

// fs.writeFile(`tabla-${num}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

