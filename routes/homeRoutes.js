const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.index);  

router.get('/products', homeController.products);
router.post('/products', homeController.addProducts);

router.get('/products/:id', homeController.productDetail);

router.get('/about', homeController.about);

router.get('/cart', homeController.cart);

router.get('/register', homeController.register);

router.post('/register', homeController.registerUser);

module.exports = router;