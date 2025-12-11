import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center gap-4">
            <div className="w-56 h-8 rounded-sm bg-gray-200"></div>
            <div className="w-20 h-8 rounded-sm bg-gray-200"></div>
        </div>
        <button className="w-52 h-8 rounded-sm bg-gray-200"></button>
        <div className="flex flex-wrap gap-4 p-2 justify-center">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
        </div>
    </div>
  );
};

export default Shimmer;
