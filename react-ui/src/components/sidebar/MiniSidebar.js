import React, { useState } from 'react';
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
import { Box, Icon, VStack, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { AiFillHome, AiOutlineSetting } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const MiniSidebar = () => {
  const backgroundColor = useColorModeValue('white', 'navy.800');
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
            borderWidth={isSelected('Shopee') ? '3px' : '0px'}
            borderRadius='5px'
            borderColor='#68D391'
            my="0.5rem"
            onClick={() => handleIconClick('Shopee')}
            p={isSelected('Shopee') ? '0.25rem' : '0px'} // Add padding when selected
          >
            <Image
              src={ShopeeLogo}
              boxSize="2rem"
              _hover={isSelected('Shopee') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }} // Remove hover effect when selected

            />
          </Box>
        </Tooltip>

        {/* Amazon */}
        <Tooltip label='Amazon' placement='right' hasArrow>
          <Box
            borderWidth={isSelected('Amazon') ? '3px' : '0px'}
            borderRadius='5px'
            borderColor='#68D391'
            my="0.5rem"
            onClick={() => handleIconClick('Amazon')}
            p={isSelected('Amazon') ? '0.25rem' : '0px'}
          >
            <Image
              src={amazonlogo}
              boxSize="2rem"
              _hover={isSelected('Amazon') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }} // Remove hover effect when selected
              />
              </Box>
              </Tooltip>

            {/* Instacart */}
    <Tooltip label='Instacart' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Instacart') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Instacart')}
        p={isSelected('Instacart') ? '0.25rem' : '0px'}
      >
        <Image
          src={instacart}
          boxSize="2rem"
          _hover={isSelected('Instacart') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
        />
      </Box>
    </Tooltip>

    {/* Walmart */}
    <Tooltip label='Walmart' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Walmart') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Walmart')}
        p={isSelected('Walmart') ? '0.25rem' : '0px'}
      >
        <Image
          src={walmart}
          boxSize="2rem"
          _hover={isSelected('Walmart') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
        />
      </Box>
    </Tooltip>

    {/* Lazada */}
    <Tooltip label='Lazada' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Lazada') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Lazada')}
        p={isSelected('Lazada') ? '0.25rem' : '0px'}
      >
        <Image
          src={lazada}
          boxSize="2rem"
          _hover={isSelected('Lazada') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
        />
      </Box>
    </Tooltip>

    {/* Tokopedia */}
    <Tooltip label='Tokopedia' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Tokopedia') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Tokopedia')}
        p={isSelected('Tokopedia') ? '0.25rem' : '0px'}
      >
        <Image
          src={tokopedia}
          boxSize="2rem"
          _hover={isSelected('Tokopedia') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
        />
      </Box>
    </Tooltip>

    {/* Bukalapak */}
    <Tooltip label='Bukalapak' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Bukalapak') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Bukalapak')}
        p={isSelected('Bukalapak') ? '0.25rem' : '0px'}
      >
        <Image
          src={bukalapak}
          boxSize="2rem"
          _hover={isSelected('Bukalapak') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
          />
          </Box>
          </Tooltip>

        {/* Tiki */}
        <Tooltip label='Tiki' placement='right' hasArrow>
      <Box
        borderWidth={isSelected('Tiki') ? '3px' : '0px'}
        borderRadius='5px'
        borderColor='#68D391'
        my="0.5rem"
        onClick={() => handleIconClick('Tiki')}
        p={isSelected('Tiki') ? '0.25rem' : '0px'}
      >
        <Image
          src={tiki}
          boxSize="2rem"
          _hover={isSelected('Tiki') ? {} : { transform: 'scale(1.8)', cursor: 'pointer' }}
        />
      </Box>
    </Tooltip>

    <Icon
      as={AiOutlineSetting}
      color={iconColor}
      boxSize={6}
      _hover={{ boxSize: 8, cursor: 'pointer' }}
    />
    </VStack>
    </Box>
    
    );
};

export default MiniSidebar;
      
