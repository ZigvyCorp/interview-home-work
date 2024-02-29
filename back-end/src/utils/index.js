'use strict';
const { default: mongoose } = require('mongoose');

const getSelectData = (select = []) => {
  return Object.fromEntries(
    select.map((item) => {
      return [item, 1];
    })
  );
};

const getUnSelectData = (select = []) => {
  return Object.fromEntries(
    select.map((item) => {
      return [item, 0];
    })
  );
};

const getSortAscending = (sort = []) => {
  return Object.fromEntries(
    sort.map((item) => {
      return [item, 1];
    })
  );
};

const getSortDescending = (sort = []) => {
  return Object.fromEntries(
    sort.map((item) => {
      return [item, -1];
    })
  );
};

module.exports = {
  getSelectData,
  getUnSelectData,
  getSortAscending,
  getSortDescending,
};
