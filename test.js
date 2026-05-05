const e = require('cors');
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/products',
  method: 'GET'
};

const req = http.request(options, (res) => {
    if (res.statusCode === 403 || res.statusCode === 401) {
        console.log('La api protegida.');
        process.exit(0);
    } else {
        console.log('Test Fallo.');
        process.exit(1);
    }
});//cambios

req.on('error', () => {
    console.log('Error al conectar con la API.');
    process.exit(1);
});

req.end();


//comentario