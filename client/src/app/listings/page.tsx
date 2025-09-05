"use client"

import React from 'react'
import Listing from '@/components/listing'; 
import { Box, List, Paper, styled, Typography, Backdrop, Modal, Button } from '@mui/material'; 
import { useSpring, animated } from '@react-spring/web';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

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

interface FadeProps {
  children: React.ReactElement<any>;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
          {listingsArray.map((listing, idx) => (
            <Grid key={idx} size={{xs: 12, sm:6, md:4}}>
              <Item>
                <CardActionArea onClick={handleOpen}>
                  <Listing 
                    key={idx}
                    address={listing.address}
                    description={listing.description}
                    owner={listing.owner}
                    imageName={listing.imageName}
                  />
                </CardActionArea>
                
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
    
  )
}

export default page
