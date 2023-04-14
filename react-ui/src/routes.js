import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdLogout,
  MdAddCircle,
  MdLogin,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import ButtonClickMessage from "./components/Marketplace/ButtonClickMessage";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Add Platform",
    layout: "/admin",
    path: "/add-platform",
    icon: (
      <Icon as={MdAddCircle} width='16px' height='16px' color='inherit' />
    ),
    component: ButtonClickMessage,
  },
  {
    name: "Signin",
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <Icon as={MdLogin} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
    hide: true,
  },
  {
    name: "Sign up",
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <Icon as={MdPerson} width='16px' height='16px' color='inherit' />
    ),
    component: SignUp,
    hide: true,
  },
];

export const Logout = [
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-out",
    icon: (
      <Icon as={MdLogout} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
  },
];
export default routes;
