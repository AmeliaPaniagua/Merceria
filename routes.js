//IMPORTACION DE MODULOS
const express = require('express');
const { Proveedor, Articulo } = require('./models');

const router = express.Router();

//LECTURA DE DATOS
// ver todos los Proveedores

router.get('/proveedores', (req, res) => {  
    Proveedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }); 
});

// ver un Proveedor
router.get('/proveedores/:id', (req, res) => {  
    Proveedor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// ver todos los Articulos

router.get('/articulos', (req, res) => {  
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }); 
});

// ver un Articulo
router.get('/articulos/:id', (req, res) => {  
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});


//ELIMINACION DE DATOS

// eliminar un Proveedor
router.delete('/proveedores/:id', (req, res) => { 
    Proveedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// eliminar un Articulo
router.delete('/articulos/:id', (req, res) => { 
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

//MODIFICACION DE DATOS
// actualizar un Proveedor
router.put('/proveedores/:id', (req, res) => {
    Proveedor.findOneAndUpdate (
        { _id: req.params.id }, 
        { $set: { nombre: req.body.nombre, 
                CIF: req.body.CIF,
                direccion: req.body.direccion, 
                telefono: req.body.telefono } }, 
        (err, data) => {
          if (err) res.json({ error: err });
          else     res.json(data);
      });
  });

  // actualizar un Articulo
router.put('/articulos/:id', (req, res) => {
    Articulo.findOneAndUpdate (
        { _id: req.params.id }, 
        { $set: { nombre: req.body.nombre, 
                descripcion: req.body.descripcion,
                stock: req.body.stock, 
                precio: req.body.precio } }, 
        (err, data) => {
          if (err) res.json({ error: err });
          else     res.json(data);
      });
  });

//INSERCION DE DATOS
  // insertar un Proveedor
router.post('/proveedores', (req, res) => {
    const proveedor = new Proveedor({ 
                        nombre: req.body.nombre, 
                        CIF: req.body.CIF,
                        direccion: req.body.direccion, 
                        telefono: req.body.telefono });
    proveedor.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// insertar un Articulo
router.post('/articulos', (req, res) => {
    const articulo = new Articulo({ 
                        nombre: req.body.nombre, 
                        descripcion: req.body.descripcion,
                        stock: req.body.stock, 
                        precio: req.body.precio });
    articulo.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});


module.exports = router;