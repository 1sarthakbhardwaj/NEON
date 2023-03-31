import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormStep1 = () => {
  return (
    <FormControl>
      <FormLabel>Field 1</FormLabel>
      <Input placeholder="Enter value for Field 1" />
    </FormControl>
  );
};

export default FormStep1;