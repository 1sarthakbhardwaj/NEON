import React from 'react';
import { Box } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CollapseButton = ({ isCollapsed, toggleSidebar }) => {
  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="60px"
      onClick={toggleSidebar}
      _hover={{
        backgroundColor: 'blue.200',
        cursor: 'pointer',
      }}
      position="sticky"
      bottom="0"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      {isCollapsed ? (
        <FiChevronRight size={24} />
      ) : (
        <FiChevronLeft size={24} />
      )}
    </Box>
  );
};

export default CollapseButton;
