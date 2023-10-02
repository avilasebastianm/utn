const http = require("http"); // para requerir el modulo HTTP

const servidor = http.createServer((request, response) => {
    console.log(request.url, request.method);
    // si tengo la pagina (URL) /contacto.html


    if (request.url.includes('/mi_lista')) {
        response.end('<p>harina</p> <p>leche</p><p>huevo</p>');

    } if(request.url.includes('/contacto')) {
        response.end('Contacto');
    } else {
        console.log(request)
        response.end('<h1>Hola Node.js</h1>') // para terminar la comunicacion
    }
});
//http://www.google.com/search?q=hola+mundo
const port = 3001; // para asignarle un puerto, se utiliza el 3000 o el 5000

servidor.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
