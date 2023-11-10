export interface Account {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string | null;
}

export interface AccountState {
  account: Account;
}