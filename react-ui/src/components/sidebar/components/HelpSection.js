import React from 'react';
import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  VStack,
  Portal,
} from '@chakra-ui/react';
import { AiOutlineQuestionCircle, AiOutlineMessage, AiOutlineFileText, AiOutlineWechat } from 'react-icons/ai';

const HelpSection = ({
  textColor,
  hoverColor,
  collapsed,
  openHelpCenter,
  openChatSupport,
  sidebarBg,
}) => (
  <Popover placement="right-start">
    <PopoverTrigger>
      <Flex
        alignItems="center"
        py={3}
        px={collapsed ? 5 : 6}
        cursor="pointer"
        color = {textColor}
      >
        <AiOutlineWechat />
        {!collapsed && (
          <Box ml={4} fontWeight="light" fontSize="sm" color={textColor}>
            Help
          </Box>
        )}
      </Flex>
    </PopoverTrigger>
    <Portal>
      <PopoverContent bgColor={sidebarBg} color="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Help</PopoverHeader>
        <PopoverBody>
          <VStack align="start" spacing={2}>
            <Button
              variant="link"
              fontWeight="normal"
              leftIcon={<AiOutlineQuestionCircle />}
              color="white"
              onClick={openHelpCenter}
            >
              Help Center
            </Button>
            <Button
              variant="link"
              fontWeight="normal"
              leftIcon={<AiOutlineMessage />}
              color="white"
              onClick={openChatSupport}
            >
              Chat Support
            </Button>
            <Button
              variant="link"
              fontWeight="normal"
              leftIcon={<AiOutlineFileText />}
              color="white"
            >
              Guides
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  </Popover>
);

export default HelpSection;
