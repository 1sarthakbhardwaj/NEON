// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  

  return (
    <Card py='2px'>
      <Flex
        my='auto'
        h='100%'
        w='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
        mx={{ base: "2px", md: "2px" }} // reduce horizontal margin
        px={{ base: "2px", md: "2px" }} // reduce horizontal padding
        >
        {startContent}

        <Stat my='auto' ms={startContent ? "10px" : "0px"}w="40px">
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "xl",
            }}>
            {value}
          </StatNumber>
          
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
