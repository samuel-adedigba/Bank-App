import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
  {
    key: 'login', 
    path: '/login', 
    component: <Login />
  },
  {
    key: 'register',
    path: '/register',
    component: <Register />
  },
  // {
  //   key: 'logout',
  //   path: '/logout',
  //   component: <Login />
  // },
];
