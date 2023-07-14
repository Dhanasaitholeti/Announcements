import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import animeboy from "../../assets/images/boyAnime.png";
import animegirl from "../../assets/images/girlAnime.png";

const UserView = ({ data }) => {
  const gridStyles = {
    columns: 2,
    placeItems: "center",
  };

  return (
    <Box>
      <Box>
        <Image src={data.Gender === "FEMALE" ? animegirl : animeboy} />
      </Box>

      <Flex flexDir="column">
        <SimpleGrid {...gridStyles}>
          <Text>Name :</Text>
          <Text>{data.Name}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text>Gender :</Text>
          <Text>{data.Gender}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text>Email :</Text>
          <Text>{data.Email}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text>Role :</Text>
          <Text>{data.Admin ? "Admin" : data.POR}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text>Phone :</Text>
          <Text>{data.Phone_Num}</Text>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default UserView;
