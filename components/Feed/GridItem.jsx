import Image from "next/legacy/image";
import Link from "next/link";

const GridItem = ({listing}) => {

  return (
    <Link href="/listing">
      <div className="mt-8 relative h-0 pb-[100%] rounded-2xl overflow-hidden">
        <Image
          src={listing.mainImage.url}
          alt="Listing mainImage"
          layout="fill"
        />
        <div
          className="absolute top-3 right-3 cursor-pointer transition-transform duration-300 transform-gpu hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Image
            src="/assets/icons/heart.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="pl-1 pt-4">
        <h4 className="text-sm font-semibold text-gray-700">
          {listing.title}
        </h4>
        <p className="text-gray-400 text-sm pt-2">
          {`${listing.location.city} / ${listing.location.country.title}` }
          <br />
          3.-8. Sept
        </p>
        <p className="text-gray-400 text-sm pt-2">
          <span className="text-gray-800 text-sm font-bold">{`${listing.currency.symbol}${listing.price}`}</span> night
        </p>
      </div>
    </Link>
  );
};

export default GridItem;
