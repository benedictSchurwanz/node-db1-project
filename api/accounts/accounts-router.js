const router = require('express').Router()
const accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {// eslint-disable-line
  // testing out knex queries
  try {
    const data = await accounts.getAll()
    console.log(data);
    next();
  } catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {// eslint-disable-line
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {// eslint-disable-line
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {// eslint-disable-line
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {// eslint-disable-line
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
