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

const stepsArray = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group' },
  { label: 'Create an ad' },
];

function StepIndicator({ step, activeStep, isStepOptional }) {
  const isActive = step === activeStep;
  const isCompleted = step < activeStep;

  return (
    <Flex direction="column" align="center">
      <Center
        mt="100px"
        w="32px"
        h="32px"
        borderRadius="50%"
        fontSize="sm"
        fontWeight="bold"
        bg={isActive || isCompleted ? 'teal.500' : 'gray.200'}
        color={isActive || isCompleted ? 'white' : 'gray.500'}
      >
        {step + 1}
      </Center>
      <Text mt={2} fontSize="sm" color={isCompleted ? 'gray.500' : 'black'}>
        {stepsArray[step].label}
        {isStepOptional && <Text as="span" fontWeight="normal"> (Optional)</Text>}
      </Text>
      {step < stepsArray.length - 1 && (
        <Center w="100%" borderBottom="4px solid" borderColor="teal.500">
          <Progress value={isCompleted ? 100 : 0} w="100%" h="4px" />
        </Center>
      )}
    </Flex>
  );
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box width="100%">
      <Flex justify="space-between">
        {stepsArray.map((_, index) => (
          <StepIndicator
            key={index}
            step={index}
            activeStep={activeStep}
            isStepOptional={isStepOptional(index)}
          />
        ))}
      </Flex>
      <VStack mt={4} spacing={4} alignItems="flex-start">
        {activeStep === stepsArray.length ? (
          <>
            <Text>All steps completed - you're finished</Text>
            <HStack alignSelf="flex-end">
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </HStack>
          </>
        ) : (
          <>
            <center><Text>Step {activeStep + 1}</Text></center>
            <HStack alignSelf="flex-end" spacing={4}>
              <Button
                variant="outline"
                isDisabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                 <Button variant="outline" onClick={handleNext}>
                 Skip
               </Button>
               )}
               <Button colorScheme="teal" onClick={handleNext}>
                 {activeStep === stepsArray.length - 1 ? 'Finish' : 'Next'}
               </Button>
             </HStack>
           </>
         )}
       </VStack>
     </Box>
   );
 }