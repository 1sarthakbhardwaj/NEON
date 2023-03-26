import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import ShopeeLogo from '../../assets/img/MiniSidebar/Shopee_logo.svg';
import lazada from '../../assets/img/MiniSidebar/lazada.png';
import amazonlogo from '../../assets/img/MiniSidebar/amazon.svg';
import instacart from '../../assets/img/MiniSidebar/instacart.png';
import walmart from '../../assets/img/MiniSidebar/walmart.png';
import tokopedia from '../../assets/img/MiniSidebar/tokopedia.svg';
import bukalapak from '../../assets/img/MiniSidebar/bukalapak.png';
import tiki from '../../assets/img/MiniSidebar/tiki.jpeg';



import { Image } from '@chakra-ui/react';
import { Box, Icon, VStack, useColorModeValue, Tooltip} from '@chakra-ui/react';
import { AiFillHome, AiOutlineSetting } from 'react-icons/ai';

const MiniSidebar = () => {
  const backgroundColor = useColorModeValue('white', 'navy.800');
  const iconColor = useColorModeValue('gray.600', 'white');

  return (
    <Box
    bg={backgroundColor}
    borderRadius='5px'
    borderRight='1px solid #4A5568'
    w='60px'
    h='100vh'
    position='fixed'
    display={{ sm: 'none', xl: 'block' }}
  >
    <VStack
      alignItems="center"
      justifyContent="flex-start" // Change this line
      spacing={8}
      h="100%"
      pt="1.5rem" // Add this line to add some margin at the top
    >

    <Tooltip label='Add New Platform' placement='right' hasArrow>
    <Icon
          as={AddIcon}
          color={iconColor}
          boxSize={6}
          _hover={{ boxSize: 8, cursor: 'pointer' }}
        />
    </Tooltip>

    <Tooltip label='Shopee' placement='right' hasArrow>
    <Image src={ShopeeLogo} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" /> 
    </Tooltip>
    <Tooltip label='Amazon' placement='right' hasArrow>
    <Image src={amazonlogo} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip>
    <Tooltip label='Instacart' placement='right' hasArrow>
    <Image src={instacart} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip>
    <Tooltip label='Walmart' placement='right' hasArrow>           
    <Image src={walmart} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip>
    <Tooltip label='Lazada' placement='right' hasArrow>
    <Image src={lazada} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" /> 
    </Tooltip>  
    <Tooltip label='Tokopedia' placement='right' hasArrow>   
    <Image src={tokopedia} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip>
    <Tooltip label='Bukalapak' placement='right' hasArrow>   
    <Image src={bukalapak} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip> 
    <Tooltip label='Tiki' placement='right' hasArrow>   
    <Image src={tiki} boxSize="2rem" _hover={{ transform: 'scale(1.8)', cursor: 'pointer' }} mt="1rem" />
    </Tooltip> 
    
        <Icon
          as={AiOutlineSetting}
          color={iconColor}
          boxSize={6}
          _hover={{ boxSize: 8, cursor: 'pointer' }}
        />
        {/* Add more icons as needed */}
      </VStack>
    </Box>
  );
};

export default MiniSidebar;
