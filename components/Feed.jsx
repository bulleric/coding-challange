'use client';
// Feed component requirements:
//  This component is responsible for displaying a grid of listings
//  It will be rendering an array of listing in a card format and holds all 
//  the necesarry props and handlers and styles for filtering and displaying listings in a grid.
//
// Will be used pages: 
//  - GridListing
//  - Searchresults 
// Additional components which has to be extracted 
//  - SingleListing
//      - ImageCarousel?

import { useState } from 'react';
import GridItem from './GridItem';

const Feed = () => {
  const [listings, setListings] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);

  
  console.log(listings);

  return (
    <div>
      {listings.map((listing, index) => (
        <div key={index}>
          <GridItem />
        </div>
      ))}
    </div>
  );
};

export default Feed;
