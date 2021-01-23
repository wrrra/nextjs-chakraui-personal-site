import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const CardItem = (props: Props) => {
  return (
    <Box boxShadow="md" p="4" rounded="md">
      <Heading>Item 1</Heading>
      <Text noOfLines={2} my="4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At maiores
        fuga nam a incidunt eveniet corporis consequuntur accusantium deserunt
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        sunt ullam vero, nisi sequi a in rerum sint iusto perspiciatis excepturi
        dicta vitae magni error, laborum aspernatur maxime alias nihil!
      </Text>
      <Button float="right">Read More</Button>
    </Box>
  );
};

export default CardItem;
