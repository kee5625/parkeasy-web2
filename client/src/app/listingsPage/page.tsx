"use client"

import React, { useState } from 'react'
import { useEffect } from 'react';
import { CardMedia, Typography, CardContent } from '@mui/material';

interface listingProps {
    address: string;
    description: string;
    owner: string;
    imageName: string;
}

export default function Page({address, description, owner, imageName}: listingProps) {
    const [detailsHidden, setDetailsHidden] = useState(false);

    useEffect(() => {
        setDetailsHidden(true);
    },[])

  return (
    <>
      <h1>This is the listing page:</h1>
      {detailsHidden} ?? (
        <div>
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
        </div>    
      )
      
    </>

  )
}

