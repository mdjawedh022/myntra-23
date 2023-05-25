
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from "../Pages/Landing/Landing" 
import Womens from '../Pages/product/Womens'
import Mens from '../Pages/product/Mens'
import Child from '../Pages/product/Child'
import Home from '../Pages/product/Home'
import Beauty from '../Pages/product/Beauty'
const AllRoutes = () => {
  return (
    <>
      <Box>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/childern' element={<Child/>}/>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/beauty' element={<Beauty/>}/> 
        </Routes>
      </Box>
    </>
  )
}

export default AllRoutes
