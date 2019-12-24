export const getPopupFactories = () => ({
  signin: () => import("src/routes/signin/signin.popup")
});
