function Banner() {
  return (
    <div className="flex items-center justify-between px-5 text-sm text-white bg-green-900 md:pr-8 md:pl-25 lg:pl-28 xl:pl-8 h-14">
      <div className="w-full font-bold 2xl:m-auto max-w-144">
        STARBUCKS® REWARDS
      </div>
      <div className="flex flex-shrink-0">
        <button className="px-4 py-2 font-bold border border-white rounded-full md:hidden hover:bg-green-700">
          Join in the app
        </button>
      </div>
    </div>
  );
}

export default Banner;
