const express = require('express');
const router = express.Router();
const ProductoSchema = require('../model/Producto');


//Insercion de los datos
router.get('/', async (req, res) => {
  const Producto= await ProductoSchema.find();
  res.render('index', {
    Producto
  });
});
router.post('/add', async (req, res, next) => {
  const Producto = new ProductoSchema(req.body);
  await Producto.save();
  res.redirect('/');
});



//Edición de datos
router.get('/edit/:id', async (req, res, next) => {
  const Producto  = await ProductoSchema.findById(req.params.id);
  console.log(Producto )
  res.render('edit', { Producto });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await ProductoSchema.update({_id: id}, req.body);
  res.redirect('/');
});

//Elimicación de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await ProductoSchema.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
