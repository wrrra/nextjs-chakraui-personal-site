import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import ProfileSection from "../parts/ProfileSection";
import Sidebar from "../parts/Sidebar";

type Props = {
  children: any;
};

const Main: React.FC<Props> = ({ children }): React.ReactElement => {
  return (
    <Flex
      className="page-wrapper"
      minH="100vh"
      alignItems="start"
      bg="white.ghost"
    >
      <Sidebar />
      <VStack as="main" flex="2" minH="100vh">
        {children}
      </VStack>
      <ProfileSection />
    </Flex>
  );
};

export default Main;
