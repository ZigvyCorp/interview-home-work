'use strict';

const {
  getSortAscending,
  getSortDescending,
  getUnSelectData,
} = require('../../utils');
const postModel = require('../post.model');

const findPostById = async (id) => {
  return await postModel.findOne({ id: id }).lean();
};

const getPosts = async ({
  limit = 50,
  page = 1,
  sorted = ['_id'],
  filter = {},
  unSelect = ['_id'],
  isAscending = true,
}) => {
  return await postModel
    .find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort(
      isAscending === true
        ? getSortAscending(sorted)
        : getSortDescending(sorted)
    )
    .select(getUnSelectData(unSelect))
    .lean();
};
const searchPostsByKeyword = async (keySearch) => {
  if (!keySearch) return await postModel.find({}).lean();
  const regexSearch = new RegExp(keySearch);
  return await postModel.find({
      $text: {
          $search: regexSearch
      },
  }, {score: {$meta: "textScore"}}).sort({score: { $meta: "textScore" }}).lean()
}

module.exports = {
  findPostById,
  getPosts,
  searchPostsByKeyword
};
