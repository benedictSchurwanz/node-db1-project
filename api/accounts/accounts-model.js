const db = require('../../data/db-config')

const getAll = async () => {
  return db('accounts')
}

const getById = async id => {
  return db('accounts')
    .select()
    .where('id', id);
}

const create = async account => {
  return db('accounts')
    .insert({
      name: account.name,
      budget: account.budget
    })
}

const updateById = async (id, account) => {
  return db('accounts').where({id: id}).update({name: account.name, budget: account.budget})
}

const deleteById = async id => {
  return db('accounts').where('id', id).delete()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
