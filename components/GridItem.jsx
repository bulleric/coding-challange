import Image from "next/image";

const GridItem = () => {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src="/assets/images/dummy-image.jpg"
          alt="Dummy Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Beautiful Home</h3>
        <p className="text-gray-600 text-sm mb-4">Entire apartment · 2 guests · 1 bedroom · 1 bed · 1 bath</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <Image
              src="/assets/user-avatar.jpg"
              alt="Host Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-gray-700 font-medium">Hosted by John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
