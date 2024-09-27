import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const verifyPassword = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashPassword);
  } catch (error) {
    return false;
  }
};
