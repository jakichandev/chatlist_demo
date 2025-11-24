import { createBrowserRouter } from "react-router";
import Root from "../Root";
import ChatUserActive from "../pages/ChatUserActive";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/chat/:chatId",
    element: <ChatUserActive />,
  }
]);
