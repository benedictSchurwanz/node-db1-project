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

router.put('/:id', async (req, res, next) => { // eslint-disable-line
  try {
    const id = req.params.id
    const { name, budget } = req.body
    const updatedAcct = await Accounts.updateById(id, { name, budget })
    res.json(updatedAcct);
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => { // eslint-disable-line
  try {
    const bool = await Accounts.deleteById(req.params.id)
    res.json(bool)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
