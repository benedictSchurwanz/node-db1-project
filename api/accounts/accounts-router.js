const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => { // eslint-disable-line
  // testing out knex queries
  try {
    const data = await Accounts.getAll()
    res.json(data);
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => { // eslint-disable-line
  try {
    const data = await Accounts.getById(req.params.id)
    res.json(data);
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => { // eslint-disable-line
  try {
    const newAcctId = await Accounts.create({ name: req.body.name, budget: req.body.budget })
    const acct = { budget: req.body.budget, id: newAcctId[0], name: req.body.name }
    res.json(acct);
  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => {  // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
