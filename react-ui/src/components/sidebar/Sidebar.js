import "./sidebar.css";
import React, { useState } from "react";
import MiniSidebar from "./MiniSidebar";
import CollapseButton from "./CollapseButton";
import { MdBarChart, MdOutlineArrowDropDown } from "react-icons/md";
import DummyList from "./DummyList";
import {
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  renderThumb,
  renderTrack,
  renderView,
} from "components/scrollbar/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";

function Sidebar(props) {
  const { routes } = props;
  const [collapsed, setCollapsed] = useState(false);

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  let sidebarBg = useColorModeValue("white", "navy.800");
  let textColor = useColorModeValue("gray.500", "white");

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <Flex
        key={key}
        alignItems="center"
        py={3}
        px={collapsed ? 3 : 4}
        as={NavLink}
        to={route.layout + route.path}
        activeClassName="active-link"
        exact
        color="gray.500"
      >
        {route.icon}
        {!collapsed && (
          <Box ml={4} fontWeight="semibold">
            {route.name}
          </Box>
        )}
      </Flex>
    ));
  };

  return (
    <>
      <MiniSidebar />
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={collapsed ? "60px" : "250px"}
        h="100vh"
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
        position="fixed"
        ml="60px"
        pt="20px"
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
          style={{ paddingTop: "1rem" }}
        >
          {renderRoutes(routes)}
          <DummyList collapsed={collapsed} />
          <CollapseButton
            isCollapsed={collapsed}
            toggleSidebar={handleCollapse}
          />
        </Scrollbars>
      </Box>
    </>
  );
}

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;
