import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

// Import logo image
import logo from "assets/img/Logo/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image src={logo} h='62px' w='112px' my='32px' alt='Company Logo' />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
