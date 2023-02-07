const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', async (req, res) => {
  try {
    const getAllTags = await Tag.findAll(
    {
      include: [{ model: Product}]
    });
    res.status(200).json(getAllTags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get all tags and associated products by ID
router.get('/:id', async (req, res) => {
  const tagByID = await Tag.findByPk(req.params.id)
  if (!tagByID) {
    res.status(404).json({message: "Tag by that ID not found"})
  }

  try {
    const getAllTags = await Tag.findByPk(
      req.params.id, 
    {
      include: [{ model: Product}]
    });
    res.status(200).json(getAllTags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post('/', (req, res) => {
  try {
    const newTag = Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const tagByID = await Tag.findByPk(req.params.id)
  if (!tagByID) {
    res.status(404).json({message: "Tag by that ID not found"})
  }

  try {
    const updateTag = await Tag.update(req.body, 
    {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updateTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const tagByID = await Tag.findByPk(req.params.id)
  if (!tagByID) {
    res.status(404).json({message: "Tag by that ID not found"})
  }

  try {
    const deleteTag = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      })
    res.status(200).json(deleteTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
