import Image from 'next/image';

const SearchComponent = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div onClick={handleClick} className="flex items-center bg-white py-2 px-4 rounded-full shadow-md mx-auto w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 cursor-pointer">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex items-center justify-center border-r-2 border-gray-300 pr-2 px-2 min-w-0">
          <div className="text-base text-gray-700 truncate">Anywhere</div>
        </div>
        <div className="flex-1 flex items-center justify-center border-r-2 border-gray-300 pr-2 px-2 min-w-0">
          <div className="text-base text-gray-700 truncate">Any week</div>
        </div>
        <div className="flex-1 flex items-center justify-center pr-2 px-2 min-w-0">
          <div className="text-base text-gray-500 truncate">Add guests</div>
        </div>
      </div>
      <div className="ml-2 bg-red-400 p-1 rounded-full">
        <Image src="/assets/icons/magnifier.svg" alt="Search Icon" width={18} height={18} />
      </div>
    </div>
  );
};

export default SearchComponent;
