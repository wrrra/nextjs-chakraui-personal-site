import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Circle,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  VscAccount,
  VscFile,
  VscHome,
  VscPackage,
  VscSearch,
  VscThreeBars,
} from "react-icons/vsc";

const Index = () => {
  return (
    <Flex
      className="page-wrapper"
      minH="100vh"
      alignItems="start"
      bg="white.ghost"
    >
      <Flex
        as="nav"
        bg="white.white"
        h="100vh"
        pos="sticky"
        top="0"
        flexBasis="6xs"
        flexDir="column"
        alignItems="center"
        py="8"
      >
        <IconButton
          variant="ghost"
          aria-label="nav-menu"
          size="lg"
          icon={<Icon boxSize="6" as={VscThreeBars} />}
        />
        <VStack mt="8" spacing="4">
          <IconButton
            variant="ghost"
            isActive={true}
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscHome} />}
          />
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscSearch} />}
          />
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscFile} />}
          />
          <IconButton
            variant="ghost"
            aria-label="nav-menu"
            size="lg"
            icon={<Icon boxSize="6" as={VscPackage} />}
          />
        </VStack>
        <IconButton
          variant="ghost"
          mt="auto"
          aria-label="nav-menu"
          size="lg"
          icon={<Icon boxSize="6" as={VscAccount} />}
        />
      </Flex>
      <VStack as="main" flex="2">
        {[...Array(20)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptas exercitationem perspiciatis similique eius voluptatibus
            eligendi? Animi officiis doloribus velit delectus quas ratione, non
            quasi libero voluptates obcaecati autem dolore perferendis sed
            eligendi reprehenderit sapiente ex eos atque. Sed facere voluptatum
            cupiditate laboriosam nam iusto commodi iste error alias excepturi
            aspernatur dolore quia perspiciatis, exercitationem maxime
            repudiandae dicta blanditiis non, consequatur nobis inventore
            obcaecati sit. Recusandae illo labore deserunt laborum rem nobis
            quaerat, omnis accusamus modi eaque, quae fugit incidunt dolor nihil
            alias totam minus minima asperiores dolorem distinctio! Repudiandae
            facere accusamus exercitationem dolores magnam et fugiat ea
            explicabo possimus.
          </p>
        ))}
      </VStack>
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
          overflowY="auto"
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
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                nisi sequi tempore quaerat error dolorum assumenda quos sed ab
                ullam unde sit adipisci a nostrum, magnam quis ea deserunt, esse
                modi alias ad? Sit mollitia accusamus exercitationem suscipit
                cum qui hic velit, debitis tempore, ipsa ad quod dolorem. Cum
                dicta similique saepe temporibus ab sapiente voluptatibus
                numquam obcaecati. Fugiat unde repellendus deserunt dignissimos
                ipsa et, placeat amet ratione voluptate eius error aliquid earum
                expedita dolorum quas dolor consectetur blanditiis doloribus
                eveniet laboriosam accusantium quidem! Alias ipsam, quae
                obcaecati quaerat dolores incidunt expedita accusantium neque
                ipsa officiis minus dignissimos dolorum consequuntur? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur
                expedita quo quae ipsum beatae suscipit! Consequatur molestias
                blanditiis accusantium tenetur, error unde quam expedita
                mollitia! Corporis nulla culpa eius. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi, cumque. Sed similique magni
                tenetur quisquam veniam soluta inventore nemo. Voluptate sint
                neque enim iusto aliquam veritatis harum pariatur odio
                reiciendis vero quis expedita voluptates amet, similique culpa
                ratione quia aut, eius voluptas blanditiis nemo? Cumque facilis,
                doloribus eius adipisci architecto earum nemo veniam, voluptatem
                unde inventore velit rem ad, provident sed. Quibusdam odit amet
                repellendus id! Sequi, facere ratione? Molestias, tempora a unde
                ex repellat repudiandae alias voluptatibus asperiores tempore
                velit obcaecati nostrum, provident, similique placeat. Adipisci
                sit non provident saepe illum harum eius. Aperiam porro adipisci
                provident. Placeat, voluptates.
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Flex
          flexDir="column"
          justifyContent="flex-end"
          p="4"
          flexShrink="unset"
        >
          <Text size="xs" color="gray.300">
            Looking for any magic?
          </Text>
          <Button mt="2" isFullWidth={true}>
            Download CV
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;

{
  /* <Box as="main" d="flex" minH="100vh" alignItems="start" bg="white.green" >
      <Box bg="red.100" flex="1" h="100vh" pos="sticky" top="0">sticky</Box>
      <Box flex="2">
        <Stack>
          {
            [...Array(100)].map((_,i) => {
              return <Skeleton key={i} height="20px"/>
            })
          }
        </Stack>
      </Box>
      <Box flex="1">sticky</Box>
    </Box> */
}
