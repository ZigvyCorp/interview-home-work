const catchAsync = require("./catchAsync");
const AppError = require("./appError");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: true,
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: true,
      data: doc,
    });
  });

exports.createOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    //trick for  Cart and Wishlist
    if (req.params.id) req.body.user = req.params.id;
    let doc = await Model.create(req.body);

    console.log(doc);

    if (popOptions) {
      doc = await Model.findById(doc._id).populate(popOptions);
    }

    res.status(201).json({
      status: true,

      data: doc,
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: true,
      data: doc,
    });
  });

exports.getOneWithCustomId = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.findOne({ id: req.params.id });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: true,
      data: doc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();

    // SEND RESPONSE
    res.status(200).json({
      status: true,
      results: doc.length,
      data: doc,
    });
  });
