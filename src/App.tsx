import { useRoutes } from "react-router";
import { notification } from "antd";

import { NotifyContext, configPages } from "./modules/shared";

import { PAGES_SETTING } from "./routes";

function App() {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      <NotifyContext.Provider value={{ api }}>
        {contextHolder}
        {useRoutes(configPages(PAGES_SETTING))}
      </NotifyContext.Provider>
    </>
  );
}

export default App;
