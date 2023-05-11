import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import "../styles/Footer.css";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};
const Footer = () => {
  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }} background={"gray.50"}>
        <Container maxW={"7xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md:2,lg:4 }} spacing={8}>
            <Stack align={"flex-start"} className="stack">
              <ListHeader>ONLINE SHOPPING</ListHeader>
              <br />
              <Link href={"#"}>Men</Link>
              <Link href={"#"}>Women</Link>
              <Link href={"#"}>Kids</Link>
              <Link href={"#"}>Home & Living</Link>
              <Link href={"#"}>Beauty</Link>
              <Link href={"#"}>Gift Cards</Link>
              <Link href={"#"}>Myntra Insider</Link>
              <br />
              <ListHeader>USEFUL LINKS</ListHeader>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Site Map</Link>
              <Link href={"#"}>Corporate Information</Link>
              <Link href={"#"}>Whitehat</Link>
            </Stack>
            <Stack align={"flex-start"} className="stack">
              <ListHeader>CUSTOMER POLICIES</ListHeader>
              <br />
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>FAQ</Link>
              <Link href={"#"}>T&C</Link>
              <Link href={"#"}>Terms Of Use</Link>
              <Link href={"#"}>Track Orders</Link>
              <Link href={"#"}>Shipping</Link>
              <Link href={"#"}>Cancellation</Link>
              <Link href={"#"}>Return</Link>
              <Link href={"#"}>Privacy policy</Link>
              <Link href={"#"}>Grievance Officer</Link>
            </Stack>
            <Stack align={"flex-start"} >
              <ListHeader>EXPERIRNCE MYNTRA APP ON MOBILE</ListHeader>
              <Flex flexDir={"column"} align={"left"} gap={"15px"}>
                <Image
                  w={{lg:"60%",base:"40%"}}
                  src={
                    "https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
                  }
                  alt=""
                />
                <Image
                  w={{lg:"60%",base:"40%"}}
                  src={
                    "https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
                  }
                  alt=""
                />
              </Flex>
              <br />
              <ListHeader>KEEP IN TOUCH</ListHeader>
              <Flex align={"center"} gap={"15px"}>
                <AiFillFacebook fontSize={"28px"} color={"gray"} />{" "}
                <AiOutlineTwitter fontSize={"32px"} color={"gray"} />{" "}
                <AiFillYoutube fontSize={"32px"} color={"gray"} />{" "}
                <ImInstagram fontSize={"25px"} color={"gray"} />
              </Flex>
            </Stack>
            <Stack align={'left'} >
              <Flex align={'center'}><Image  w={{md:"20%",lg:'15%',base:"15%"}} src={"https://www.shutterstock.com/shutterstock/photos/272718599/display_1500/stock-vector--original-vector-stamp-272718599.jpg"} alt=""/>
              <ListHeader>100% ORIGINAL <span style={{color:"gray"}}>guarantee for all products at myntra.com</span></ListHeader>
              </Flex>
              <br />
              <Flex align={'center'}><Image w={{md:"20%",lg:'15%',base:"15%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fwtSwCh8anRb-5fBg390inqXoi0B_frUQg&usqp=CAU"alt=""/>
              <ListHeader >Return within 30days <span  style={{color:"gray"}}>Of receiving your order</span></ListHeader>
              </Flex>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
