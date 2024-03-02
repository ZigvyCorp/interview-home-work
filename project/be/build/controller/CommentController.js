"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("../index");
const middleware_1 = require("../middleware");
const CommentController = {
    createComment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.user)
            return res.status(900).send({ msg: "Invalid" });
        try {
            const { content, blog_id, blog_user_id } = req.body;
            const newComment = new models_1.Comment({
                user: req.user._id,
                content,
                blog_id,
                blog_user_id,
            });
            const data = Object.assign(Object.assign({}, newComment._doc), { user: req.user, createdAt: new Date().toISOString() });
            index_1.io.to(`${blog_id}`).emit("createComment", data);
            yield newComment.save();
            return res.send(newComment);
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    }),
    getComment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { limit, skip } = (0, middleware_1.Pagination)(req);
        try {
            const data = yield models_1.Comment.aggregate([
                {
                    $facet: {
                        totalData: [
                            {
                                $match: {
                                    blog_id: new mongoose_1.default.Types.ObjectId(req.params.id),
                                    comment_root: { $exists: false },
                                    reply_user: { $exists: false },
                                },
                            },
                            {
                                $lookup: {
                                    from: "users",
                                    let: { user_id: "$user" },
                                    pipeline: [
                                        { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                                        { $project: { name: 1, avatar: 1 } },
                                    ],
                                    as: "user",
                                },
                            },
                            { $unwind: "$user" },
                            {
                                $lookup: {
                                    from: "comments",
                                    let: { cm_id: "$replyCM" },
                                    pipeline: [
                                        { $match: { $expr: { $in: ["$_id", "$$cm_id"] } } },
                                        {
                                            $lookup: {
                                                from: "users",
                                                let: { user_id: "$user" },
                                                pipeline: [
                                                    { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                                                    { $project: { name: 1, avatar: 1 } },
                                                ],
                                                as: "user",
                                            },
                                        },
                                        { $unwind: "$user" },
                                        {
                                            $lookup: {
                                                from: "users",
                                                let: { user_id: "$reply_user" },
                                                pipeline: [
                                                    { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                                                    { $project: { name: 1, avatar: 1 } },
                                                ],
                                                as: "reply_user",
                                            },
                                        },
                                        { $unwind: "$reply_user" },
                                    ],
                                    as: "replyCM",
                                },
                            },
                            { $sort: { createdAt: -1 } },
                            { $skip: skip },
                            { $limit: limit },
                        ],
                        totalCount: [
                            {
                                $match: {
                                    blog_id: new mongoose_1.default.Types.ObjectId(req.params.id),
                                    comment_root: { $exists: false },
                                    reply_user: { $exists: false },
                                },
                            },
                            { $count: "count" },
                        ],
                    },
                },
                {
                    $project: {
                        count: { $arrayElemAt: ["$totalCount.count", 0] },
                        totalData: 1,
                    },
                },
            ]);
            const comments = data[0].totalData;
            const count = data[0].totalCount;
            let total = 0;
            if (count % limit === 0) {
                total = count / limit;
            }
            else {
                total = Math.floor(count / limit) + 1;
            }
            return res.json({ comments, total });
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    }),
};
exports.default = CommentController;
