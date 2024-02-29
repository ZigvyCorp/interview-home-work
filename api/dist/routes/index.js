"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const post_route_1 = __importDefault(require("./post.route"));
const comment_route_1 = __importDefault(require("./comment.route"));
const router = (0, express_1.Router)();
router.use("/user", user_route_1.default);
router.use("/post", post_route_1.default);
router.use("/comment", comment_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map