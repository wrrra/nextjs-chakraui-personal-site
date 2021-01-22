import {
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  VscAccount,
  VscFile,
  VscHome,
  VscPackage,
  VscSearch,
  VscThreeBars,
} from "react-icons/vsc";

function Sidebar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      bg="white.white"
      h="100vh"
      pos="sticky"
      top="0"
      flexBasis={isOpen ? "xs" : "6xs"}
      flexDir="column"
      alignItems={isOpen ? "flex-start" : "center"}
      p="8"
    >
      <IconButton
        variant="ghost"
        aria-label="nav-menu"
        size="lg"
        onClick={onToggle}
        icon={<Icon boxSize="6" as={VscThreeBars} />}
      />
      <VStack mt="8" spacing="4">
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            isActive={true}
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscHome} />}
          />{" "}
          {isOpen && (
            <Text flex="1" mx="4">
              Menu Name
            </Text>
          )}
        </Flex>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscSearch} />}
          />{" "}
          {isOpen && (
            <Text flex="1" mx="4">
              Menu Name
            </Text>
          )}
        </Flex>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscFile} />}
          />{" "}
          {isOpen && (
            <Text flex="1" mx="4">
              Menu Name
            </Text>
          )}
        </Flex>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscPackage} />}
          />{" "}
          {isOpen && (
            <Text flex="1" mx="4">
              Menu Name
            </Text>
          )}
        </Flex>
      </VStack>
      <IconButton
        variant="ghost"
        mt="auto"
        aria-label="nav-menu"
        size="lg"
        icon={<Icon boxSize="6" as={VscAccount} />}
      />{" "}
    </Flex>
  );
}

export default Sidebar;
