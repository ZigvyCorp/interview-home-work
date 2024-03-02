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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const BlogController = {
    createBlog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, content, author } = req.body;
            const existBlog = yield models_1.Blog.findOne({ title });
            if (existBlog)
                return res.status(400).send({ msg: "Blog already create" });
            const newBlog = new models_1.Blog({
                author,
                title,
                content,
            });
            yield newBlog.save();
            res.status(200).json({
                code: 200,
                newBlog,
            });
        }
        catch (error) {
            console.log("error", error);
            res.status(500).send({ msg: error });
        }
    }),
    getBlogById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const blog = yield models_1.Blog.findOne({ _id: req.params.id });
            if (!blog)
                return res.status(404).send({ msg: "not found" });
            return res.status(200).json({ blog });
        }
        catch (error) {
            res.send({ msg: error });
        }
    }),
    searchBlogs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const blogs = yield models_1.Blog.aggregate([
                {
                    $search: {
                        index: "searchTitle",
                        autocomplete: {
                            query: `${req.query.title}`,
                            path: "title",
                        },
                    },
                },
                { $sort: { createdAt: -1 } },
                { $limit: 5 },
                {
                    $project: {
                        title: 1,
                        createdAt: 1,
                    },
                },
            ]);
            if (!blogs.length)
                return res.status(400).json({ msg: "No Blogs." });
            res.json(blogs);
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }),
};
exports.default = BlogController;
