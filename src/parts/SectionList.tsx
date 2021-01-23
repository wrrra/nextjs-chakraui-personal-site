import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
  sectionName: JSX.Element | string;
  appendElement: React.FC | JSX.Element | string;
}

const SectionList = (props: Props) => {
  const { children, sectionName, appendElement } = props;
  return (
    <Box w="100%" px="8">
      <Flex justifyContent="space-between">
        <Heading>{sectionName}</Heading>
        <Box>{appendElement}</Box>
      </Flex>
      <VStack>{children}</VStack>
    </Box>
  );
};

export default SectionList;
