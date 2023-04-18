import "./components/sidebar.css";
import React, { useState } from "react";
import MiniSidebar from "./MiniSidebar";
import CollapseButton from "./components/CollapseButton";
import DummyList from "./components/DummyList";
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
  const [isDummyListOpen, setIsDummyListOpen] = useState(false);
  const [isDummyList1Open, setIsDummyList1Open] = useState(false);
  const [isDummyList2Open, setIsDummyList2Open] = useState(false);
  const [isDummyList3Open, setIsDummyList3Open] = useState(false);
  const [isDummyList4Open, setIsDummyList4Open] = useState(false);


  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  let sidebarBg = useColorModeValue("white", "navy.800");
  let textColor = useColorModeValue("gray.500", "white");

  const closeDummyList = () => {
    setIsDummyListOpen(false);
  };

  const handleCollapse = () => {
    if (!collapsed) {
      setIsDummyList1Open(false);
      setIsDummyList2Open(false);
      setIsDummyList3Open(false);
      setIsDummyList4Open(false);
      setTimeout(() => {
        setCollapsed(!collapsed);
      }, 300);
    } else {
      setCollapsed(!collapsed);
    }
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
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList2Open}
            setIsDummyListOpen={setIsDummyList2Open}
            dummyName="AI-driven Automation"
            subItems={["Create New Script", "Scripts"]}
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList1Open}
            setIsDummyListOpen={setIsDummyList1Open}
            dummyName="Intelligence"
            subItems={["Search Insights", "Sales", "Traffic Reporting","Target & Search"]}
          />
          
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList3Open}
            setIsDummyListOpen={setIsDummyList3Open}
            dummyName="Market Insights"
            subItems={["Business Insights", "Product", "Traffic"]}
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList4Open}
            setIsDummyListOpen={setIsDummyList4Open}
            dummyName="Sponsored Solution"
            subItems={["Sponsored Search", "Sponsored Discovery","Affiliate"]}
          />

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
