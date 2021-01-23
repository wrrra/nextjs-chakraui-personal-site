import {
  Flex,
  Icon,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { VscAccount, VscThreeBars } from "react-icons/vsc";
import CustomMenuItem from "../components/MenuItem";
import { menuData, TypeMenuData } from "../data/nav-menu";

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
        {menuData &&
          menuData.map((menuItem: TypeMenuData, index: number) => (
            <CustomMenuItem
              menuIcon={menuItem.icon}
              menuLabel={menuItem.label}
              key={index}
              menuIsActive={index == 0 && true}
              drawerIsOpen={isOpen}
            />
          ))}
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
