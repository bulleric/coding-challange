import listingsData from './listings.json';
// Create a simplified query structure to query the listings.json first with only 10 elements
// Later implement the query functionallities for search and categorie filters

export const GET = async (req, res) => {
  if (req.method === 'GET') {
    const listingsPerPage = 10;
    const currentPage = Number(req.query?.page) || 1;

    const startIndex = (currentPage - 1) * listingsPerPage;
    const endIndex = startIndex + listingsPerPage;

    const listings = listingsData.data; 
    const slicedListings = listings.slice(startIndex, endIndex);

    const finalListings = slicedListings.map((listing) => ({
      ...listing.info
    }));

    return new Response(JSON.stringify(finalListings), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
};
