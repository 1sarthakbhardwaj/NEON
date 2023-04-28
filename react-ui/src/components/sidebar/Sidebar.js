import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  VStack,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import MiniSidebar from './MiniSidebar';
import { NavLink } from "react-router-dom";
import {
  renderThumb,
  renderTrack,
  renderView,
} from "components/scrollbar/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { BiHelpCircle } from "react-icons/bi";
import { FaRobot, FaBrain, FaChartBar, FaAd } from 'react-icons/fa';

import { AiOutlineQuestionCircle, AiOutlineMessage, AiOutlineFileText, AiOutlineArrowRight } from 'react-icons/ai';
import DummyList from './components/DummyList';




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
    '/Digital_Shelf_Analysis_table',
    '/sales',
    '/traffic-reporting',
    '/target-and-search'
  ];

  const openChatSupport = () => {
    chatSupportDisclosure.onOpen();
  };
  
  const openHelpCenter = () => {
    helpCenterDisclosure.onOpen();
  };
  
  const chatSupportDisclosure = useDisclosure();
  const helpCenterDisclosure = useDisclosure();


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
            icon={<FaRobot />}
            subItems={["Create New Script", "Scripts"]}
            subItemRoutes={["/admin/CreateNewScript", "/scripts"]} // Add subItemRoutes
            textColor={textColor}
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList1Open}
            setIsDummyListOpen={setIsDummyList1Open}
            dummyName="Intelligence"
            icon={<FaBrain />}
            subItems={["Share of Search", "Digital Shelf Analysis", "Sales", "Traffic Reporting","Target & Search"]}
            subItemRoutes={["/admin/Share_of_search","/admin/Digital_Shelf_Analysis_table", "/sales", "/traffic-reporting", "/target-and-search"]} // Add subItemRoutes
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList3Open}
            setIsDummyListOpen={setIsDummyList3Open}
            dummyName="Market Insights"
            icon={<FaChartBar />}
            subItems={["Business Insights", "Product", "Traffic"]}
            subItemRoutes={["/business-insights", "/product", "/traffic"]} // Add subItemRoutes
          />
          <DummyList
            collapsed={collapsed}
            isDummyListOpen={isDummyList4Open}
            setIsDummyListOpen={setIsDummyList4Open}
            dummyName="Sponsored Solution"
            icon={<FaAd />}
            subItems={["Sponsored Search", "Sponsored Discovery","Affiliate"]}
            subItemRoutes={["/sponsored-search", "/sponsored-discovery", "/affiliate"]} // Add subItemRoutes
          />
           </Scrollbars>
      </Box>

      <Popover placement="right-start">
        <PopoverTrigger>{renderHelpSection()}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Help</PopoverHeader>
          <PopoverBody>
            <VStack align="start" spacing={1}>
              <Flex alignItems="center" py={2} onClick={openChatSupport}>
                <Box fontWeight="light" fontSize="sm" color="gray.700">
                  Chat Support
                </Box>
              </Flex>
              <Flex alignItems="center" py={2} onClick={openHelpCenter}>
                <Box fontWeight="light" fontSize="sm" color="gray.700">
                  Help Center
                </Box>
              </Flex>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Modal isOpen={chatSupportDisclosure.isOpen} onClose={chatSupportDisclosure.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat Support</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* Chat Support content goes here */}</ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={helpCenterDisclosure.isOpen} onClose={helpCenterDisclosure.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Help Center</ModalHeader>
          <ModalCloseButton />
         
        </ModalContent>
      </Modal>
    
    </>
  );
};

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;