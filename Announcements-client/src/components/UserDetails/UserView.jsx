import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import animeboy from "../../assets/images/boyAnime.png";
import animegirl from "../../assets/images/girlAnime.png";

const UserView = ({ data }) => {
  const gridStyles = {
    columns: 2,
    placeItems: "center",
  };

  return (
    <Box className="userDetails-view">
      <Box className="image-container">
        <Image src={data.Gender === "FEMALE" ? animegirl : animeboy} />
      </Box>

      <Flex flexDir="column">
        <SimpleGrid {...gridStyles}>
          <Text className="userDetails-title">Name :</Text>
          <Text className="userDetails-value">{data.Name}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text className="userDetails-title">Gender :</Text>
          <Text className="userDetails-value">{data.Gender}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text className="userDetails-title">Email :</Text>
          <Text className="userDetails-value">{data.Email}</Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text className="userDetails-title">Role :</Text>
          <Text className="userDetails-value">
            {data.Admin ? "Admin" : data.POR}
          </Text>
        </SimpleGrid>
        <SimpleGrid {...gridStyles}>
          <Text className="userDetails-title">Phone :</Text>
          <Text className="userDetails-value">{data.Phone_Num}</Text>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default UserView;
