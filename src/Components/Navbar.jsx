import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { BsHeart, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ListHeader = ({ children }) => {
  return (
    <Text cursor={'pointer'} fontWeight={"500"} color={"red.300"} fontSize={"base"} mb={2}>
      {children}
    </Text>
  );
};

const Navbar = () => {
  const naviagte = useNavigate();

  // .........navigate to landing page--------------
  const handleNavigateLanding = () => {
    naviagte("/");
  };

  return (
    <>
      <Flex
        w={{ base: "100%", md: "100%", lg: "100%" }}
        alignItems={"center"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        zIndex={999}
        pos={"fixed"}
        background={"#fff"}
       
        top={0}
        p={{ base: "10px", lg: "15px 30px" }}
        gap={"30px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
          // border={'1px solid black'}
          w={{ md: "25%", base: "30%", lg: "45%" }}
          // h={'50px'}
        >
          <Image
            onClick={handleNavigateLanding}
            cursor={"pointer"}
            w={{ base: "100%", md: "55%", lg: "15%" }}
            src={"https://images.indianexpress.com/2021/01/myntra.png"}
            alt=""
          />
          <Box
            display={{ base: "none", md: "none", lg: "flex" }}
            justifyContent={"space-between"}
            fontWeight={500}
            fontSize={"15px"}
            gap={"30px"}
          >
            <Box className="dropdown">
              <Link to="/mens" >MEN</Link>
              <Box className="dropdown-content">
                <Box
                  w={"200%"}
                  display={"grid"}
                  p="30px"
                  background={"#fff"}
                  gridTemplateColumns={"repeat(5,1fr)"}
                  gap={"30px"}
                  textAlign={"left"}
                  boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}
                >
                  <Stack align={"flex-start"}>
                    <ListHeader>Topwear</ListHeader>
                    <Link href={"#"}>T-Shirts</Link>
                    <Link href={"#"}>Casual Shirts</Link>
                    <Link href={"#"}>Formal Shirts</Link>
                    <Link href={"#"}>Sweatshirts</Link>
                    <Link href={"#"}>Sweaters</Link>
                    <Link href={"#"}>Jackets</Link>
                    <Link href={"#"}>Blazers & Coats</Link>
                    <Link href={"#"}>Suits</Link>
                    <Link href={"#"}>Rain Jackets</Link>

                    <hr />
                    <ListHeader>Indian & Festive Wear</ListHeader>
                    <Link href={"#"}>Kurtas & Kurta Sets</Link>
                    <Link href={"#"}>Sherwanis</Link>
                    <Link href={"#"}>Nehru Jackets</Link>
                    <Link href={"#"}>Dhotis</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>BottomWear</ListHeader>
                    <Link href={"#"}>Jeans</Link>
                    <Link href={"#"}>Casual Trousers</Link>
                    <Link href={"#"}>Formal Trousers</Link>
                    <Link href={"#"}>Shorts</Link>
                    <Link href={"#"}>Track Pants & Joggers</Link>

                    <hr />
                    <ListHeader>Innerwear & Sleepwear</ListHeader>
                    <Link href={"#"}>Brief & Trunks</Link>
                    <Link href={"#"}>Boxers</Link>
                    <Link href={"#"}>Vests</Link>
                    <Link href={"#"}>Sleepwear & Loungewear</Link>
                    <Link href={"#"}>Thermals</Link>
                    <hr />
                    <ListHeader>Plus Size</ListHeader>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Footwear</ListHeader>
                    <Link href={"#"}>Casual Shoes</Link>
                    <Link href={"#"}>Sports Shoes</Link>
                    <Link href={"#"}>Formal Shoes</Link>
                    <Link href={"#"}>Sneakers</Link>
                    <Link href={"#"}>Sandals & Floaters</Link>
                    <Link href={"#"}>Flip Flops</Link>
                    <Link href={"#"}>Socks</Link>
                    <ListHeader>Personal Care & Groming</ListHeader>

                    <br />
                    <ListHeader>Sunglasses & Frames</ListHeader>
                    <br />
                    <ListHeader> Watches</ListHeader>
                  </Stack>

                  <Stack align={"flex-start"}>
                    <ListHeader>Sports & Active Wear</ListHeader>
                    <Link href={"#"}>Sporrts Shoes</Link>
                    <Link href={"#"}>Sports Sandals</Link>
                    <Link href={"#"}>Active T-Shirts</Link>
                    <Link href={"#"}>Track Pants & Shorts</Link>
                    <Link href={"#"}>Tracksuits</Link>
                    <Link href={"#"}>Jackets & Sweatshirts</Link>
                    <Link href={"#"}>Sports Accessories</Link>
                    <Link href={"#"}>Swimwear</Link>

                    <hr />
                    <ListHeader>Gadgets</ListHeader>
                    <Link href={"#"}>Smart wearables</Link>
                    <Link href={"#"}>Fitness Gadgets</Link>
                    <Link href={"#"}>Headphones</Link>
                    <Link href={"#"}>Speakers</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Fashion Accessories</ListHeader>
                    <Link href={"#"}>Wallets</Link>
                    <Link href={"#"}>Belts</Link>
                    <Link href={"#"}>Perfumes & Body Mists</Link>
                    <Link href={"#"}>Trimmers</Link>
                    <Link href={"#"}>Deodorants</Link>
                    <Link href={"#"}>
                      Ties,Cufflinks & Pocket Squares Accessory Gift Sets
                    </Link>
                    <Link href={"#"}>Caps & Hats</Link>
                    <Link href={"#"}>Mufflers,Scarves & Gloves</Link>
                    <Link href={"#"}>Phones Cases</Link>
                    <Link href={"#"}>Rings & Wristwear</Link>
                    <Link href={"#"}>Helmets</Link>
                    <hr />
                    <ListHeader>Bags & Backpacks</ListHeader>
                    <ListHeader> Luggages & Trolleys</ListHeader>
                  </Stack>
                </Box>
              </Box>
            </Box>

            {/* ---------------------- */}

            <Box className="dropdown">
              <Link to="/womens">WOMEN</Link>
              <Box className="dropdown-content">
              <Box
                  w={"200%"}
                  display={"grid"}
                  p="30px"
                  background={"#fff"}
                  gridTemplateColumns={"repeat(5,1fr)"}
                  gap={"30px"}
                  textAlign={"left"}
                  boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}
               >
                  <Stack align={"flex-start"}>
                    <ListHeader>Topwear</ListHeader>
                    <Link href={"#"}>T-Shirts</Link>
                    <Link href={"#"}>Casual Shirts</Link>
                    <Link href={"#"}>Formal Shirts</Link>
                    <Link href={"#"}>Sweatshirts</Link>
                    <Link href={"#"}>Sweaters</Link>
                    <Link href={"#"}>Jackets</Link>
                    <Link href={"#"}>Blazers & Coats</Link>
                    <Link href={"#"}>Suits</Link>
                    <Link href={"#"}>Rain Jackets</Link>

                    <hr />
                    <ListHeader>Indian & Festive Wear</ListHeader>
                    <Link href={"#"}>Kurtas & Kurta Sets</Link>
                    <Link href={"#"}>Sherwanis</Link>
                    <Link href={"#"}>Nehru Jackets</Link>
                    <Link href={"#"}>Dhotis</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>BottomWear</ListHeader>
                    <Link href={"#"}>Jeans</Link>
                    <Link href={"#"}>Casual Trousers</Link>
                    <Link href={"#"}>Formal Trousers</Link>
                    <Link href={"#"}>Shorts</Link>
                    <Link href={"#"}>Track Pants & Joggers</Link>

                    <hr />
                    <ListHeader>Innerwear & Sleepwear</ListHeader>
                    <Link href={"#"}>Brief & Trunks</Link>
                    <Link href={"#"}>Boxers</Link>
                    <Link href={"#"}>Vests</Link>
                    <Link href={"#"}>Sleepwear & Loungewear</Link>
                    <Link href={"#"}>Thermals</Link>
                    <hr />
                    <ListHeader>Plus Size</ListHeader>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Footwear</ListHeader>
                    <Link href={"#"}>Casual Shoes</Link>
                    <Link href={"#"}>Sports Shoes</Link>
                    <Link href={"#"}>Formal Shoes</Link>
                    <Link href={"#"}>Sneakers</Link>
                    <Link href={"#"}>Sandals & Floaters</Link>
                    <Link href={"#"}>Flip Flops</Link>
                    <Link href={"#"}>Socks</Link>
                    <ListHeader>Personal Care & Groming</ListHeader>

                    <br />
                    <ListHeader>Sunglasses & Frames</ListHeader>
                    <br />
                    <ListHeader> Watches</ListHeader>
                  </Stack>

                  <Stack align={"flex-start"}>
                    <ListHeader>Sports & Active Wear</ListHeader>
                    <Link href={"#"}>Sporrts Shoes</Link>
                    <Link href={"#"}>Sports Sandals</Link>
                    <Link href={"#"}>Active T-Shirts</Link>
                    <Link href={"#"}>Track Pants & Shorts</Link>
                    <Link href={"#"}>Tracksuits</Link>
                    <Link href={"#"}>Jackets & Sweatshirts</Link>
                    <Link href={"#"}>Sports Accessories</Link>
                    <Link href={"#"}>Swimwear</Link>

                    <hr />
                    <ListHeader>Gadgets</ListHeader>
                    <Link href={"#"}>Smart wearables</Link>
                    <Link href={"#"}>Fitness Gadgets</Link>
                    <Link href={"#"}>Headphones</Link>
                    <Link href={"#"}>Speakers</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Fashion Accessories</ListHeader>
                    <Link href={"#"}>Wallets</Link>
                    <Link href={"#"}>Belts</Link>
                    <Link href={"#"}>Perfumes & Body Mists</Link>
                    <Link href={"#"}>Trimmers</Link>
                    <Link href={"#"}>Deodorants</Link>
                    <Link href={"#"}>
                      Ties,Cufflinks & Pocket Squares Accessory Gift Sets
                    </Link>
                    <Link href={"#"}>Caps & Hats</Link>
                    <Link href={"#"}>Mufflers,Scarves & Gloves</Link>
                    <Link href={"#"}>Phones Cases</Link>
                    <Link href={"#"}>Rings & Wristwear</Link>
                    <Link href={"#"}>Helmets</Link>
                    <hr />
                    <ListHeader>Bags & Backpacks</ListHeader>
                    <ListHeader> Luggages & Trolleys</ListHeader>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* ---------------------- */}

            <Box className="dropdown">
              <Link to="/childern">KIDS</Link>
              <Box className="dropdown-content">
              <Box
                 w={"200%"}
                 display={"grid"}
                 p="30px"
                 background={"#fff"}
                 gridTemplateColumns={"repeat(5,1fr)"}
                 gap={"30px"}
                 textAlign={"left"}
                 boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}
               >
                  <Stack align={"flex-start"}>
                    <ListHeader>Topwear</ListHeader>
                    <Link href={"#"}>T-Shirts</Link>
                    <Link href={"#"}>Casual Shirts</Link>
                    <Link href={"#"}>Formal Shirts</Link>
                    <Link href={"#"}>Sweatshirts</Link>
                    <Link href={"#"}>Sweaters</Link>
                    <Link href={"#"}>Jackets</Link>
                    <Link href={"#"}>Blazers & Coats</Link>
                    <Link href={"#"}>Suits</Link>
                    <Link href={"#"}>Rain Jackets</Link>

                    <hr />
                    <ListHeader>Indian & Festive Wear</ListHeader>
                    <Link href={"#"}>Kurtas & Kurta Sets</Link>
                    <Link href={"#"}>Sherwanis</Link>
                    <Link href={"#"}>Nehru Jackets</Link>
                    <Link href={"#"}>Dhotis</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>BottomWear</ListHeader>
                    <Link href={"#"}>Jeans</Link>
                    <Link href={"#"}>Casual Trousers</Link>
                    <Link href={"#"}>Formal Trousers</Link>
                    <Link href={"#"}>Shorts</Link>
                    <Link href={"#"}>Track Pants & Joggers</Link>

                    <hr />
                    <ListHeader>Innerwear & Sleepwear</ListHeader>
                    <Link href={"#"}>Brief & Trunks</Link>
                    <Link href={"#"}>Boxers</Link>
                    <Link href={"#"}>Vests</Link>
                    <Link href={"#"}>Sleepwear & Loungewear</Link>
                    <Link href={"#"}>Thermals</Link>
                    <hr />
                    <ListHeader>Plus Size</ListHeader>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Footwear</ListHeader>
                    <Link href={"#"}>Casual Shoes</Link>
                    <Link href={"#"}>Sports Shoes</Link>
                    <Link href={"#"}>Formal Shoes</Link>
                    <Link href={"#"}>Sneakers</Link>
                    <Link href={"#"}>Sandals & Floaters</Link>
                    <Link href={"#"}>Flip Flops</Link>
                    <Link href={"#"}>Socks</Link>
                    <ListHeader>Personal Care & Groming</ListHeader>

                    <br />
                    <ListHeader>Sunglasses & Frames</ListHeader>
                    <br />
                    <ListHeader> Watches</ListHeader>
                  </Stack>

                  <Stack align={"flex-start"}>
                    <ListHeader>Sports & Active Wear</ListHeader>
                    <Link href={"#"}>Sporrts Shoes</Link>
                    <Link href={"#"}>Sports Sandals</Link>
                    <Link href={"#"}>Active T-Shirts</Link>
                    <Link href={"#"}>Track Pants & Shorts</Link>
                    <Link href={"#"}>Tracksuits</Link>
                    <Link href={"#"}>Jackets & Sweatshirts</Link>
                    <Link href={"#"}>Sports Accessories</Link>
                    <Link href={"#"}>Swimwear</Link>

                    <hr />
                    <ListHeader>Gadgets</ListHeader>
                    <Link href={"#"}>Smart wearables</Link>
                    <Link href={"#"}>Fitness Gadgets</Link>
                    <Link href={"#"}>Headphones</Link>
                    <Link href={"#"}>Speakers</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Fashion Accessories</ListHeader>
                    <Link href={"#"}>Wallets</Link>
                    <Link href={"#"}>Belts</Link>
                    <Link href={"#"}>Perfumes & Body Mists</Link>
                    <Link href={"#"}>Trimmers</Link>
                    <Link href={"#"}>Deodorants</Link>
                    <Link href={"#"}>Ties,Cufflinks & Pocket Squares Accessory Gift Sets</Link>
                    <Link href={"#"}>Caps & Hats</Link>
                    <Link href={"#"}>Mufflers,Scarves & Gloves</Link>
                    <Link href={"#"}>Phones Cases</Link>
                    <Link href={"#"}>Rings & Wristwear</Link>
                    <Link href={"#"}>Helmets</Link>
                    <hr />
                    <ListHeader>Bags & Backpacks</ListHeader>
                    <ListHeader> Luggages & Trolleys</ListHeader>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* ............................................ */}

            <Box className="dropdown">
              <Link to="/home">HOME & LIVING</Link>
              <Box className="dropdown-content">
              <Box
                 w={"180%"}
                 display={"grid"}
                 p="30px"
                 background={"#fff"}
                 gridTemplateColumns={"repeat(5,1fr)"}
                 gap={"30px"}
                 textAlign={"left"}
                 boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}
               >
                  <Stack align={"flex-start"}>
                    <ListHeader>Bed Linen & Furnishing</ListHeader>
                    <Link href={"#"}>Bed Runners</Link>
                    <Link href={"#"}>Mattress Protectors</Link>
                    <Link href={"#"}>Bedsheets</Link>
                    <Link href={"#"}>Bedding Sets</Link>
                    <Link href={"#"}>Blankets,Quilts & Dohars</Link>
                    <Link href={"#"}>Pillows & Pillow Covers</Link>
                    <Link href={"#"}>Bed Covers</Link>
                    <Link href={"#"}>Diwan Sets</Link>
                    <Link href={"#"}>Chair Pads & Covers</Link>
                    <Link href={"#"}>Sofa Covers</Link>

                    <hr />
                    <ListHeader>Flooring</ListHeader>
                    <Link href={"#"}>Floor Runners</Link>
                    <Link href={"#"}>Carpets</Link>
                    <Link href={"#"}>Floor Mats & Dhurries</Link>
                    <Link href={"#"}>Dooor Mats</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Bath</ListHeader>
                    <Link href={"#"}>Bat Towels</Link>
                    <Link href={"#"}>Hand & Face Towels</Link>
                    <Link href={"#"}>Beach Towels</Link>
                    <Link href={"#"}>Towels Set</Link>
                    <Link href={"#"}>Bath Rugs</Link>
                    <Link href={"#"}>Bath Robes</Link>
                    <Link href={"#"}>Bathroom Accessories</Link>
                    <Link href={"#"}>Shower Curtains</Link>
                    <hr />
                    <ListHeader>Lamps & Lighting</ListHeader>
                    <Link href={"#"}>Floor Lamps</Link>
                    <Link href={"#"}>Ceiling Lamps</Link>
                    <Link href={"#"}>Table Lamps</Link>
                    <Link href={"#"}>Wall Lamps</Link>
                    <Link href={"#"}>Outdoor Lamps</Link>
                    <Link href={"#"}>String Lights</Link>
                  
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Home Decor</ListHeader>
                    <Link href={"#"}>Plants & Planters</Link>
                    <Link href={"#"}>Aromas & Candles</Link>
                    <Link href={"#"}>Clocks</Link>
                    <Link href={"#"}>Mirrors</Link>
                    <Link href={"#"}>Wall Decor</Link>
                    <Link href={"#"}>Festive Decor</Link>
                    <Link href={"#"}>Pooja Essentials</Link>
                    <Link href={"#"}>Wall Shelves</Link>
                    <Link href={"#"}>Fountains</Link>
                    <Link href={"#"}>Showpieces & Vases</Link>
                    <Link href={"#"}>Ottoman</Link>
                    <br />
                    <ListHeader>Cushions & Cushion Cover</ListHeader>
                    <br />
                    <ListHeader> Curtains</ListHeader>
                  </Stack>

                  <Stack align={"flex-start"}>
                    <ListHeader>Home Gift Sets</ListHeader>
                    <br />
                    <ListHeader>Kitchen & Table</ListHeader>
                    <Link href={"#"}>Table Runners</Link>
                    <Link href={"#"}>Dinnerware & Servew</Link>
                    <Link href={"#"}>Cups and Mugs</Link>
                    <Link href={"#"}>Bakeware & Cookware</Link>
                    <Link href={"#"}>Kitchen Storage & Tools</Link>
                    <Link href={"#"}>Bar & Drinkware</Link>
                    <Link href={"#"}>Table Cover & Furnishings</Link>


                    <hr />
                    <ListHeader>Storage</ListHeader>
                    <Link href={"#"}>Bins</Link>
                    <Link href={"#"}>Hangers</Link>
                    <Link href={"#"}>Organisers</Link>
                    <Link href={"#"}>Hooks & Holders</Link>
                    <Link href={"#"}>Laundray Bags</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Brands</ListHeader>
                    <Link href={"#"}>H&M</Link>
                    <Link href={"#"}>Marks & Spencer</Link>
                    <Link href={"#"}>Home Centre</Link>
                    <Link href={"#"}>Spaces</Link>
                    <Link href={"#"}>D'Decor</Link>
                    <Link href={"#"}>Stroy@Home</Link>
                    <Link href={"#"}>Pure Home & Living</Link>
                    <Link href={"#"}>Swayam</Link>
                    <Link href={"#"}>Raymond Home</Link>
                    <Link href={"#"}>Maspar</Link>
                    <Link href={"#"}>Trident</Link>
                    <Link href={"#"}>Cortina</Link>
                    <Link href={"#"}>Random</Link>
                    <Link href={"#"}>Ellementry</Link>
                    <Link href={"#"}>ROMEE</Link>
                    <Link href={"#"}>SEJ by MJ</Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* ========================================== */}

            <Box className="dropdown">
              <Link to="/beauty">BEAUTY</Link>
              <Box className="dropdown-content">
              <Box
                 w={"180%"}
                 display={"grid"}
                 p="30px"
                 background={"#fff"}
                 gridTemplateColumns={"repeat(5,1fr)"}
                 gap={"30px"}
                 textAlign={"left"}
                 boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}
               >
                  <Stack align={"flex-start"}>
                    <ListHeader>Makeup</ListHeader>
                    <Link href={'#'}>Lipstick</Link>
                    <Link href={'#'}>Lip Gloss</Link>
                    <Link href={'#'}>Lip Liner</Link>
                    <Link href={'#'}>Mascara</Link>
                    <Link href={'#'}>Eyeliner</Link>
                    <Link href={'#'}>Kajal</Link>
                    <Link href={'#'}>Eyeshadow</Link>
                    <Link href={'#'}>Foundation</Link>
                    <Link href={'#'}>Primer</Link>
                    <Link href={'#'}>Concealer</Link>
                    <Link href={'#'}>Compact</Link>
                    <Link href={'#'}>Nail Polish</Link>
                    </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Skincare,Bath & Body</ListHeader>
                    <Link href={"#"}>Face Moisturiser</Link>
                    <Link href={"#"}>Cleanser</Link>
                    <Link href={"#"}>Masks & Peel</Link>
                    <Link href={"#"}>Sunscreen</Link>
                    <Link href={"#"}>Serum</Link>
                    <Link href={"#"}>Face Wash</Link>
                    <Link href={"#"}>Eye Cream</Link>
                    <Link href={"#"}>Lip Balm</Link>
                    <Link href={"#"}>Body Lotion</Link>
                    <Link href={"#"}>Body Wash</Link>
                    <Link href={"#"}>Body Scrub</Link>
                    <Link href={"#"}>Hand Cream</Link>
                    <hr />
                    <ListHeader>Baby Care</ListHeader>
                    <br />
                    <ListHeader>Masks</ListHeader>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Home Decor</ListHeader>
                    <Link href={"#"}>Plants & Planters</Link>
                    <Link href={"#"}>Aromas & Candles</Link>
                    <Link href={"#"}>Clocks</Link>
                    <Link href={"#"}>Mirrors</Link>
                    <Link href={"#"}>Wall Decor</Link>
                    <Link href={"#"}>Festive Decor</Link>
                    <Link href={"#"}>Pooja Essentials</Link>
                    <Link href={"#"}>Wall Shelves</Link>
                    <Link href={"#"}>Fountains</Link>
                    <Link href={"#"}>Showpieces & Vases</Link>
                    <Link href={"#"}>Ottoman</Link>
                    <br />
                    <ListHeader>Cushions & Cushion Cover</ListHeader>
                    <br />
                    <ListHeader> Curtains</ListHeader>
                  </Stack>

                  <Stack align={"flex-start"}>
                    <ListHeader>Home Gift Sets</ListHeader>
                    <br />
                    <ListHeader>Kitchen & Table</ListHeader>
                    <Link href={"#"}>Table Runners</Link>
                    <Link href={"#"}>Dinnerware & Servew</Link>
                    <Link href={"#"}>Cups and Mugs</Link>
                    <Link href={"#"}>Bakeware & Cookware</Link>
                    <Link href={"#"}>Kitchen Storage & Tools</Link>
                    <Link href={"#"}>Bar & Drinkware</Link>
                    <Link href={"#"}>Table Cover & Furnishings</Link>


                    <hr />
                    <ListHeader>Storage</ListHeader>
                    <Link href={"#"}>Bins</Link>
                    <Link href={"#"}>Hangers</Link>
                    <Link href={"#"}>Organisers</Link>
                    <Link href={"#"}>Hooks & Holders</Link>
                    <Link href={"#"}>Laundray Bags</Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <ListHeader>Brands</ListHeader>
                    <Link href={"#"}>H&M</Link>
                    <Link href={"#"}>Marks & Spencer</Link>
                    <Link href={"#"}>Home Centre</Link>
                    <Link href={"#"}>Spaces</Link>
                    <Link href={"#"}>D'Decor</Link>
                    <Link href={"#"}>Stroy@Home</Link>
                    <Link href={"#"}>Pure Home & Living</Link>
                    <Link href={"#"}>Swayam</Link>
                    <Link href={"#"}>Raymond Home</Link>
                    <Link href={"#"}>Maspar</Link>
                    <Link href={"#"}>Trident</Link>
                    <Link href={"#"}>Cortina</Link>
                    <Link href={"#"}>Random</Link>
                    <Link href={"#"}>Ellementry</Link>
                    <Link href={"#"}>ROMEE</Link>
                    <Link href={"#"}>SEJ by MJ</Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* '''''''''''''''''''''''''''''''''''''''''''' */}

            <Box className="dropdown">
              <Link to="/" >STUDIO <Tag color="red.300" mt='-20px'>New</Tag></Link>
              <Box className="dropdown-content"></Box>
            </Box>
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "70%", lg: "45%" }}>
          <InputGroup>
            <InputLeftElement
              pt={{ lg: "10px", base: "5px", md: "10px" }}
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              outline={"none"}
              _hover={{ outline: "none" }}
              // w={{ base: "", md: "", lg: "100%" }}
              type="text"
              h={{ lg: "50px", base: "40px", md: "50px" }}
              placeholder="Search for products, brand and more"
            />
          </InputGroup>
        </Box>
        <Box alignItems={"center"} gap={"30px"} display={"flex"}>
          {/* ----------------------------------- */}
          <Box className="dropdown">
            <Box
              display={{ base: "none", md: "none", lg: "flex" }}
              cursor={"pointer"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <BsPerson fontSize={"27px"} />
              <Text fontSize={"13px"} fontWeight={500}>
                Profile
              </Text>
            </Box>{" "}
            <Box className="dropdown-content">
          <Box   w={"150%"}
                 p="20px 10px"
                
                 background={"#fff"}
                 textAlign={"left"}
                 boxShadow= {"0px 8px 16px 0px rgba(0,0,0,0.2)"}>
<Text fontWeight={600} fontSize={'19px'}>Welcome</Text>
<Text>To access account and manage orders</Text>

<Button m='10px 0' background={"#fff"} borderWidth={'1px'} borderRadius={'1px'} _hover={{background:"#fff"}} color={'red.500'}>LOGIN / SIGNUP</Button>

<hr />
<Stack align={'flex-start'}>
<Link href={'#'}>Orders</Link>
<Link href={'#'}>Wishlist</Link>
<Link href={'#'}>Gift Cards</Link>
<Link href={'#'}>Contact Us</Link>
<Link href={'#'} display={'flex'}>Myntra Insider <Tag background={'red.300'} color="white">New</Tag></Link>
<hr/>
<Link href={'#'}>Myntra Credit</Link>
<Link href={'#'}>Coupons</Link>
<Link href={'#'}>Saved Cards</Link>
<Link href={'#'}>Saved VPA</Link>
<Link href={'#'}>Saved Addresses</Link>

</Stack>
          </Box>
            </Box>
          </Box>

          {/* ------------------------ */}
          <Box
            display={{ base: "none", md: "none", lg: "flex" }}
            cursor={"pointer"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <BsHeart fontSize={"23px"} />
            <Text fontSize={"13px"} fontWeight={500}>
              Wishlist
            </Text>
          </Box>
          {/* ------------------------- */}

          <Box
            cursor={"pointer"}
            display={{ base: "none", md: "flex", lg: "flex" }}
            flexDir={"column"}
            alignItems={"center"}
          >
            <HiOutlineShoppingBag fontSize={"27px"} />
            <Text fontSize={"13px"} fontWeight={500}>
              Bag
            </Text>
          </Box>
        </Box>
        {/* -------------humbur=============== */}
        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <HamburgerIcon fontSize={"25px"} />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
