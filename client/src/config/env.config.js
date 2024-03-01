const ENV_VAR = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  API_TIME_OUT: process.env.REACT_APP_API_TIME_OUT || 30 * 1000, // 30s
};
export default ENV_VAR;
