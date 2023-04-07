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
        backgroundColor: 'gray.200',
        cursor: 'pointer',
      }}
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
