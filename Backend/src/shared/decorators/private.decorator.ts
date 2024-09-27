import { SetMetadata } from '@nestjs/common';

export const PRIVATE_KEY = 'private';
export const PrivateRoute = () => SetMetadata(PRIVATE_KEY, true);
