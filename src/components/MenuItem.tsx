import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface IMenuProps {
  menuIcon: IconType;
  menuLabel: string;
  drawerIsOpen?: boolean;
  menuIsActive?: boolean;
}

const MenuItem: React.FC<IMenuProps> = ({
  menuIcon,
  menuLabel,
  drawerIsOpen,
  menuIsActive = false,
}): JSX.Element => {
  return (
    <Flex alignItems="center" width="100%">
      <IconButton
        variant="ghost"
        isActive={menuIsActive}
        aria-label="nav-menu"
        size="lg"
        icon={<Icon boxSize="6" as={menuIcon} />}
      />{" "}
      {drawerIsOpen && (
        <Text flex="1" mx="4" _hover={{ bg: "red.200" }}>
          {menuLabel}
        </Text>
      )}
    </Flex>
  );
};

export default MenuItem;
