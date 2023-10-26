import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import GetExtensionPage from "./pages/GetExtensionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
  },
  {
    path: "/get",
    element: <GetExtensionPage />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
