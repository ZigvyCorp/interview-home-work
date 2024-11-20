import express from 'express';
import { getUser, getUsers } from '../api/controllers/user.controller'
import { asyncHandler } from '../helpers/asyncHandler';
const router = express.Router();

router.get('/', asyncHandler(getUsers))

router.get('/:id', asyncHandler(getUser))

export default router;