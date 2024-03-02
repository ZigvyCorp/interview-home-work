"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = exports.BlogController = exports.UserController = void 0;
// entry point here
const UserController_1 = __importDefault(require("./UserController"));
exports.UserController = UserController_1.default;
const BlogController_1 = __importDefault(require("./BlogController"));
exports.BlogController = BlogController_1.default;
const CommentController_1 = __importDefault(require("./CommentController"));
exports.CommentController = CommentController_1.default;
