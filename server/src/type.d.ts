import 'express';

import { TokenPayload } from './models/requests/User.requests';
import User from './models/schemas/User.schema';

declare module 'express' {
  interface Request {
    decoded_authorization?: TokenPayload;
    decoded_refresh_token?: TokenPayload;
    user?: User;
  }
}
