import React, { useState } from "react";
import MiniSidebar from './MiniSidebar';
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Link,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { renderThumb, renderTrack, renderView } from "components/scrollbar/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";

function Sidebar(props) {
  const { routes } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarWidth = isCollapsed ? "60px" : "250px";

  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <VStack key={key} alignItems="start" spacing={1}>
        <Link as={NavLink} to={route.layout + route.path} activeClassName="active-link" exact>
          <Flex alignItems="center" px={isCollapsed ? 3 : 4} py={3}>
            {route.icon}
            {!isCollapsed && (
              <Box ml={4} fontWeight="semibold">
                {route.name}
              </Box>
            )}
          </Flex>
        </Link>
      </VStack>
    ));
  };

  return (
    <>
      <MiniSidebar />
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={sidebarWidth}
        h="100vh"
        minH="100%"
        mt={4}
        pt={4}
        overflowX="hidden"
        boxShadow={shadow}
        position="fixed"
        ml="60px"
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          {renderRoutes(routes)}
        </Scrollbars>
        <Flex position="absolute" bottom="10rem" left="50%" transform="translateX(-50%)">
          <IconButton
            aria-label="Toggle sidebar"
            icon={<FiMenu />}
            onClick={toggleSidebar}
            size="sm"
            colorScheme="blue"
          />
        </Flex>
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
