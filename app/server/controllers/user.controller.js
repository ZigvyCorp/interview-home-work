const User = require("../models/user.schema");
const factory = require("../utils/handlerFactory");

exports.getAll = factory.getAll(User);
exports.getOne = factory.getOneWithCustomId(User);
exports.create = factory.createOne(User);
exports.update = factory.updateOne(User);
exports.delete = factory.deleteOne(User);
