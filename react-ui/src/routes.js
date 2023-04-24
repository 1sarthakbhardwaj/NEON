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
import ButtonClickMessage from "./components/Marketplace/ButtonClickMessage";
import NFTMarketplace from "views/admin/marketplace";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";

const routes = [
  {
    name: "Executive Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Automation",
    layout: "/admin",
    path: "/automation",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Onboard",
    layout: "/admin",
    path: "/add-platform",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: ButtonClickMessage,
    secondary: true,
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
