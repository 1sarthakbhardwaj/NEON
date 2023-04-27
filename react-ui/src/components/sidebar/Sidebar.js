import "./components/sidebar.css";
import React, { useState } from "react";
import MiniSidebar from "./MiniSidebar";
import CollapseButton from "./components/CollapseButton";
import DummyList from "./components/DummyList";
import {
  Box,
  Flex,
  useColorModeValue,
  Collapse,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
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
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineQuestionCircle, AiOutlineMessage, AiOutlineFileText, AiOutlineArrowRight } from 'react-icons/ai';



function Sidebar(props) {
  const { routes } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [isDummyListOpen, setIsDummyListOpen] = useState(false);
  const [isDummyList1Open, setIsDummyList1Open] = useState(false);
  const [isDummyList2Open, setIsDummyList2Open] = useState(false);
  const [isDummyList3Open, setIsDummyList3Open] = useState(false);
  const [isDummyList4Open, setIsDummyList4Open] = useState(false);
  const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  let sidebarBg = "#111827";
  let textColor = "#FFFFFF";

  const closeDummyList = () => {
    setIsDummyListOpen(false);
  };

  const hoverColor = useColorModeValue("blue.500", "blue.200");


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

  const toggleHelpPopup = () => {
    setIsHelpPopupOpen(!isHelpPopupOpen);
  };

  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <Flex
        key={key}
        alignItems="right"
        py={3}
        px={collapsed ? 3 : 4}
        as={NavLink}
        to={route.layout + route.path}
        activeClassName="active-link"
        exact
        color={textColor}
      >
        {route.icon}
        {!collapsed && (
          <Box ml={4} fontWeight="semibold" style={{ color: textColor }}>
            {route.name}
          </Box>
        )}
      </Flex>
    ));
  };

  const renderHelpSection = () => {
    return (
      <Flex
        alignItems="center"
        py={3}
        px={collapsed ? 3 : 4}
        cursor="pointer"
        _hover={{ color: hoverColor }}
      >
        <BiHelpCircle />
        {!collapsed && (
          <Box ml={4} fontWeight="light" fontSize="sm" color={textColor}>
            Help
          </Box>
        )}
        {!collapsed && (
          <Box ml="auto">
            <AiOutlineArrowRight />
          </Box>
        )}
      </Flex>
    );
  };

  const subItemRoutes = [
    '/share-of-search',
    '/sales',
    '/traffic-reporting',
    '/target-and-search'
  ];


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
          {/* DummyLists */}
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList2Open}
            setIsDummyListOpen={setIsDummyList2Open}
            dummyName="AI-driven Automation"
            subItems={["Create New Script", "Scripts"]}
            subItemRoutes={["/admin/automation", "/scripts"]} // Add subItemRoutes
            textColor={textColor}
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList1Open}
            setIsDummyListOpen={setIsDummyList1Open}
            dummyName="Intelligence"
            subItems={["Share of Search", "Sales", "Traffic Reporting","Target & Search"]}
            subItemRoutes={["/admin/Share_of_search", "/sales", "/traffic-reporting", "/target-and-search"]} // Add subItemRoutes
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList3Open}
            setIsDummyListOpen={setIsDummyList3Open}
            dummyName="Market Insights"
            subItems={["Business Insights", "Product", "Traffic"]}
            subItemRoutes={["/business-insights", "/product", "/traffic"]} // Add subItemRoutes
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList4Open}
            setIsDummyListOpen={setIsDummyList4Open}
            dummyName="Sponsored Solution"
            subItems={["Sponsored Search", "Sponsored Discovery","Affiliate"]}
            subItemRoutes={["/sponsored-search", "/sponsored-discovery", "/affiliate"]} // Add subItemRoutes
          />



            <Popover placement="right-start">
          <PopoverTrigger>{renderHelpSection()}</PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Help</PopoverHeader>
            <PopoverBody>
              <VStack align="start" spacing={1}>
                <Flex alignItems="center" py={2}>
                  <Box fontWeight="light" fontSize="sm" color="gray.700">
                    Chat Support
                  </Box>
                </Flex>
                <Flex alignItems="center" py={2}>
                  <Box fontWeight="light" fontSize="sm" color="gray.700">
                    Help Center
                  </Box>
                </Flex>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

<CollapseButton
            isCollapsed={collapsed}
            toggleSidebar={handleCollapse}
          />
        </Scrollbars>
        <VStack
          position="absolute"
          bottom="20px"
          spacing={4}
          onClick={toggleHelpPopup}
        >
          <Flex alignItems="center">
          <Box as={AiOutlineQuestionCircle} w="24px" h="24px" />
          
            {!collapsed && (
              <Box fontSize="sm" ml={2}>
                Help
              </Box>
            )}
            {!collapsed && (
              <Box ml={2}>
                <AiOutlineArrowRight />
              </Box>
            )}
          </Flex>
        </VStack>
        <Collapse in={isHelpPopupOpen} style={{ position: "absolute", bottom: "60px", right: "5px" }}>
          <VStack
            bg={sidebarBg}
            boxShadow={shadow}
            p={4}
            spacing={4}
            borderRadius="md"
            textAlign="left"
          >
            <Flex alignItems="center" color={textColor}>
              <AiOutlineMessage />
              <Box ml={2}>Chat Support</Box>
            </Flex>
            <Flex alignItems="center" color={textColor}>
              <AiOutlineFileText />
              <Box ml={2}>Help Center</Box>
            </Flex>
          </VStack>
        </Collapse>
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
