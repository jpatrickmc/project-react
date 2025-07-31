import { react } from 'react';

import ListingCard from './ListingCard';

const ListingList = ({ listings }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <div className='text-center text-gray-500'>No listings found</div>
      )}
    </div>
  );
};

export default ListingList;
