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
exports.getPost = exports.createPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = new post_model_1.default(req.body);
        yield newPost.save();
        res.json(newPost);
    }
    catch (error) {
        next(error);
    }
});
exports.createPost = createPost;
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_model_1.default.find();
        res.json(posts);
    }
    catch (error) {
        next(error);
    }
});
exports.getPost = getPost;
//# sourceMappingURL=post.controller.js.map