import { BaseAction } from "./BaseAction";
import { UserActionsType } from "../actionTypes";
import { Users } from "../../API/User/Interface";

const fetchUsers = (): BaseAction => ({
  type: UserActionsType.fetchUsers,
});

const setUsers = (payload: Users.FetchUsersResponse): BaseAction => ({
  type: UserActionsType.setUsers,
  payload,
});

export default {
  fetchUsers,
  setUsers,
};
