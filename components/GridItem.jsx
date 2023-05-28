import Image from "next/legacy/image";

const GridItem = () => {
  return (
    <div className="max-w-sm mx-auto relative">
      <div className="relative h-0 pb-[100%] rounded-2xl overflow-hidden">
        <Image
          src="/assets/images/dummy-image.jpg"
          alt="Dummy Image"
          layout="fill"
        />
        <div
          className="absolute top-3 right-3 cursor-pointer transition-transform duration-300 transform-gpu hover:scale-110"
          onClick={() => {}}
        >
          <Image
            src="/assets/icons/heart.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="pt-4">
        <h5 className="text-lg font-semibold text-gray-800">
          Beautiful Apartment
        </h5>
        <p className="text-gray-400 text-base">
          Spacious apartment in the heart of the city, near famous landmarks.  <br/>
          3.-8. Sept. Private:r guestkeeper
        </p>

      </div>
    </div>
  );
};

export default GridItem;
