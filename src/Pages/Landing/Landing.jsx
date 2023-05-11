import React from "react";
import { Box, Image, Text} from "@chakra-ui/react";
import Slider from "react-slick";
import bannerdata from "./banner";
import brandstoBags from "./brandstoBags";
import budgetBuys from "./budgetBuys";
import grandBrands from "./grandBrands";
import omgDeals from "./omgDeals";
import shopByCat from "./shopByCat";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 900,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Landing = () => {
  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }} mt={{base:"70px",lg:"100px",md:"90px"}}>
        {/* ======================Banner-section========================= */}
        <Box
          w={{ base: "100%", md: "100%", lg: "98%" }}
          m={"auto"}
          position={"relative"}
          height={{ base: "280px", md: "400", lg: "550px" }}
          width={"full"}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Slider */}
          <Slider {...settings}>
            {bannerdata.map((url, index) => (
              <Box key={index} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image
                  w={{ base: "100%", md: "100%", lg: "100%" }}
                  h={{ base: "200px", md: "350px", lg: "520px" }}
                  src={url}
                />
              </Box>
            ))}
          </Slider>
        </Box>
        {/* ===========================brandstoBags========================= */}

        <Box>
          <Text
            fontWeight={750}
            fontSize={{base:'16px',md:"25px",lg:"30px"}}
            margin={{ base:"20px",lg: "30px 35px" }}
            color={"gray.700"}
          >
            BEST OF MYNTRA EXCLUSIVE BRANDS
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(6,1fr)",
              lg: "repeat(9,1fr)",
            }}
          >
            {brandstoBags.map((el) => (
              <Box key={el.id}>
                <Image src={el.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        {/* ========================================================== */}
        <Box>
          <Text
            fontWeight={750}
            fontSize={{base:'16px',md:"25px",lg:"30px"}}
            margin={{ base:"20px",lg: "50px 35px" }}
            color={"gray.700"}
          >
        BRANDS AT SLASHED PRICES
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(6,1fr)",
              lg: "repeat(9,1fr)",
            }}
          >
            {budgetBuys.map((el) => (
              <Box key={el.id}>
                <Image src={el.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        {/* ================================================================== */}
        <Box>
          <Text
            fontWeight={750}
            fontSize={{base:'16px',md:"25px",lg:"30px"}}
            margin={{ base:"20px",lg: "50px 35px" }}
            color={"gray.700"}
          >
     CATEGORIES TO BAG
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(6,1fr)",
              lg: "repeat(9,1fr)",
            }}
          >
            {grandBrands.map((el) => (
              <Box key={el.id}>
                <Image src={el.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        {/* ============================================= */}
        <Box>
          <Text
            fontWeight={750}
            fontSize={{base:'16px',md:"25px",lg:"30px"}}
            margin={{ base:"20px",lg: "50px 35px" }}
            color={"gray.700"}
          >
   BEST BUYS
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(8,1fr)",
            }}
          >
            {omgDeals.map((el) => (
              <Box key={el.id}>
                <Image src={el.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        {/* ============================================================== */}
        <Box>
          <Text
            fontWeight={750}
            fontSize={{base:'16px',md:"25px",lg:"30px"}}
            margin={{ base:"20px",lg: "50px 35px" }}
            color={"gray.700"}
          >
   SHOP BY CATEGORY
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(6,1fr)",
              lg: "repeat(6,1fr)",
            }}
          >
            {shopByCat.map((el) => (
              <Box key={el.id}>
                <Image src={el.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;