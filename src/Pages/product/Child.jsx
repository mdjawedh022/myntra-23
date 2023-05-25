import {
    Box,
    Checkbox,
    CheckboxGroup,
    Input,
    Radio,
    Select,
    Text,
  } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataChild } from "../../redux/products/action";
import ProductsCard from "./ProductsCard";

  const Child = () => {
   const {child,isLoding,isError}=useSelector((store)=>store.productReducer)
   const dispatch=useDispatch();
// console.log(child)
   useEffect(()=>{
dispatch(getDataChild())
   },[])
    return (
      <>
        <Box w={{ base: "100%", md: "100%", lg: "100%" }} mt={{lg:"110px"}}>
          <Box m="4% auto 0.5% auto" w={{ base: "98%", md: "95%", lg: "95%" }}>
            <Box display={"flex"} alignItems="center">
              <Text>Home/</Text>
              <Text fontWeight={500}>Clothings & Apparels</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
              mt={{ lg: "30px" }}
            >
              {" "}
              <Text>FILTERS</Text>{" "}
              <Select
                w={{ base: "50%", md: "24%", lg: "15%" }}
                borderRadius="0px"
                placeholder="All"
               
              >
                <option value="">Recommended</option>
                <option value="rating_countLTH">Reviews: Low To High</option>
                <option value="rating_countHTL">Reviews: High To Low</option>
                <option value="discounted_priceLTH">Price: Low to High</option>
                <option value="discounted_priceHTL">Price: Hight to Low</option>
                {/* <option value="discount">Better Discount</option>
                <option value="rating">Customer Rating</option>
                <option value="">What,s New</option>  
                <option value="">Popularity</option> */}
              </Select>
            </Box>
          </Box>
          {/* ================================ */}
          <Box display={"flex"} w={{ base: "100%", md: "100%", lg: "100%" }}>
            <Box
              background={"#fff"}
              width={{ base: "45%", md: "25%", lg: "15%" }}
              h={"auto"}
              borderWidth={"1px"}
            >
           
              {/* =========== BRAND =============== */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
              >
                <Text fontWeight={"500"} mb={"15px"}>
                  BRAND
                </Text>
  
                <CheckboxGroup
                  colorScheme="blue"
                 
                >
                  <Checkbox value={"HELLCAT"}> HELLCAT</Checkbox>
                  <Checkbox value={"VASTRAMAY"}> VASTRAMAY</Checkbox>
                  <Checkbox value={"A.T.U.N"}> A.T.U.N</Checkbox>
                  <Checkbox value={"MANZON"}> MANZON</Checkbox>
                  <Checkbox value={"Max"}> Max</Checkbox>
                  <Checkbox value={"Urbano juniors"}> Urbano juniors</Checkbox>
                  <Checkbox value={"PLUM TREE"}> PLUM TREE</Checkbox>
                  <Checkbox value={"HOPSCOTCH"}> HERE&NOW</Checkbox>
                  <Checkbox value={"YK Diney"}> YK Diney</Checkbox>
                </CheckboxGroup>
                <Text color={"red.400"} cursor={"pointer"}>
                  +3204 more
                </Text>
              </Box>
              {/* =================category================ */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
              >
                <Text fontWeight={"500"} mb={"15px"}>
                  CATEGORIES
                </Text>
                <Checkbox value={"Shirt"}> Shirt</Checkbox>
                <Checkbox value={"Kurta"}> Kurtas</Checkbox>
                <Checkbox value={"Joggers"}> Joggers</Checkbox>
                <Checkbox value={"T-Shirt"}> T-Shirts</Checkbox>
                <Checkbox value={"Pac set"}> Pac set</Checkbox>
                <Checkbox value={"Sweatshirts"}> Sweatshirts</Checkbox>
                <Checkbox value={"Doti Pants"}> Doti Pants</Checkbox>
                <Checkbox value={"Shirt pyjamas"}> Shirt pyjamas</Checkbox>
                <Checkbox value={"Thermal Sets"}> Thermal Sets</Checkbox>
                <Text color={"red.400"} cursor={"pointer"}>
                  +81 more
                </Text>
              </Box>
  
              {/* ====================PRICE======================== */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
              >
                <Text fontWeight={"500"} mb={"15px"}>
                  PRICE
                </Text>
  
                <Checkbox value={""}> Rs.89 to Rs.13817</Checkbox>
                <Checkbox value={""}> Rs.13817 to Rs.27545</Checkbox>
                <Checkbox value={""}> Rs.27545 to Rs.41273</Checkbox>
                <Checkbox value={""}> Rs.41273 to Rs.55001</Checkbox>
              </Box>
              {/* ================COLOR===================== */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
              >
                <Text fontWeight={"500"} mb={"15px"}>
                  COLOR
                </Text>
                <Checkbox value={""}>Blue</Checkbox>
                <Checkbox value={""}> Black</Checkbox>
                <Checkbox value={""} colorScheme="pink">
                  {" "}
                  Pink
                </Checkbox>
                <Checkbox value={""}> Navy Blue</Checkbox>
                <Checkbox value={""} colorScheme="green">
                  {" "}
                  Green
                </Checkbox>
                <Checkbox value={""} colorScheme="gray">
                  {" "}
                  White
                </Checkbox>
                <Checkbox value={""} colorScheme="red">
                  {" "}
                  Red
                </Checkbox>
  
                <Text color={"red.400"} cursor={"pointer"}>
                  +39 more
                </Text>
              </Box>
              {/* =============================Discount prices========================== */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
              >
                <Text fontWeight={"500"} mb={"15px"}>
                  DISCOUNT RANGE
                </Text>
                <Radio value={""}> 10% and above</Radio>
                <Radio value={""}> 20% and above</Radio>
                <Radio value={""}> 30% and above</Radio>
                <Radio value={""}> 40% and above</Radio>
                <Radio value={""}> 50% and above</Radio>
                <Radio value={""}> 60% and above</Radio>
                <Radio value={""}> 70% and above</Radio>
                <Radio value={""}> 80% and above</Radio>
                <Radio value={""}> 90% and above</Radio>
              </Box>
              {/* ==========================DELIVERY TIME==================== */}
              <Box
                display={"flex"}
                flexDirection="column"
                borderWidth={"1px"}
                p={"20px"}
                color="gray"
              >
                <Text color="black" fontWeight={"500"} mb={"15px"}>
                  DELIVERY TIME
                </Text>
                <Input
                  placeholder="Update delivery pincode here"
                  fontSize={"11px"}
                />
                <Radio value={""}>By Tomarrow</Radio>
                <Radio value={""}>Within 2 Days</Radio>
                <Radio value={""}>Within 3 Days</Radio>
                <Radio value={""}>Within 4 Days</Radio>
                <Text fontSize={"11px"}>
                  Estimated fastest delivery time. Refer to actual delivery time
                  in Bag.
                </Text>
              </Box>
              {/* ===================== */}
            </Box>
            {/* data===map here======== */}
            <Box
            w={{lg:'83%'}}
              m={"auto"}
              display="grid"
              gap="30px"
              padding={"10px"}
              mt={'-0.5%'}
              // alignItems={"none"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(5,1fr)",
              }}
            >
              {isLoding ? (
                <h1>Loading...</h1>
              ) : isError ? (
                <h1>Something went wrong????</h1>
              ) : (
                child.map((e) => <ProductsCard key={e.id} {...e} />)
              )}
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Child;