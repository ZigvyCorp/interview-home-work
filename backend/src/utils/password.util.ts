
import * as bcrypt from 'bcryptjs';

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
