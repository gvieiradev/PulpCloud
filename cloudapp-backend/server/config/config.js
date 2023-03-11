process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB = '';
if (process.env.NODE_ENV == 'dev'){
    urlDB = '';
}else{

}
process.env.URLDB = urlDB;

process.env.CADUCIDAD_TOKEN = '24h';
process.env.SEDD_AUTENTICACION = process.env.SEDD_AUTENTICACION || 'seed-dev';