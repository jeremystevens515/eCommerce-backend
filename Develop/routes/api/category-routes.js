const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories and their associate products
router.get('/', async (req, res) => {
  try {
    const getAllcategories = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(getAllcategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find category by id and associated products
router.get('/:id', async (req, res) => {
  try {
    const getCategoryByID = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(getCategoryByID)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const createCategory = await Category.create(req.body)
    res.status(200).json(createCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  const getCategoryByID = await Category.findByPk(req.params.id)
  if (!getCategoryByID) {
    res.status(404).json({message: 'No category found by that ID'})
  }
  
  try {
    const updateCategory = await Category.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      })
    res.status(200).json(updateCategory) //returns 1 or 0 for true or false
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  const getCategoryByID = await Category.findByPk(req.params.id)
  if (!getCategoryByID) {
    res.status(404).json({message: 'No category found by that ID'})
  }

  try {
    const deleteCategoryByID = await Category.destroy({
      where: {id: parseInt(req.params.id)} 
    })
    res.status(200).json(deleteCategoryByID)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
