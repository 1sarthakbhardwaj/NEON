import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Button,
  Text,
  Center,
  Flex,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import { CheckIcon, TimeIcon } from '@chakra-ui/icons';
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
    <Flex direction="column" align="center" position="relative">
      <Center
        w="32px"
        h="32px"
        borderRadius="50%"
        fontSize="sm"
        fontWeight="bold"
        bg={isActive || isCompleted ? 'blue.500' : 'gray.200'}
        color={isActive || isCompleted ? 'white' : 'gray.500'}
        zIndex="2"
      >
        {isCompleted ? (
          <Icon as={CheckIcon} boxSize="16px" color="white" />
        ) : (
          <Icon as={TimeIcon} boxSize="16px" color="gray.500" />
        )}
      </Center>
      <Text mt={2} fontSize="sm" color={isCompleted ? 'gray.500' : 'black'}>
        {stepsArray[step].label}
      </Text>
    </Flex>
  );
}

function StepConnector({ step, activeStep }) {
  const isPreviousStepCompleted = step < activeStep;

  return (
    <Flex
      bg={isPreviousStepCompleted ? 'blue.500' : 'gray.200'}
      height="1px"
      flexGrow="1"
      alignSelf="center"
      borderRadius="full"
      zIndex="1"
      mt="-16px"
    />
  );
}

function ButtonClickMessage() {
  const [activeStep, setActiveStep] = useState(0);
  const [platform, setPlatform] = useState('');

  const handlePlatformChange = (platform) => {
    console.log(`Selected platform: ${platform}`);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      console.log('Selected platform:', platform);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAdd = () => {
    console.log('Add button clicked');
  };

  const StepComponent = stepsArray[activeStep].component;

  return (
    <Box width="100%" mt="100px">
      <HStack justifyContent="center" alignItems="center">
        {stepsArray.map((_, index) => (
          <React.Fragment key={index}>
            <StepIndicator step={index} activeStep={activeStep} />
            {index < stepsArray.length - 1 && (
              <StepConnector step={index} activeStep={activeStep} />
            )}
          </React.Fragment>
        ))}
      </HStack>
      <VStack spacing={4} alignItems="flex-start" mt={6}>
    {React.createElement(StepComponent, {
      onPlatformSelect:
        activeStep === 0 ? handlePlatformChange : undefined,
    })}
    <HStack alignSelf="center" spacing={4} mt={6}>
      <Button
        variant="outline"
        isDisabled={activeStep === 0}
        onClick={handleBack}
      >
        Back
      </Button>
      {activeStep === stepsArray.length - 1 ? (
        <>
          <Button colorScheme="blue" onClick={handleReset}>
            Reset
          </Button>
          <Button colorScheme="green" onClick={handleAdd}>
            Add
          </Button>
        </>
      ) : (
        <Button colorScheme="blue" onClick={handleNext}>
          Next
        </Button>
      )}
    </HStack>
  </VStack>
</Box>
);
}

export default ButtonClickMessage;
          
