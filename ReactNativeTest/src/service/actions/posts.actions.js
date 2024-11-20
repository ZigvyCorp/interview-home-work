const action = type => {
  function actionCreator(...args) {
    return {type, payload: args[0]};
  }
  actionCreator.type = type;
  return actionCreator;
};

export const fetchPostAction = action('posts/fetchPostAction');
export const fetchPostSuccessAction = action('posts/fetchPostSuccessAction');
export const fetchPostFailAction = action('posts/fetchPostFailAction');
