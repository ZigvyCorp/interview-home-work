const { posts, users } = global.db;
const collection = posts;
const _ = require('lodash');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = {
  getList: (req, res) => {
    const { page, pageSize } = req.query;
    if (page * pageSize > collection.length) return [];
    const end = _.min([(page + 1) * pageSize, collection.length]);
    const listItem = _.slice(collection, page * pageSize, end);

    return _.map(listItem, item => ({
      ...item,
      owner: _.find(users, user => user.id == item.owner),
    }));
  },

  get: (req, res) => {
    const { id } = req.params;
    return _.find(collection, i => i.id == id);
  },

  insert: (req, res) => {
    const { body = {} } = req;
    const itemExisted = _.find(collection, i => i.id == body.id);
    if (itemExisted) return null;
    const item = { id: uuid(), ...body };
    collection.push(item);
    return item;
  },
  update: (req, res) => {
    const { id } = req.params;
    const { body = {} } = req;
    const itemIndex = _.findIndex(collection, i => i.id == id);
    if (!itemIndex) return null;
    const updateItem = { ...user[itemIndex], ...body };
    collection[itemIndex] = updateItem;
    return updateItem;
  },
  delete: (req, res) => null,
};
