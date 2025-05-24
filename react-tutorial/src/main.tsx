import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import TaskPage from "./pages/TaskPage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "/task",
    element : <TaskPage />
  }
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  );
} else {
  throw new Error('Root element not found');
}
