import { createBrowserRouter } from "react-router-dom";
import NavigatePage from "./middlewares/NavigatePage";
import ChekLang from "./lib/CheckLang";
import MainLayout from "./layouts/MainLayout";
import { PageNotFound } from "./components";
import { About, Home, Products , Contacts } from "./app";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <NavigatePage />,
  },
  {
    path: ":lang",
    element: <ChekLang />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "contacts",
            element: <Contacts />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
