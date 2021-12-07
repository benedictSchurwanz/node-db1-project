const db = require('../../data/db-config')

const getAll = async () => {
  return db('accounts')
}

const getById = async id => {
  return db('accounts')
    .select()
    .where('id', id);
}

const create = account => {
  // `account` will be an object with the relevant fields: id, name, budget.
  return db('accounts')
    .insert({
      name: account.name,
      budget: account.budget
    })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
