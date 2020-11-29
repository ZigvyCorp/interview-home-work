const _ = require('lodash');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const SECRET_KEY = process.env.SECRET_KEY || 'interview';

const generateJwt = payload =>
  jwt.sign(_.omit(payload, ['password']), SECRET_KEY);

const verifyJwt = jwtToken => jwt.verify(jwtToken, SECRET_KEY);
const getBearerToken = jwtToken => _.replace(jwtToken, 'Bearer ', '');

const { users } = global.db;
const collection = users;

const handle = {
  generateJwt,
  verifyJwt,
  getBearerToken,
  getList: (req, res) => collection,
  get: (req, res) => {
    const { id } = req.params;
    return _.find(collection, i => i.id == id);
  },

  insert: (req, res) => {
    const { body = {} } = req;
    const itemExisted = _.find(collection, i => i.username == body.username);
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

  //

  login: (req, res) => {
    const { username, password } = req.body;
    if (!username && !password) return null;
    const itemExisted = _.find(
      users,
      i => i.username == username && i.password == password,
    );
    if (!itemExisted) return null;
    return {
      user: {
        ..._.omit(itemExisted, ['password']),
      },
      jwt: handle.generateJwt(_.omit(itemExisted, ['password'])),
    };
  },
  me: (req, res) => {
    if (req.headers && req.headers.authorization) {
      const payload = verifyJwt(getBearerToken(req.headers.authorization));
      const itemExisted = _.find(users, i => i.id == payload.id);
      return { user: { ..._.omit(itemExisted, ['password']) } };
    }
    return null;
  },
  signup: (req, res) => {
    const {
      username,
      password,
      confirmPassword,
      name = '',
      dob = '',
    } = req.body;
    if (password !== confirmPassword) return null;
    
    const user = handle.insert({
      body: {
        username,
        password,
        name,
        dob,
        created_at: moment().valueOf(),
      },
    });
    if (!user) return null;
    return {
      user: { ..._.omit(user, ['password']) },
      jwt: handle.generateJwt(_.omit(user, ['password'])),
    };
  },
};

module.exports = handle;
