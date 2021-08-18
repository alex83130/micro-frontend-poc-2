import React from "react";

const Page = React.lazy(() => import("./Page"));

const routes = [
  {
    path: "/app1",
    component: Page,
    exact: true,
  },
];

export default routes;
