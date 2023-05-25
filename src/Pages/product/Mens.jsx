import {
    Box,
    Checkbox,
    CheckboxGroup,
    Input,
    Radio,
    Select,
    Text,
  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/products/action";
import ProductsCard from "./ProductsCard";
import { useLocation, useSearchParams } from "react-router-dom";

  const Mens = () => {
    const dispatch=useDispatch();
   const {product,isLoding,isError}=useSelector((store)=>store.productReducer)
   const location=useLocation();
   const [searchParams,setSearchParams]=useSearchParams();
  const initialState=searchParams.getAll("cat")
  const initialOrder=searchParams.get("order");
  const initialBrand=searchParams.getAll("brand")
  const [cat,setCat]=useState(initialState||[]);
  const [order,setOrder]=useState(initialOrder||"");
  const [brand,setBrand]=useState(initialBrand||[]);
  // console.log(product)
// -----------------------------cat filter-------------------------
  const handleFilter=(e)=>{
    let newCat=[...cat]


if(newCat.includes(e.target.value)){
  newCat.splice(newCat.indexOf(e.target.value),1);

}else{
  newCat.push(e.target.value)
}
setCat(newCat)
}

// ------------------------------------brand filter-----------------------
const handleFilterBrand=(e)=>{
  let newBrand=[...brand]

  if(newBrand.includes(e.target.value)){
   newBrand.splice(newBrand.indexOf(e.target.value),1)
  }else {
    newBrand.push(e.target.value)
  }
  setBrand(newBrand)
}
   useEffect(()=>{
    const order=searchParams.get("order");
   let paramObj={
    params:{
      cat:searchParams.getAll("cat"),
      brand:searchParams.getAll("brand"),
      _sort:order && "discounted_price",
      _order:order
    },
  }
 
dispatch(getData(paramObj))
   },[dispatch, location.search, searchParams])


   useEffect(() => {
    const params = {
      cat,
      brand,
    };
    order && (params.order = order);
    setSearchParams(params);

    console.log(params,order)
  }, [brand, cat, order, setSearchParams]);


  const handleSort = (e) => {
  
      setOrder(e.target.value);
    
  };
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
                // placeholder="All"
                onChange={handleSort}
               
              >
                <option value="">Sorting by Price</option>
                {/* <option value="rating_countLTH">Reviews: Low To High</option>
                <option value="rating_countHTL">Reviews: High To Low</option> */}
                <option value="asc">Low to High</option>
                <option value="desc"> Hight to Low</option>
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
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("HRX Hrithik Roshan")} value={"HRX Hrithik Roshan"}> HRX</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("H&M")} value={"H&M"}> H&M</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("IVOC")} value={"IVOC"}> IVOC</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Puma")} value={"Puma"}> Puma</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Levis")} value={"Levis"}> Levis</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Lee")} value={"Lee"}> Lee</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("KRA")} value={"KRA"}> KRA</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("High Star")} value={"High Star"}> High Star</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Roadster")} value={"Roadster"}> Roadster</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("WAROGN")} value={"WAROGN"}> WAROGN</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("DENNISON")} value={"DENNISON"}> DENNISON</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("HERE&NOW")} value={"HERE&NOW"}> HERE&NOW</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Dennis Lingo")} value={"Dennis Lingo"}> Dennis Lingo</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("HIGHLANDER")} value={"HIGHLANDER"}> HIGHLANDER</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("LOCOMOTIVE")} value={"LOCOMOTIVE"}> LOCOMOTIVE</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("United Benetton")} value={"United Benetton"}> United Benetton</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Mast & Harbour")} value={"Mast & Harbour"}> Mast & Harbour</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Urbano Fashion")} value={"Urbano Fashion"}> Urbano Fashion</Checkbox>
                  <Checkbox onChange={handleFilterBrand} checked={brand.includes("Indian Garage Co")} value={"Indian Garage Co"}> Indian Garage Co</Checkbox>
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
                <Checkbox onChange={handleFilter} checked={cat.includes("T-Shirt")} value={"T-Shirt"}> T-shirts</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Jogger")} value={"Jogger"}>Joggers</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Jeans")} value={"Jeans"}> Jeans</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Shirt")} value={"Shirt"}> Shirts</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Trouser")} value={"Trouser"}> Trousers</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Chinos")} value={"Chinos"}> Chinos</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Pants")} value={"Pants"}> Pants</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Sweatshirt")} value={"Sweatshirt"}> Sweatshirt</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Jacket")} value={"Jacket"}> Jackets</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Short")} value={"Short"}> Shorts</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Track suit")} value={"Track suit"}> Track suit</Checkbox>
                <Checkbox onChange={handleFilter} checked={cat.includes("Track pant")} value={"Track pant"}> Track pants</Checkbox>
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
                product.map((e) => <ProductsCard key={e.id} {...e} />)
              )}
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Mens;