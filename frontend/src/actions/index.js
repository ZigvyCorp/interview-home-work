export const ADD_TODO = "ADD_TODO";
export const LOAD_TODO_LIST = "LOAD_TODO_LIST";
export const RENDER_TODO_LIST = "RENDER_TODO_LIST";
export const USER_PROFILE_LOADED = "USER_PROFILE_LOADED";
export const HANDLE_AUTHENTICATION_CALLBACK = "HANDLE_AUTHENTICATION_CALLBACK";

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
}
