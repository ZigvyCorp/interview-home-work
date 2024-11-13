import { hash, compare } from 'bcrypt'

export async function hashPassword(password: string, salt: string | number = 10): Promise<string> {
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return await compare(password, hashedPassword);
}