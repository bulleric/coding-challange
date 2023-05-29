import Image from "next/legacy/image";
import Link from "next/link";

const GridItem = () => {
  return (
    <Link href="/listing">
      <div className="mt-8 relative h-0 pb-[100%] rounded-2xl overflow-hidden">
        <Image
          src="/assets/images/dummy-image.jpg"
          alt="Dummy Image"
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
        <h4 className="text-lg font-semibold text-gray-700">
          Beautiful Apartment
        </h4>
        <p className="text-gray-400 text-base pt-2">
          Spacious apartment in the heart of the city, near famous landmarks.
          <br />
          3.-8. Sept
        </p>
        <p className="text-gray-400 text-base pt-2">
          <span className="text-gray-800 font-bold">€ 524</span> Night
        </p>
      </div>
    </Link>
  );
};

export default GridItem;
