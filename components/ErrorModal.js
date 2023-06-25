import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Divider, Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import React, { useEffect, useMemo, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiCheck } from 'react-icons/hi';

function ErrorContent({ error }) {
  return (
    <ModalBody py={5}>
      {error.status_code && (
        <Text mb={4}>
          An error occurred while communicating with the server:
        </Text>
      )}

      <Box
        p={4}
        borderColor="blackAlpha.300"
        borderWidth="1px"
        borderStyle="solid"
        boxShadow="sm"
        rounded="md"
      >
        <Text fontSize="lg" fontWeight="bold">
          {error.message}
        </Text>

        <Text>{error.description}</Text>

        {error.status_code && (
          <Text fontSize="sm" color="blackAlpha.500">
            Error Code: {error.status_code}-{error.code}
          </Text>
        )}
      </Box>
    </ModalBody>
  );
}

export default function ErrorModal({ isOpen, onClose, errors }) {
  const [currentErrorIdx, setErrorIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setErrorIdx(0);
    }
  }, [isOpen]);

  const currentError = useMemo(() => {
    if (currentErrorIdx < 0 || currentErrorIdx > errors.length - 1) {
      return {
        message: '',
        description: '',
        status_code: '',
        code: '',
      };
    }

    return errors[currentErrorIdx];
  }, [currentErrorIdx, errors]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Something went wrong</ModalHeader>
        <Divider opacity="0.1" />
        <ErrorContent error={currentError} />
        <Divider opacity="0.1" />
        <ModalFooter justifyContent="stretch">
          <ButtonGroup w="100%">
            <IconButton
              colorScheme="blackAlpha"
              disabled={currentErrorIdx === 0}
              icon={<Icon as={HiArrowLeft} h={4} w={5} />}
              onClick={() => setErrorIdx((i) => i - 1)}
            />
            <IconButton
              colorScheme="blackAlpha"
              disabled={currentErrorIdx === errors.length - 1}
              icon={<Icon as={HiArrowRight} h={5} w={5} />}
              onClick={() => setErrorIdx((i) => i + 1)}
            />
            <Button
              style={{ marginLeft: 'auto !important' }}
              colorScheme="green"
              marginLeft="auto"
              onClick={onClose}
              leftIcon={<Icon as={HiCheck} h={5} w={5} />}
            >
              Clear All Errors
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
