import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material'
// import Sidebar from './Sidebar';
// import Videos from './Videos';
import { Sidebar, Videos} from './'

const Feed = () => {
  return (
    <Stack 
      sx={{ 
        flexDirection: { 
          xs: "column", 
          md: "row" } 
      }}
    >
      <Box 
        sx={{ 
          height: { xs: "92vh", md: "92vh" }, 
            borderRight: "1px solid #3d3d3d", 
            px: { xs: 0, md: 2 } 
        }}
      >
        <Sidebar/>
        <Typography 
          className='copyright'
          variant='body2'
          sx={{
            mt: 1.5,
            color: '#fff'
          }}
        >
          Copyright 2024 portfolio project
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight= 'bold' mb={2} sx={{color: 'white'}}>
          New <span style= {{color: '#F31503'}}>videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed