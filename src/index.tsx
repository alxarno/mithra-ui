import * as React from "react";
import { render } from "react-dom";
import Router from "./routes/router";
import {SIDEBAR_ROUTES, ROUTES, DEFAULT_REDIRECT} from "./config/routes";
import Store from "./store";
import { IRootStore } from "./store/interfeces";
import { Provider } from "mobx-react";
import Sign from "./pages/sign"

require("./main.scss");

const store: IRootStore  = new Store();
render(
  <main>
     {/* <Provider store={store}>
      <Router
        pathways={ROUTES}
        store={store}
        defaultRedirect={DEFAULT_REDIRECT}
        sidebarRoutes={SIDEBAR_ROUTES}
      />
    </Provider> */}
    <Sign/>
  </main>
  ,
  document.getElementById("root"),
);
