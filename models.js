const mongoose = require('mongoose');

const Proveedor  = mongoose.model('Proveedor',  { 
                                nombre: String, 
                                CIF: String,
                                direccion: String,
                                telefono: Number });

const Articulo = mongoose.model('Articulo', { 
                                nombre: String,
                                descripcion: String, 
                                stock: Number,
                                precio: Number });

module.exports =  {
    Proveedor,
    Articulo
};
