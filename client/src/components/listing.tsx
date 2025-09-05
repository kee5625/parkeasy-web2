import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';

interface ListingProps {
    address: string;
    description: string;
    owner: string;
    imageName: string;
}

export default function Listing({address, description, owner, imageName}: ListingProps) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
      <Link href="/listingsPage">
        <CardActionArea>
          <CardHeader
            avatar= {
                <CardMedia
                component="img"
                sx={{ width: 50, height: 50, objectFit: 'cover' }}
                image="/defaultPFP.png"
                />
            }
            title="Property Listing"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={imageName}
            alt="House images"
          />
          <CardContent>
            <Typography variant="body2" sx={{   color: 'text.secondary' }}>
                Address: {address}
            </Typography>
            <Typography variant="body2" sx={{   color: 'text.secondary' }}>
                Description: {description}
            </Typography>
            <Typography variant="body2" sx={{   color: 'text.secondary' }}>
                Hosted By: {owner}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/*
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>*/}
          </CardActions>
        </CardActionArea>
      </Link>
      
      
    </Card>
  );
}