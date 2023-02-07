const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// localhost:3001/categories
router.use('/categories', categoryRoutes);
// localhost:3001/products
router.use('/products', productRoutes);
// localhost:3002/tags
router.use('/tags', tagRoutes);

module.exports = router;
