import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Circle,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function ProfileSection() {
  return (
    <VStack
      w="100%"
      as="section"
      bg="white.white"
      h="100vh"
      pos="sticky"
      top="0"
      py="8"
      flexBasis="lg"
      alignItems="stretch"
      spacing="8"
      flex="1"
    >
      <Flex flexDir="column" alignItems="center">
        <Circle size="100px" bg="gray.100" mb="4" />
        <Text fontWeight="800" color="green.caribbean" fontSize="lg">
          Agung Wira Putra
        </Text>
        <Text fontSize="sm" color="gray.300">
          Digital Product Analyst / Web Developer
        </Text>
      </Flex>
      <Accordion
        allowToggle
        flex="2"
        overflow="hidden"
        height="100%"
        defaultIndex={2}
      >
        {[...Array(3)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionButton>
              <Flex flex="1" textAlign="left">
                Section {i} title
              </Flex>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel height="40vh" overflowY="auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              nisi sequi tempore quaerat error dolorum assumenda quos sed ab
              ullam unde sit adipisci a nostrum, magnam quis ea deserunt, esse
              modi alias ad? Sit mollitia accusamus exercitationem suscipit cum
              qui hic velit, debitis tempore, ipsa ad quod dolorem. Cum dicta
              similique saepe temporibus ab sapiente voluptatibus numquam
              obcaecati. Fugiat unde repellendus deserunt dignissimos ipsa et,
              placeat amet ratione voluptate eius error aliquid earum expedita
              dolorum quas dolor consectetur blanditiis doloribus eveniet
              laboriosam accusantium quidem! Alias ipsam, quae obcaecati quaerat
              dolores incidunt expedita accusantium neque ipsa officiis minus
              dignissimos dolorum consequuntur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id aspernatur expedita quo quae
              ipsum beatae suscipit! Consequatur molestias blanditiis
              accusantium tenetur, error unde quam expedita mollitia! Corporis
              nulla culpa eius. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi, cumque. Sed similique magni tenetur
              quisquam veniam soluta inventore nemo. Voluptate sint neque enim
              iusto aliquam veritatis harum pariatur odio reiciendis vero quis
              expedita voluptates amet, similique culpa ratione quia aut, eius
              voluptas blanditiis nemo? Cumque facilis, doloribus eius adipisci
              architecto earum nemo veniam, voluptatem unde inventore velit rem
              ad, provident sed. Quibusdam odit amet repellendus id! Sequi,
              facere ratione? Molestias, tempora a unde ex repellat repudiandae
              alias voluptatibus asperiores tempore velit obcaecati nostrum,
              provident, similique placeat. Adipisci sit non provident saepe
              illum harum eius. Aperiam porro adipisci provident. Placeat,
              voluptates.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Flex flexDir="column" justifyContent="flex-end" p="4" flexShrink="unset">
        <Text size="xs" color="gray.300">
          Looking for any magic?
        </Text>
        <Button mt="2" isFullWidth={true}>
          Download CV
        </Button>
      </Flex>
    </VStack>
  );
}

export default ProfileSection;
