import React, { useState, createContext } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import ShopeeLogo from '../../assets/img/MiniSidebar/Shopee_logo.svg';
import lazada from '../../assets/img/MiniSidebar/lazada.png';
import amazonlogo from '../../assets/img/MiniSidebar/amazon.png';
import instacart from '../../assets/img/MiniSidebar/instacart.png';
import walmart from '../../assets/img/MiniSidebar/walmart.png';
import tokopedia from '../../assets/img/MiniSidebar/tokopedia.png';
import bukalapak from '../../assets/img/MiniSidebar/bukalapak.png';
import tiki from '../../assets/img/MiniSidebar/tiki.jpeg';

import { Image, Avatar, Spacer } from '@chakra-ui/react';

import { Box, Icon, VStack, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { AiFillHome, AiOutlineSetting } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';


export const PlatformContext = createContext();

const MiniSidebar = () => {
  const backgroundColor = '#111827';
  const iconColor = useColorModeValue('gray.600', 'white');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const history = useHistory();

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const isSelected = (iconName) => {
    return iconName === selectedIcon;
  };

  const handleButtonClick = () => {
    history.push('/admin/add-platform');
  };
  const handleButtonClick2 = () => {
    history.push('/admin/automation');
  };

  const handleProfileClick = () => {
    history.push('/profile');
  };

  return (
    <Box
      bg={backgroundColor}
      borderRadius='5px'
      borderRight='0.1px solid #4A5568'
      w='60px'
      h='100vh'
      position='fixed'
      display={{ sm: 'none', xl: 'block' }}
    >
      <VStack
        alignItems="center"
        justifyContent="flex-start"
        spacing={8}
        h="100%"
        pt="1.5rem"
      >
        
     <Tooltip label='Add New Platform' placement='right' hasArrow>
      <Icon
        as={AddIcon}
        color={iconColor}
        boxSize={6}
        _hover={{ boxSize: 8, cursor: 'pointer' }}
        onClick={handleButtonClick}
      />
    </Tooltip>

        {/* Shopee */}
        <Tooltip label='Shopee' placement='right' hasArrow>
          <Box
            borderWidth={isSelected('Shopee') ? '3px' : '1px'}
            borderRadius='5px'
            borderColor={isSelected('Shopee') ? '#68D391' : '#303a49'}
            my="0.5rem"
            onClick={() => handleIconClick('Shopee')}
            p={isSelected('Shopee') ? '0.5rem' : '0.25rem'}
            bg={isSelected('Shopee') ? 'transparent' : '#1f2937'}
          >
            <Image
              src={ShopeeLogo}
              boxSize="1.3rem" // Reduced boxSize
              _hover={isSelected('Shopee') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
            />
          </Box>
        </Tooltip>

        {/* Amazon */}
      <Tooltip label='Amazon' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Amazon') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Amazon') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Amazon')}
          p={isSelected('Amazon') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Amazon') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={amazonlogo}
            boxSize="1.3rem"
            _hover={isSelected('Amazon') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      {/* Instacart */}
      <Tooltip label='Instacart' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Instacart') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Instacart') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Instacart')}
          p={isSelected('Instacart') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Instacart') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={instacart}
            boxSize="1.3rem"
            _hover={isSelected('Instacart') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      {/* Walmart */}
      <Tooltip label='Walmart' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Walmart') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Walmart') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Walmart')}
          p={isSelected('Walmart') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Walmart') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={walmart}
            boxSize="1.3rem"
            _hover={isSelected('Walmart') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      {/* Lazada */}
      <Tooltip label='Lazada' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Lazada') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Lazada') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Lazada')}
          p={isSelected('Lazada') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Lazada') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={lazada}
            boxSize="1.3rem"
            _hover={isSelected('Lazada') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>
    

    {/* Tokopedia */}
      <Tooltip label='Tokopedia' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Tokopedia') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Tokopedia') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Tokopedia')}
          p={isSelected('Tokopedia') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Tokopedia') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={tokopedia}
            boxSize="1.3rem"
            _hover={isSelected('Tokopedia') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      {/* Bukalapak */}
      <Tooltip label='Bukalapak' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Bukalapak') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Bukalapak') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Bukalapak')}
          p={isSelected('Bukalapak') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Bukalapak') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={bukalapak}
            boxSize="1.3rem"
            _hover={isSelected('Bukalapak') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      {/* Tiki */}
      <Tooltip label='Tiki' placement='right' hasArrow>
        <Box
          borderWidth={isSelected('Tiki') ? '3px' : '1px'}
          borderRadius='5px'
          borderColor={isSelected('Tiki') ? '#68D391' : '#303a49'}
          my="0.5rem"
          onClick={() => handleIconClick('Tiki')}
          p={isSelected('Tiki') ? '0.5rem' : '0.25rem'}
          bg={isSelected('Tiki') ? 'transparent' : '#1f2937'}
        >
          <Image
            src={tiki}
            boxSize="1.3rem"
            _hover={isSelected('Tiki') ? {} : { transform: 'scale(1.2)', cursor: 'pointer' }}
          />
        </Box>
      </Tooltip>

      <Icon
        as={AiOutlineSetting}
        color={iconColor}
        boxSize={6}
        _hover={{ boxSize: 8, cursor: 'pointer' }}
        onClick={handleButtonClick2}
      />
            
      <Tooltip label="Profile" placement="right" hasArrow>
      <Avatar
        onClick={handleProfileClick}
        name="KS"
        size="sm"
        mt="1rem"
        mb="1rem"
        cursor="pointer"
      />
    </Tooltip>

    </VStack>
    </Box>
    
    );
};

export default MiniSidebar;
      
