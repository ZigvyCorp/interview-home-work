"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRouter_1 = __importDefault(require("./authRouter"));
const blogRouter_1 = __importDefault(require("./blogRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const routes = [
    authRouter_1.default,
    blogRouter_1.default,
    commentRouter_1.default
];
exports.default = routes;
