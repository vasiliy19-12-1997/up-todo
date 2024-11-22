import { DefaultPage } from "../Pages/DefaultPage/DefaultPage";
import { Home } from "../Pages/Home/Home";
import { Link1 } from "../Pages/Link1/Link1";
import { Link2 } from "../Pages/Link2/Link2";
import { Link3 } from "../Pages/Link3/Link3";
import { Link4 } from "../Pages/Link4/Link4";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "Link1", element: <Link1 /> },
  { path: "Link2", element: <Link2 /> },
  { path: "Link3", element: <Link3 /> },
  { path: "Link4", element: <Link4 /> },
  { path: "*", element: <DefaultPage /> },
];
