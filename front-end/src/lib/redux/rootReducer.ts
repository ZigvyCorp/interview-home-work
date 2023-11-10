// Utilities
import { managePosts, manageComments } from './blogs';
import { account, manageUsers } from './users';

export const reducer = {
  account: account.reducer,
  manageUsers: manageUsers.reducer,
  managePosts: managePosts.reducer,
  manageComments: manageComments.reducer,
}
