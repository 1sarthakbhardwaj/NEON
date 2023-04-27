import React from "react";
import { MdBarChart, MdOutlineArrowDropDown, MdHome } from "react-icons/md";
import { Box, Flex, VStack, Collapse, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';


const DummyList = ({
  collapsed,
  isDummyListOpen,
  setIsDummyListOpen,
  dummyName,
  subItems,
  subItemRoutes, // Add this new prop
}) => {
  const textColor = "#FFFFFF";
  const hoverColor = useColorModeValue("blue.500", "blue.200");

  const handleToggle = () => {
    setIsDummyListOpen(!isDummyListOpen);
  };

  return (
    <VStack align="start" spacing={1}>
      <Flex
        alignItems="center"
        py={3}
        px={collapsed ? 3 : 4}
        cursor="pointer"
        onClick={handleToggle}
        color="#FFFFFF"
        _hover={{ color: hoverColor }}
      >
        <MdHome />
        {!collapsed && (
          <Box ml={5} fontWeight="light" fontSize="sm" color={textColor}>
            {dummyName}
          </Box>
        )}

        {!collapsed && (
          <Box ml={2}>
            <MdOutlineArrowDropDown />
          </Box>
        )}
      </Flex>
      <Collapse in={isDummyListOpen}>
        <VStack align="start" spacing={1} ml={collapsed ? 4 : 8}>
          {subItems.map((subItem, index) => (
            <NavLink key={index} to={subItemRoutes[index]} activeClassName="active-link">

              <Flex
                alignItems="center"
                py={3}
                px={collapsed ? 3 : 4}
                color="gray.400"
                cursor="pointer" // Add cursor:pointer
                _hover={{ color: hoverColor }}
              >
                <Box fontWeight="light" fontSize="sm" color={textColor}>
                  {subItem}
                </Box>
              </Flex>
            </NavLink>
          ))}
        </VStack>
      </Collapse>
    </VStack>
  );
};

export default DummyList;
