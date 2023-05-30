"use client";
// Listing page requriements
// - Header and title with relevant content (placeholders are fine)
// - Images and easy way to view them all
// - Home title with Host image
// - Description section
// - Amenities Section
// - Location Section
// - Reservation widget sticky on the right side beneath images (does not have to be functional, but should show check in and check out dates).
// - Well designed and responsive on mobile
{/* 
    Mobile View
        ** Navbar back button
        ** Image on top
        ** Title
        ** Row with Star, rating, x reviews, superhost, location
        ** Row with Star, rating, x reviews, superhost, location
        ** Reserver footer
        * Info row
        * headding 2 rooms
        * icon rows
        * about the guestkeeper
        * about the location
        * where you can sleep 
        * the offerings of the location
        * map 
        * location description
        * calender
        * reviews
        * additional info section
    Desktop view
        ** Title
        ** Row with Star, rating, x reviews, superhost, location, share and save
        ** Image gallery    
            * 1 image on the left
            * 4 images on the right ( grid )
        ** Headline room in a home hostet by <hostname> (AvatarImage)
        ** Icon row horizontal ( king bed, Dedicated bathroom... )
        ** icon row vertical ( airbnb plus, room in a home...)
        ** right side reserve box 
        * about the location
        * where you can sleep 
        * the offerings of the location
        * map 
        * location description
        * calender
        * reviews
        * additional info section
*/}

import React from 'react'
import ImageGrid from '@components/Listing/ImageGrid';
import InfoRow from '@components/Listing/InfoRow';

const images = [
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    alt: 'Two each of gray, white, and black shirts laying flat.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    alt: 'Model wearing plain black basic tee.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    alt: 'Model wearing plain gray basic tee.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    alt: 'Model wearing plain white basic tee.',
  }
]

const Listing = () => {
  return (
    <section className="mt-24 sm:mt-25 px-6 sm:px-20">
        <h1 className="font-thin text-3xl text-gray-700 mb-2"> 
          Stilvolles Terrassenhaus in Surry Hills
         </h1>
         <InfoRow/>
        <ImageGrid images={images}/>
    </section>

  )
}

export default Listing;