  import { SHA256 } from 'crypto-js';
  
  export const hashPassword = (password: string): string => {
    const key = process.env.ADMIN_AUTH_SECRET_KEY;
    return SHA256(password + key).toString();
  }