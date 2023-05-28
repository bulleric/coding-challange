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
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 16 },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 auto-cols-auto auto-rows-auto gap-4">
      {listings.map((listing, index) => (
        <div key={index}>
          <GridItem />
        </div>
      ))}
    </div>

  );
};

export default Feed;