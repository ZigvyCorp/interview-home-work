"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Blog = exports.User = void 0;
// entry point here
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Blog_1 = __importDefault(require("./Blog"));
exports.Blog = Blog_1.default;
const Comment_1 = __importDefault(require("./Comment"));
exports.Comment = Comment_1.default;
