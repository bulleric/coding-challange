import { FaStar } from 'react-icons/fa';

const ReserveBoxComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="border rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-1">
          <div className="text-xl font-bold mr-1">$90</div>
          <div className="text-gray-500">Night</div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <FaStar className="h-4 w-4 text-gray-700 mr-1" />
            <span className="text-sm font-medium">4.92</span>
          </div>
          <span className="text-sm">·</span>
          <button
            aria-label="601 Reviews."
            type="button"
            className="text-gray-700 text-sm underline"
          >
            601 Reviews
          </button>
        </div>
        <form className="mt-4 mb-4 border rounded-lg p-4">
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 sm:flex-grow sm:pr-2">
              <label htmlFor="check-in" className="block text-gray-700 font-bold mb-2">
                Check-in
              </label>
              <input
                type="date"
                name="check-in"
                id="check-in"
                defaultValue="2023-06-05"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full sm:w-1/2 sm:flex-grow sm:pl-2">
              <label htmlFor="check-out" className="block text-gray-700 font-bold mb-2">
                Check-out
              </label>
              <input
                type="date"
                name="check-out"
                id="check-out"
                defaultValue="2023-06-15"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">
                Gäste
            </label>
            <input
                type="number"
                name="guests"
                id="guests"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="1"
                min="1"
            />
          </div>
        </form>
        <div className="text-center">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Reserve
          </button>
        </div>

        <div className="text-center text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor auctor bibendum.
        </div>
        <hr/>
        <div className="mt-2 text-sm sm:text-base flex">
          <div className="font-bold">Gesamtbetrag:</div>
          <div className="ml-2">627 €</div>
        </div>
      </div>
    </div>
  );
};

export default ReserveBoxComponent;
