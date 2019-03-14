// El primer valor es para PRODUCCIÓN, el alternativo para DESARROLLO

module.exports = {
  ip         : process.env.HOST   || '0.0.0.0', 
  port       : process.env.PORT   || 3000,
  db_uri     : process.env.DB_URI || 'mongodb://localhost:27017/merceria' 
  //db_uri es una variable que se crea en heroku y el codigo quiere decir que se cogerá la url de la BD
  //que hemos indicado en la variable de heroku  o sino existe en heroku cogemos la que hemos indicado aqui
  
};
