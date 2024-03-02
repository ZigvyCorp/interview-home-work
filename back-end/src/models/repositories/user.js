'use strict';

const { getSortAscending, getSortDescending, getUnSelectData } = require("../../utils");
const userModel = require("../user.model");

const findUserById = async (userId) => {
    return await userModel.findOne({id: userId}).lean();
}

const getUsers = async ({limit = 50, page = 1, sorted = ["_id"], filter = {}, unSelect = ["_id"], isAscending = true}) => {
    return await userModel.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort(isAscending === true ? getSortAscending(sorted) : getSortDescending(sorted))
    .select(getUnSelectData(unSelect))
    .lean()
}

module.exports = {
    findUserById,
    getUsers
}