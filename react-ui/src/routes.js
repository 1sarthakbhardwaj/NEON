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
import Share_of_search from "./components/sidebar/components/Share_of_search";
import CreateNewScript from "./components/sidebar/components/CreateNewScript";
import Digital_Shelf_Analysis_table from "./components/sidebar/components/Digital_Shelf_Analysis_table";


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
    name: "Share_of_search",
    layout: "/admin",
    path: "/Share_of_search",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Share_of_search,
    secondary: true,
  },
  {
    name: "Share of search",
    layout: "/admin",
    path: "/CreateNewScript",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: CreateNewScript,
    secondary: true,
  },
  {
    name: "Digital-Shelf-Analysis_table",
    layout: "/admin",
    path: "/Digital_Shelf_Analysis_table",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Digital_Shelf_Analysis_table,
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
