import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

export const AnnouncementLoadings = ({ times }) => {
  const arr = new Array(times || 5).fill(10);
  return (
    <>
      {arr.map((i, index) => (
        <Flex
          justifyContent={"space-between"}
          boxShadow={"lg"}
          p={5}
          key={index}
          mb={2}
        >
          <Box w={"70%"}>
            <Skeleton>
              <Heading>Heading is Here</Heading>
            </Skeleton>
            <SkeletonText skeletonHeight={3} noOfLines={2} mt={2} />
          </Box>
          <Flex flexDir={"column"} gap={2}>
            <Skeleton>
              <Button>remove</Button>
            </Skeleton>
            <Skeleton>
              <Button>Show</Button>
            </Skeleton>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export const UserDeatilloading = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent="center">
        <SkeletonCircle size={"150px"} />
      </Flex>
      <SkeletonText noOfLines={10} skeletonHeight={5} mt={5} />
    </Box>
  );
};

export const AnnouncementViewLoading = () => {
  return (
    <Box
      boxShadow={"dark-lg"}
      p={10}
      mt={5}
      borderRadius={"10px"}
      minH={"75vh"}
    >
      <Skeleton w="30%">
        <Heading>Hello</Heading>
      </Skeleton>
      <SkeletonText mt={10} noOfLines={16} skeletonHeight={5} />
    </Box>
  );
};
