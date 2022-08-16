/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { auth } from '../auth/auth.middleware';
import {
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
	updateUserInfo,
} from './users.controller';

export const userRouter = Router();

userRouter.get('/', auth, getAllUsers);

userRouter.get('/:id', getUserById);

userRouter.put('/:id', auth, updateUser);

userRouter.put('/:id/user', auth, updateUserInfo);

userRouter.delete('/:id', auth, deleteUser);
