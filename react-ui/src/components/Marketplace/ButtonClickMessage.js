import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Button,
  Text,
  Progress,
  Center,
  Flex,
} from '@chakra-ui/react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';

const stepsArray = [
  { label: 'Step 1', component: FormStep1 },
  { label: 'Step 2', component: FormStep2 },
  { label: 'Step 3', component: FormStep3 },
];

function StepIndicator({ step, activeStep }) {
  const isActive = step === activeStep;
  const isCompleted = step < activeStep;

  return (
    <Flex direction="column" align="center">
      <Center
        w="32px"
        h="32px"
        borderRadius="50%"
        fontSize="sm"
        fontWeight="bold"
        bg={isActive || isCompleted ? 'teal.500' : 'gray.200'}
        color={isActive || isCompleted ? 'white' : 'gray.500'}
        position="relative"
        zIndex={1}
      >
        {step + 1}
      </Center>
      <Text mt={2} fontSize="sm" color={isCompleted ? 'gray.500' : 'black'}>
        {stepsArray[step].label}
      </Text>
    </Flex>
  );
}

export default function ButtonClickMessage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepComponent = stepsArray[activeStep].component;

  return (
    <Box width="100%" mt="120px">
      <HStack justify="space-between" mb={5} position="relative">
        <Progress
          value={(activeStep / (stepsArray.length - 1)) * 100}
          size="sm"
          colorScheme="teal"
          width="100%"
          position="absolute"
          top="16px"
          zIndex={0}
        />
        {stepsArray.map((_, index) => (
          <StepIndicator key={index} step={index} activeStep={activeStep} />
        ))}
      </HStack>
      <VStack spacing={5} alignItems="flex-start">
        <StepComponent />
        <HStack alignSelf="flex-end" spacing={4}>
          <Button
            variant="outline"
            isDisabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === stepsArray.length - 1 ? (
            <Button colorScheme="teal" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button colorScheme="teal" onClick={handleNext}>
              Next
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}
