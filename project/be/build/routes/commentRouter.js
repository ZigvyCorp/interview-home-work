"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentCtrl_1 = __importDefault(require("../controllers/commentCtrl"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/comment', auth_1.default, commentCtrl_1.default.createComment);
router.get('/comments/blog/:id', commentCtrl_1.default.getComments);
router.post('/reply_comment', auth_1.default, commentCtrl_1.default.replyComment);
exports.default = router;
