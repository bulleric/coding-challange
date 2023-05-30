import { FaStar, FaMapMarkerAlt, FaShareAlt, FaHeart} from 'react-icons/fa';
const InfoRow = () => {
  return (
    <div className="flex items-center justify-between">
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
        <span className="text-sm">·</span>
        <button type="button" className="text-gray-700 text-sm underline">
          Surry Hills, New South Wales, Australien
        </button>
      </div>

      <div className="flex items-center space-x-1">
        <button type="button" className="flex items-center text-gray-700 hover:text-gray-900 underline">
          <FaShareAlt className="h-4 w-4 text-current" />
          <span className="text-xs ml-1">Share</span>
        </button>
        <button type="button" className="flex items-center text-gray-700 hover:text-gray-900 underline">
          <FaHeart className="h-4 w-4 text-current" />
          <span className="text-xs ml-1">Save</span>
        </button>
      </div>
    </div>
  );
}

export default InfoRow;