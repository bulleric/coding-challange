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

import { useEffect, useState } from 'react';
import GridItem from '@components/Feed/GridItem';
import SkeletonGridItem from '@components/Feed/SkeletonGridItem';

const Feed = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch(`/api/listings?page=1`);
      const data = await response.json();
      setListings(data);
    };

    setTimeout(() => {
      fetchListings();
      setLoading(false); 
    }, 1000); 
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 auto-cols-auto auto-rows-auto gap-4">
      {loading ? ( // Show loading behavior when data is being fetched
        Array.from({ length: 10 }, (_, index) => (
          <div key={index}>
            <SkeletonGridItem /> {/* Render a skeleton loading item */}
          </div>
        ))
      ) : (
        listings.map((listing, index) => (
          <div key={index}>
            <GridItem listing={listing} /> {/* Render the actual listing item */}
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;