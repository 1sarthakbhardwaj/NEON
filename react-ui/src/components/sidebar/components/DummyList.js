import React from "react";
import { MdBarChart, MdOutlineArrowDropDown } from "react-icons/md";
import { Box, Flex, VStack, Collapse, useColorModeValue } from "@chakra-ui/react";

const DummyList = ({
  collapsed,
  isDummyListOpen,
  setIsDummyListOpen,
  dummyName,
  subItems,
}) => {
  const textColor = useColorModeValue("gray.500", "white");
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
        color="gray.400"
        _hover={{ color: hoverColor }}
      >
        <MdBarChart />
        {!collapsed && (
          <Box ml={4} fontWeight="semibold" color={textColor}>
            {dummyName}
          </Box>
        )}

        {!collapsed && (
          <Box ml="auto">
            <MdOutlineArrowDropDown />
          </Box>
        )}
      </Flex>
      <Collapse in={isDummyListOpen}>
        <VStack align="start" spacing={1} ml={collapsed ? 4 : 8}>
          {subItems.map((subItem, index) => (
            <Flex
              key={index}
              alignItems="center"
              py={3}
              px={collapsed ? 3 : 4}
              color="gray.400"
              _hover={{ color: hoverColor }}
            >
              <Box fontWeight="semibold" color={textColor}>
                {subItem}
              </Box>
            </Flex>
          ))}
        </VStack>
      </Collapse>
    </VStack>
  );
};

export default DummyList;
