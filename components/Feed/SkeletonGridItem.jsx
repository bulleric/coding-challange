const SkeletonGridItem = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="bg-gray-200 mb-4 mt-8 relative h-10 pb-[100%] rounded-2xl overflow-hidden"/>
      <div className="h-4 bg-gray-200 w-1/2 mb-2" />
      <div className="h-4 bg-gray-200 w-1/1 mb-2" />
      <div className="h-4 bg-gray-200 w-1/2" />
    </div>
  );
};

export default SkeletonGridItem;