import ENV_CONFIG from './environments';

export const ApiConfig = {
  Posts: {
    GetAll: `${ENV_CONFIG.API_URL}/posts`,
    GetById: `${ENV_CONFIG.API_URL}/posts/{{id}}`,
    GetCommentsByPost: `${ENV_CONFIG.API_URL}/posts/{{id}}/comments`
  }
}