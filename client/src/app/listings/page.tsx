"use client"

import React from 'react'
import Listing from '@/components/listing'; 
import { Box, List, Paper, styled } from '@mui/material'; 
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const dummyData = {
  list1: {
    address: "1st St, USA",
    description: "Beautiful House",
    owner: "Owner 1",
    imageName: "house1.png"
  },
  list2: {
    address: "2nd St, USA",
    description: "Normal House",
    owner: "Owner 2",
    imageName: "house2.png"
  },
  list3: {
    address: "3rd St, USA",
    description: "Small House",
    owner: "Owner 3",
    imageName: "house3.png"
  },
  list4: {
    address: "4th St, USA",
    description: "Great House",
    owner: "Owner 4",
    imageName: "house4.png"
  },
  list5: {
    address: "5th St, USA",
    description: "Broken House",
    owner: "Owner 5",
    imageName: "house5.png"
  },
  list6: {
    address: "6th St, USA",
    description: "Mansion",
    owner: "Owner 6",
    imageName: "house6.png"
  }
};

const listingsArray = Object.values(dummyData);

const page = () => {

  return (
    <>
      <main className='text-center items-center flex-col justify-center'>
        <h1 className='text-3xl py-16'>Listings:</h1>
        <Box sx={{ p: 5, maxWidth: 1000, mx: 'auto' }}>
          <ResponsiveGrid />
        </Box>
      </main>
    </>
  )
};

export function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
        {listingsArray.map((listing, idx) => (
          <Grid key={idx} size={{xs: 12, sm:6, md:4}}>
            <Item>
              <Listing 
                key={idx}
                address={listing.address}
                description={listing.description}
                owner={listing.owner}
                imageName={listing.imageName}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default page
