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
      <SkeletonCircle size={"150px"} />
      <Skeleton display={"flex"} flexDir={"column"} gap={2}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </Skeleton>
    </Box>
  );
};
