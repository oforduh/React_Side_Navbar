import Pages from "../pages";

const routes = [
  { path: "/", element: <Pages.Home />, type: "public" },
  { path: "/home", element: <Pages.Home />, type: "public" },
  { path: "/reports", element: <Pages.Reports />, type: "public" },
  { path: "/products", element: <Pages.Products />, type: "public" },
  { path: "/team", element: <Pages.Team />, type: "public" },
  { path: "/message", element: <Pages.Message />, type: "public" },
  { path: "/support", element: <Pages.Support />, type: "public" },
];

export default routes;
